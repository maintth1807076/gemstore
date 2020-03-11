using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GemStore.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Shop()
        {
            ViewBag.Message = "Your shop page.";

            return View();

            
        }
        public ActionResult Shop_list()
        {
            ViewBag.Message = "Your shop list page.";

            return View();
        }
        public ActionResult Blog()
        {
            ViewBag.Message = "Your blog page.";

            return View();
        }
        public ActionResult Portfolio()
        {
            ViewBag.Message = "Your portfolio page.";

            return View();
        }
        public ActionResult Product_detail()
        {
            ViewBag.Message = "Your  product_detail page.";

            return View();
        }

       
    }
}