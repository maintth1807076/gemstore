using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using GemStore.Models;
using Microsoft.AspNet.Identity.Owin;
using PagedList;

namespace GemStore.Areas.Admin.Controllers
{
    public class OrdersController : Controller
    {
        private GemStoreContext db = new GemStoreContext();
        public ActionResult GetListShipName()
        {
            var data = db.Orders.Select(t => new ShipOrder()
            {
                Id = t.OrderId,
                ShipName = t.ShipName,
            }).ToList();
            return new JsonResult()
            {
                Data = data,
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }
        public async Task<ActionResult> ChangeStatus(string id, int status)
        {
            var order = db.Orders.Find(id);
            if (order == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound, "Order's' not found");
            }

            if (status == (int)Order.OrderStatus.Confirmed && order.MemberId != null && order.MemberId.Length != 0)
            {
                var userManager = HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
                await userManager.SendEmailAsync(order.MemberId, "Confirm your order", "Your order is confirmed. It'll be shipped in a few days.");
            }
            if (status == (int)Order.OrderStatus.Shipping && order.MemberId != null && order.MemberId.Length != 0)
            {
                var userManager = HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
                await userManager.SendEmailAsync(order.MemberId, "Ship your order", "Your order is shipping. Please wait the call of shipper.");
            }
            order.Status = status;
            db.SaveChanges();
            return RedirectToAction("");
        }
        public ActionResult GetOrder(DateTime? startDate, DateTime? endDate, int page)
        {
            var data = db.Orders.Where(o => o.CreatedAt >= startDate && o.CreatedAt <= endDate).OrderBy(o => o.CreatedAt).GroupBy(x => DbFunctions.TruncateTime(x.CreatedAt),
                (key, values) => new {
                    Day = key,
                    Orders = values,
                    Page = page
                }).ToList();
            return new JsonResult()
            {
                Data = data,
                JsonRequestBehavior = JsonRequestBehavior.AllowGet,
            };
        }
        public ActionResult GetOrderDetail(string styleCode, int? page)
        {
            var listOrder = db.OrderDetails.ToList();
            if (styleCode != null)
            {
                listOrder = listOrder.Where(o => o.StyleCode == styleCode).ToList();
            }
            if (page == null)
            {
                page = 1;
            }
            return View(listOrder.ToPagedList((int)page, 30));
        }
        // GET: Admin/Orders
        public ActionResult Index(DateTime? createdAt, DateTime? startDate, DateTime? endDate, int? statusOrder, string orderId,int? page)
        {
            var total1 = 0.0;
            var list = db.Orders.Where(o => o.Status == 1).ToList();
            foreach (var item in list)
            {
                total1 += item.TotalPrice;
            }
            ViewBag.Total = total1;
            ViewBag.StatusOrder = Enum.GetValues(typeof(Order.OrderStatus))
                .Cast<Order.OrderStatus>()
                .Select(t => new StatusOrder()
                {
                    Id = (int)t,
                    Name = t.ToString(),
                }).ToList();
            var listOrder = db.Orders.OrderByDescending(o=>o.CreatedAt).ToList();
            if (statusOrder == null)
            {
                statusOrder = -2;
            }

            ViewBag.CurrentStatus = statusOrder;
            if (statusOrder != -2)
            {
                listOrder = listOrder.Where(o => o.Status == statusOrder).ToList();
            }
            if (createdAt != null)
            {
                listOrder = listOrder.Where(o => DbFunctions.TruncateTime(o.CreatedAt) == createdAt).ToList();
            }

            if (startDate != null & endDate != null)
            {
                ViewBag.CurrentStartDate = startDate.ToString();
                ViewBag.CurrentEndDate = endDate.ToString();
                listOrder = listOrder.Where(o => o.CreatedAt >= startDate && o.CreatedAt <= endDate).ToList();
                if (statusOrder == 1)
                {
                    var total = 0.0;
                    //var list = db.Orders.Where(o => o.CreatedAt >= startDate && o.CreatedAt <= endDate).GroupBy(x => DbFunctions.TruncateTime(x.CreatedAt),
                    //    (key, values) => new {
                    //        Day = key,
                    //        TotalPrice = values.Sum(x => x.TotalPrice),
                    //    }).ToList();
                    foreach (var item in listOrder)
                    {
                        total += item.TotalPrice;
                    }
                    ViewBag.Total = total;
                }
                
            }
            if (!String.IsNullOrEmpty(orderId))
            {
                listOrder = listOrder.Where(o => o.OrderId == orderId).ToList();
            }
            if (page == null)
            {
                page = 1;
            }

            ViewBag.CurrentPage = page;
            return View(listOrder.ToPagedList((int)page, 10));
        }

        // GET: Admin/Orders/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Order order = db.Orders.Find(id);
            if (order == null)
            {
                return HttpNotFound();
            }
            return View(order);
        }

        // GET: Admin/Orders/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/Orders/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "OrderId,MemberId,PaymentTypeId,ShipName,ShipAddress,ShipPhone,TotalPrice,CreatedAt,UpdatedAt,DeletedAt,Status")] Order order)
        {
            if (ModelState.IsValid)
            {
                db.Orders.Add(order);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(order);
        }

        // GET: Admin/Orders/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Order order = db.Orders.Find(id);
            if (order == null)
            {
                return HttpNotFound();
            }
            return View(order);
        }

        // POST: Admin/Orders/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "OrderId,MemberId,PaymentTypeId,ShipName,ShipAddress,ShipPhone,TotalPrice,CreatedAt,UpdatedAt,DeletedAt,Status")] Order order)
        {
            if (ModelState.IsValid)
            {
                db.Entry(order).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(order);
        }

        // GET: Admin/Orders/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Order order = db.Orders.Find(id);
            if (order == null)
            {
                return HttpNotFound();
            }
            return View(order);
        }

        // POST: Admin/Orders/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            Order order = db.Orders.Find(id);
            db.Orders.Remove(order);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
