using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using GemStore.Models;

namespace GemStore.Areas.Admin.Controllers
{
    public class ItemMstsController : Controller
    {
        private GemStoreContext db = new GemStoreContext();

        public ActionResult Test()
        {
            ViewBag.StoneQltyId = new SelectList(db.StoneQltyMsts, "StoneQltyId", "StoneQlty");
            ViewBag.DimQltyId = new SelectList(db.DimQltyMsts, "DimQltyId", "DimQlty");
            ViewBag.DimSubTypeId = new SelectList(db.DimQltySubMsts, "DimSubTypeId", "DimQlty");
            return View();
        }
        // GET: Admin/ItemMsts
        public ActionResult Index()
        {
            var itemMsts = db.ItemMsts.Include(i => i.BrandMst).Include(i => i.CatMst).Include(i => i.CertifyMst).Include(i => i.DimMst).Include(i => i.GoldKrt).Include(i => i.JewelTypeMst).Include(i => i.ProdMst).Include(i => i.StoneMst);
            return View(itemMsts.ToList());
        }

        // GET: Admin/ItemMsts/Details/5
        public ActionResult Details(string id)
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

        // GET: Admin/ItemMsts/Create
        public ActionResult Create()
        {
            ViewBag.BrandId = new SelectList(db.BrandMsts, "BrandId", "BrandType");
            ViewBag.CatId = new SelectList(db.CatMsts, "CatId", "CatName");
            ViewBag.CertifyId = new SelectList(db.CertifyMsts, "CertifyId", "CertifyType");
            ViewBag.StyleCode = new SelectList(db.DimMsts, "StyleCode", "DimQltyId");
            ViewBag.GoldTypeId = new SelectList(db.GoldKrts, "GoldTypeId", "GoldCrt");
            ViewBag.JewelleryId = new SelectList(db.JewelTypeMsts, "JewelleryId", "JewelleryType");
            ViewBag.ProdId = new SelectList(db.ProdMsts, "ProdId", "ProdType");
            ViewBag.StyleCode = new SelectList(db.StoneMsts, "StyleCode", "StoneQltyId");
            ViewBag.StoneQltyId = new SelectList(db.StoneQltyMsts, "StoneQltyId", "StoneQlty");
            ViewBag.DimQltyId = new SelectList(db.DimQltyMsts, "DimQltyId", "DimQlty");
            ViewBag.DimSubTypeId = new SelectList(db.DimQltySubMsts, "DimSubTypeId", "DimQlty");
            return View();
        }

        // POST: Admin/ItemMsts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "StyleCode,Name,Pairs,BrandId,Quantity,CatId,ProdQuantity,CertifyId,ProdId,GoldTypeId,GoldWt,StoneWt,NetGold,WstgPer,TotGrossWt,GoldRate,GoldAmt,GoldMaking,StoneMaking,OtherMaking,TotMaking,MRP,SalePrice,Thumbnails,JewelleryId")] ItemMst itemMst)
        {
            if (ModelState.IsValid)
            {
                db.ItemMsts.Add(itemMst);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.BrandId = new SelectList(db.BrandMsts, "BrandId", "BrandType", itemMst.BrandId);
            ViewBag.CatId = new SelectList(db.CatMsts, "CatId", "CatName", itemMst.CatId);
            ViewBag.CertifyId = new SelectList(db.CertifyMsts, "CertifyId", "CertifyType", itemMst.CertifyId);
            ViewBag.StyleCode = new SelectList(db.DimMsts, "StyleCode", "DimQltyId", itemMst.StyleCode);
            ViewBag.GoldTypeId = new SelectList(db.GoldKrts, "GoldTypeId", "GoldCrt", itemMst.GoldTypeId);
            ViewBag.JewelleryId = new SelectList(db.JewelTypeMsts, "JewelleryId", "JewelleryType", itemMst.JewelleryId);
            ViewBag.ProdId = new SelectList(db.ProdMsts, "ProdId", "ProdType", itemMst.ProdId);
            ViewBag.StyleCode = new SelectList(db.StoneMsts, "StyleCode", "StoneQltyId", itemMst.StyleCode);
            return View(itemMst);
        }

        // GET: Admin/ItemMsts/Edit/5
        public ActionResult Edit(string id)
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
            ViewBag.BrandId = new SelectList(db.BrandMsts, "BrandId", "BrandType", itemMst.BrandId);
            ViewBag.CatId = new SelectList(db.CatMsts, "CatId", "CatName", itemMst.CatId);
            ViewBag.CertifyId = new SelectList(db.CertifyMsts, "CertifyId", "CertifyType", itemMst.CertifyId);
            ViewBag.StyleCode = new SelectList(db.DimMsts, "StyleCode", "DimQltyId", itemMst.StyleCode);
            ViewBag.GoldTypeId = new SelectList(db.GoldKrts, "GoldTypeId", "GoldCrt", itemMst.GoldTypeId);
            ViewBag.JewelleryId = new SelectList(db.JewelTypeMsts, "JewelleryId", "JewelleryType", itemMst.JewelleryId);
            ViewBag.ProdId = new SelectList(db.ProdMsts, "ProdId", "ProdType", itemMst.ProdId);
            ViewBag.StyleCode = new SelectList(db.StoneMsts, "StyleCode", "StoneQltyId", itemMst.StyleCode);
            return View(itemMst);
        }

        // POST: Admin/ItemMsts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "StyleCode,Name,Pairs,BrandId,Quantity,CatId,ProdQuantity,CertifyId,ProdId,GoldTypeId,GoldWt,StoneWt,NetGold,WstgPer,TotGrossWt,GoldRate,GoldAmt,GoldMaking,StoneMaking,OtherMaking,TotMaking,MRP,SalePrice,Thumbnails,JewelleryId")] ItemMst itemMst)
        {
            if (ModelState.IsValid)
            {
                db.Entry(itemMst).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.BrandId = new SelectList(db.BrandMsts, "BrandId", "BrandType", itemMst.BrandId);
            ViewBag.CatId = new SelectList(db.CatMsts, "CatId", "CatName", itemMst.CatId);
            ViewBag.CertifyId = new SelectList(db.CertifyMsts, "CertifyId", "CertifyType", itemMst.CertifyId);
            ViewBag.StyleCode = new SelectList(db.DimMsts, "StyleCode", "DimQltyId", itemMst.StyleCode);
            ViewBag.GoldTypeId = new SelectList(db.GoldKrts, "GoldTypeId", "GoldCrt", itemMst.GoldTypeId);
            ViewBag.JewelleryId = new SelectList(db.JewelTypeMsts, "JewelleryId", "JewelleryType", itemMst.JewelleryId);
            ViewBag.ProdId = new SelectList(db.ProdMsts, "ProdId", "ProdType", itemMst.ProdId);
            ViewBag.StyleCode = new SelectList(db.StoneMsts, "StyleCode", "StoneQltyId", itemMst.StyleCode);
            return View(itemMst);
        }

        // GET: Admin/ItemMsts/Delete/5
        public ActionResult Delete(string id)
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

        // POST: Admin/ItemMsts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            ItemMst itemMst = db.ItemMsts.Find(id);
            db.ItemMsts.Remove(itemMst);
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
