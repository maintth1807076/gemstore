using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using GemStore.Models;

namespace GemStore.Controllers
{
    public class CartController : Controller
    {
        private GemStoreContext db = new GemStoreContext();
        // GET: Cart
        public ActionResult Index()
        {
            var itemMsts = db.ItemMsts.ToList();
            return View(itemMsts);
        }
        [HttpPost, ActionName("Create")]
        [ValidateAntiForgeryToken]
        public ActionResult CreateOrder()
        {
            // load cart trong session.
            //var shoppingCart = LoadShoppingCart();
            //if (shoppingCart.GetCartItems().Count <= 0)
            //{
            //    return new HttpStatusCodeResult(HttpStatusCode.BadRequest, "Bad request");
            //}
            // chuyển thông tin shopping cart thành Order.
            //var order = new Order
            //{
            //    TotalPrice = shoppingCart.GetTotalPrice(),
            //    MemberId = 1,
            //    PaymentTypeId = (int)Order.PaymentType.Cod,
            //    ShipName = "Xuan Hung",
            //    ShipPhone = "0912345678",
            //    ShipAddress = "Ton That Thuyet",
            //    OrderDetails = new List<OrderDetail>()
            //};
            //// Tạo order detail từ cart item.
            //foreach (var cartItem in shoppingCart.GetCartItems())
            //{
            //    var orderDetail = new OrderDetail()
            //    {
            //        StyleCode = cartItem.Value.ProductId,
            //        OrderId = order.Id,
            //        Quantity = cartItem.Value.Quantity,
            //        UnitPrice = cartItem.Value.Price
            //    };
            //    order.OrderDetails.Add(orderDetail);
            //}
            //db.Orders.Add(order);
            //db.SaveChanges();
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
            return Redirect("/Cart/Index");
        }
    }
}