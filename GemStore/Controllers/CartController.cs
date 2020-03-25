using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using GemStore.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using Newtonsoft.Json;

namespace GemStore.Controllers
{
    public class CartController : Controller
    {
        private GemStoreContext db = new GemStoreContext();
        private static string SHOPPING_CART_NAME = "shoppingCart";
        private void ClearCart()
        {
            Session.Remove(SHOPPING_CART_NAME);
        }
        private void SaveShoppingCart(ShoppingCart shoppingCart)
        {
            Session[SHOPPING_CART_NAME] = shoppingCart;
        }
        public ShoppingCart LoadShoppingCart()
        {
            if (!(Session[SHOPPING_CART_NAME] is ShoppingCart sc))
            {
                sc = new ShoppingCart();
            }
            return sc;
        }
        public ActionResult AddCart(string productId, int quantity)
        {
            if (quantity <= 0)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest, "Invalid Quantity");
            }
            var product = db.ItemMsts.Find(productId);
            if (product == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound, "Product's' not found");
            }
            var sc = LoadShoppingCart();
            sc.AddCart(product, quantity);
            SaveShoppingCart(sc);
            return PartialView("_ModalCartPartial", LoadShoppingCart());
        }
        public ActionResult UpdateCart(string cartItems, double totalPrice)
        {
            var CartItems = JsonConvert.DeserializeObject<Dictionary<string, CartItem>>(cartItems);
            var sc = new ShoppingCart();
            sc.SetCartItems(CartItems);
            sc.SetTotalPrice(totalPrice);
            SaveShoppingCart(sc);
            //if (quantity <= 0)
            //{
            //    return new HttpStatusCodeResult(HttpStatusCode.BadRequest, "Invalid Quantity");
            //}
            //var product = db.ItemMsts.Find(productId);
            //if (product == null)
            //{
            //    return new HttpStatusCodeResult(HttpStatusCode.NotFound, "Product's' not found");
            //}
            //var sc = LoadShoppingCart();
            //sc.UpdateCart(product, quantity);
            //SaveShoppingCart(sc);
            return PartialView("_ModalCartPartial", LoadShoppingCart());
        }
        public ActionResult RemoveCart(string productId)
        {
            var product = db.ItemMsts.Find(productId);
            if (product == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound, "Product's' not found");
            }
            var sc = LoadShoppingCart();
            sc.RemoveFromCart(product.StyleCode);
            SaveShoppingCart(sc);
            return PartialView("_ModalCartPartial", LoadShoppingCart());
        }

        public ActionResult DeleteCart()
        {
            ClearCart();
            return Redirect("/Home/Shop");
        }
        public ActionResult Index()
        {
            return View("Cart", LoadShoppingCart());
        }
        //[HttpPost, ActionName("Create")]
        //[ValidateAntiForgeryToken]
        //public ActionResult CreateOrder(string cart)
        //{
            
        //    var shoppingCart = JsonConvert.DeserializeObject<Dictionary<string, CartItem>>(cart, new JsonSerializerSettings
        //    {
        //        NullValueHandling = NullValueHandling.Ignore
        //    });
           

        //    // load cart trong session.
        //    //var shoppingCart = LoadShoppingCart();
        //    //if (shoppingCart.GetCartItems().Count <= 0)
        //    //{
        //    //    return new HttpStatusCodeResult(HttpStatusCode.BadRequest, "Bad request");
        //    //}
        //    // chuyển thông tin shopping cart thành Order.
        //    var order = new Order
        //    {
        //        OrderId = Guid.NewGuid().ToString().GetHashCode().ToString("x"),
        //        MemberId = 1,
        //        PaymentTypeId = (int)Order.PaymentType.Cod,
        //        ShipName = "Xuan Hung",
        //        ShipPhone = "0912345678",
        //        ShipAddress = "Ton That Thuyet",
        //        OrderDetails = new List<OrderDetail>()
        //    };
        //    //// Tạo order detail từ cart item.
        //    double totalPrice = 0;
        //    foreach (var cartItem in shoppingCart.Values)
        //    {
        //        var orderDetail = new OrderDetail()
        //        {
        //            StyleCode = cartItem.Id,
        //            OrderId = order.OrderId,
        //            Quantity = cartItem.Quantity,
        //            UnitPrice = cartItem.UnitPrice
        //        };
        //        order.OrderDetails.Add(orderDetail);
        //        totalPrice += cartItem.UnitPrice * cartItem.Quantity;
        //    }

        //    order.TotalPrice = totalPrice;
        //    db.Orders.Add(order);
        //    db.SaveChanges();
        //    return Redirect("/Cart/Test");
        //}
        public ActionResult CreateOrder(string shipFirstName, string shipLastName, string shipPhone, string shipAddress)
        {
            var shoppingCart = LoadShoppingCart();
            if (shoppingCart.GetCartItems().Count <= 0)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest, "Bad request");
            }
            var order = new Order
            {
                OrderId = Guid.NewGuid().ToString().GetHashCode().ToString("x"),
                TotalPrice = shoppingCart.GetTotalPrice(),
                MemberId = User.Identity.GetUserId(),
                PaymentTypeId = (int)Order.PaymentType.Cod,
                ShipName = shipFirstName + " " + shipLastName,
                ShipPhone = shipPhone,
                ShipAddress = shipAddress,
                OrderDetails = new List<OrderDetail>()
            };
            foreach (var cartItem in shoppingCart.GetCartItems())
            {
                var orderDetail = new OrderDetail()
                {
                    StyleCode = cartItem.Value.Id,
                    OrderId = order.OrderId,
                    Quantity = cartItem.Value.Quantity,
                    UnitPrice = cartItem.Value.UnitPrice
                };
                order.OrderDetails.Add(orderDetail);
            }
            db.Orders.Add(order);
            db.SaveChanges();
            ClearCart();
            return Redirect("/Cart/Test");
        }

        public ActionResult Test()
        {
            return View(db.Orders.Where(o => o.Status != (int)Order.OrderStatus.Deleted).ToList());
        }
        public async Task<ActionResult> ChangeStatus(string id, int status)
        {
            var order = db.Orders.Find(id);
            if (order == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound, "Order's' not found");
            }

            if (status == (int) Order.OrderStatus.Confirmed)
            {
                var userManager = HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
                await userManager.SendEmailAsync(order.MemberId, "Confirm your order", "Please confirm your order");
            }
            order.Status = status;
            db.SaveChanges();
            return RedirectToAction("Test");
        }
    }
}