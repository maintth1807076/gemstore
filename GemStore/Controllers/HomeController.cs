using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using GemStore.Models;
using Newtonsoft.Json;
using PagedList;

namespace GemStore.Controllers
{
    public class HomeController : Controller
    {
        private GemStoreContext db = new GemStoreContext();
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
            ViewBag.BrandMsts = db.BrandMsts.ToList();
            ViewBag.CatMsts = db.CatMsts.ToList();
            ViewBag.ProdMsts = db.ProdMsts.ToList();
            ViewBag.JewelTypeMsts = db.JewelTypeMsts.ToList();
            return View(db.ItemMsts.ToList().ToPagedList(1, 3));

            
        }
        public ActionResult FilterShop(string[] BrandIds, string[] CatIds, string[] ProdIds, string[] JewelIds, int? pageSize, int? page)
        {
            ViewBag.CurrentBrandIds = BrandIds;
            ViewBag.CurrentCatIds = CatIds;
            ViewBag.CurrentProdIds = ProdIds;
            ViewBag.CurrentJewelIds = JewelIds;
            var itemMsts = db.ItemMsts.ToList();
            var itemsTemp = new List<ItemMst>();
            if (BrandIds != null)
            {
                foreach (var brandId in BrandIds)
                {
                    var list = db.ItemMsts.Where(x => x.BrandId == brandId).ToList();
                    itemsTemp.AddRange(list);
                }
                itemMsts = itemMsts.Intersect(itemsTemp).ToList();
                itemsTemp.Clear();
            }
            if (CatIds != null)
            {
                foreach (var catId in CatIds)
                {
                    var list = db.ItemMsts.Where(x => x.CatId == catId).ToList();
                    itemsTemp.AddRange(list);
                }
                itemMsts = itemMsts.Intersect(itemsTemp).ToList();
                itemsTemp.Clear();
            }
            if (ProdIds != null)
            {
                foreach (var prodId in ProdIds)
                {
                    var list = db.ItemMsts.Where(x => x.ProdId == prodId).ToList();
                    itemsTemp.AddRange(list);
                }
                itemMsts = itemMsts.Intersect(itemsTemp).ToList();
                itemsTemp.Clear();
            }
            if (JewelIds != null)
            {
                foreach (var jewelId in JewelIds)
                {
                    var list = db.ItemMsts.Where(x => x.JewelleryId == jewelId).ToList();
                    itemsTemp.AddRange(list);
                }
                itemMsts = itemMsts.Intersect(itemsTemp).ToList();
                itemsTemp.Clear();
            }

            if (page == null)
            {
                page = 1;
            }
            if (pageSize == null)
            {
                pageSize = 3;
            }
            return PartialView("_ShopPartial", itemMsts.ToPagedList((int)page, (int)pageSize));
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
        public ActionResult ProductDetail(string id)
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
        public ActionResult Checkout()
        {
            ViewBag.Message = "Your  checkout  page.";

            return View();
        }


    }
}