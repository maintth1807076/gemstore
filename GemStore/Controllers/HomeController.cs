using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GemStore.Models;

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
            ViewBag.BrandId = new SelectList(db.BrandMsts, "BrandId", "BrandType");
            ViewBag.CatId = new SelectList(db.CatMsts, "CatId", "CatName");
            ViewBag.CertifyId = new SelectList(db.CertifyMsts, "CertifyId", "CertifyType");
            ViewBag.GoldTypeId = new SelectList(db.GoldKrts, "GoldTypeId", "GoldCrt");
            ViewBag.JewelleryId = new SelectList(db.JewelTypeMsts, "JewelleryId", "JewelleryType");
            ViewBag.ProdId = new SelectList(db.ProdMsts, "ProdId", "ProdType");
            ViewData["StoneMst.StoneQltyId"] = new SelectList(db.StoneQltyMsts, "StoneQltyId", "StoneQlty");
            ViewData["DimMst.DimQltyId"] = new SelectList(db.DimQltyMsts, "DimQltyId", "DimQlty");
            ViewData["DimMst.DimSubTypeId"] = new SelectList(db.DimQltySubMsts, "DimSubTypeId", "DimQlty");
            return View(db.ItemMsts.ToList());

            
        }
        public ActionResult FilterShop(string[] BrandIds, string[] CatIds, string[] ProdIds, string[] JewelIds)
        {
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
            return PartialView("_ShopPartial", itemMsts);
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
        public ActionResult Cart()
        {
            ViewBag.Message = "Your  cart  page.";

            return View();
        }
        public ActionResult Checkout()
        {
            ViewBag.Message = "Your  checkout  page.";

            return View();
        }


    }
}