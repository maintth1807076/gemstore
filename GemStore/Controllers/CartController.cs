using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using GemStore.Models;
using Newtonsoft.Json;

namespace GemStore.Controllers
{
    public class CartController : Controller
    {
        private GemStoreContext db = new GemStoreContext();
        public ActionResult getDepartment(string StyleCode)
        {
            return Json(db.StoneMsts.Where(x=>x.StyleCode == StyleCode).Select(x => new
            {
                StyleCode = x.StyleCode,
            }).ToList(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult TestPaypal()
        {
            
            return View();
        }
        public ActionResult Test01()
        {
            ViewBag.Item = new SelectList(db.ItemMsts, "StyleCode", "Name");
            ViewBag.Stone = new SelectList(db.StoneMsts, "StyleCode", "StyleCode");
            return View();
        }
        
        public ActionResult Test02(string StyleCode)
        {
            Debug.WriteLine(StyleCode);
            var list = db.StoneMsts.Where(x => x.StyleCode == StyleCode);
            ViewBag.Stone = new SelectList(list, "StyleCode", "StyleCode");
            ViewBag.T = StyleCode;
            return PartialView();
        }
        // GET: Cart
        public ActionResult Index()
        {
            var itemMsts = db.ItemMsts.ToList();
            return View(itemMsts);
        }
        public ActionResult ProductDetails(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ItemMst itemMst = db.ItemMsts.Find(id);
            if (itemMst == null)
            {
                return HttpNotFound();
            }
            return View(itemMst);
        }
        //[HttpPost, ActionName("Create")]
        //[ValidateAntiForgeryToken]
        public ActionResult CreateOrder(string cart)
        {
            
            var shoppingCart = JsonConvert.DeserializeObject<Dictionary<string, CartItem>>(cart, new JsonSerializerSettings
            {
                NullValueHandling = NullValueHandling.Ignore
            });
           

            // load cart trong session.
            //var shoppingCart = LoadShoppingCart();
            //if (shoppingCart.GetCartItems().Count <= 0)
            //{
            //    return new HttpStatusCodeResult(HttpStatusCode.BadRequest, "Bad request");
            //}
            // chuyển thông tin shopping cart thành Order.
            var order = new Order
            {
                OrderId = Guid.NewGuid().ToString().GetHashCode().ToString("x"),
                MemberId = 1,
                PaymentTypeId = (int)Order.PaymentType.Cod,
                ShipName = "Xuan Hung",
                ShipPhone = "0912345678",
                ShipAddress = "Ton That Thuyet",
                OrderDetails = new List<OrderDetail>()
            };
            //// Tạo order detail từ cart item.
            double totalPrice = 0;
            foreach (var cartItem in shoppingCart.Values)
            {
                var orderDetail = new OrderDetail()
                {
                    StyleCode = cartItem.Id,
                    OrderId = order.OrderId,
                    Quantity = cartItem.Quantity,
                    UnitPrice = cartItem.UnitPrice
                };
                order.OrderDetails.Add(orderDetail);
                totalPrice += cartItem.UnitPrice * cartItem.Quantity;
            }

            order.TotalPrice = totalPrice;
            db.Orders.Add(order);
            db.SaveChanges();
            //// lưu vào database.
            //var transaction = db.Database.BeginTransaction();
            //try
            //{

            //    transaction.Commit();
            //}
            //catch (Exception e)
            //{
            //    Console.WriteLine(e);
            //    transaction.Rollback();
            //}
            return Redirect("/Cart/Test");
        }
        public ActionResult Test()
        {
            return View(db.Orders.ToList());
        }
    }
}