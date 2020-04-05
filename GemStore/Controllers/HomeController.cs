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
            return View(db.ItemMsts.ToList());
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
        public ActionResult Shop(string keyWord)
        {
            ViewBag.BrandMsts = db.BrandMsts.ToList();
            ViewBag.CatMsts = db.CatMsts.ToList();
            ViewBag.ProdMsts = db.ProdMsts.ToList();
            ViewBag.JewelTypeMsts = db.JewelTypeMsts.ToList();
            var itemMsts = db.ItemMsts.ToList();
            if (!String.IsNullOrEmpty(keyWord))
            {
                ViewBag.CurrentKeyWord = keyWord;
                itemMsts = itemMsts.Where(i => i.Name.IndexOf(keyWord, StringComparison.OrdinalIgnoreCase) != -1 || i.BrandMst.BrandType.Contains(keyWord)).ToList();
            }
            return View(itemMsts.ToPagedList(1, 6));

            
        }
        public ActionResult FilterShop(int? sortBy, int? rangePrice, string[] BrandIds, string[] CatIds, string[] ProdIds, string[] JewelIds, int? pageSize, int? page)
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
            if (rangePrice != null)
            {
                ViewBag.CurrentRangePrice = rangePrice;
                switch (rangePrice)
                {
                    case 1:
                        itemMsts = itemMsts.Where(i => i.SalePrice < 50).ToList();
                        break;
                    case 2:
                        itemMsts = itemMsts.Where(i => i.SalePrice >= 50 && i.SalePrice <= 100).ToList();
                        break;
                    case 3:
                        itemMsts = itemMsts.Where(i => i.SalePrice >= 100 && i.SalePrice <= 200).ToList();
                        break;
                    case 4:
                        itemMsts = itemMsts.Where(i => i.SalePrice >= 200 && i.SalePrice <= 500).ToList();
                        break;
                    case 5:
                        itemMsts = itemMsts.Where(i => i.SalePrice > 500).ToList();
                        break;
                    default: break;
                }
            }
            if (sortBy != null)
            {
                ViewBag.CurrentSortBy = sortBy;
                switch (sortBy)
                {
                    case 1:
                        itemMsts = itemMsts.OrderBy(i=>i.CreatedAt).ToList();
                        break;
                    case 2:
                        itemMsts = itemMsts.OrderBy(i => i.SalePrice).ToList();
                        break;
                    case 3:
                        itemMsts = itemMsts.OrderByDescending(i=>i.SalePrice).ToList();
                        break;
                    default: break;
                }
            }
            if (page == null)
            {
                page = 1;
            }
            if (pageSize == null)
            {
                pageSize = 6;
            }
            ViewBag.CurrentPageSize = pageSize;
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
        public ActionResult BlogDetails()
        {
            ViewBag.Message = "Your blog details page.";

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
    }
}