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
    public class JewelTypeMstsController : Controller
    {
        private GemStoreContext db = new GemStoreContext();

        // GET: Admin/JewelTypeMsts
        public ActionResult Index()
        {
            return View(db.JewelTypeMsts.ToList());
        }

        // GET: Admin/JewelTypeMsts/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            JewelTypeMst jewelTypeMst = db.JewelTypeMsts.Find(id);
            if (jewelTypeMst == null)
            {
                return HttpNotFound();
            }
            return View(jewelTypeMst);
        }

        // GET: Admin/JewelTypeMsts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/JewelTypeMsts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "JewelleryId,JewelleryType,JewelThumbnail")] JewelTypeMst jewelTypeMst)
        {
            jewelTypeMst.JewelleryId = "jewel" + Guid.NewGuid().ToString().GetHashCode().ToString("x");
            if (ModelState.IsValid)
            {
                db.JewelTypeMsts.Add(jewelTypeMst);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(jewelTypeMst);
        }

        // GET: Admin/JewelTypeMsts/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            JewelTypeMst jewelTypeMst = db.JewelTypeMsts.Find(id);
            if (jewelTypeMst == null)
            {
                return HttpNotFound();
            }
            return View(jewelTypeMst);
        }

        // POST: Admin/JewelTypeMsts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "JewelleryId,JewelleryType,JewelThumbnail")] JewelTypeMst jewelTypeMst)
        {
            if (ModelState.IsValid)
            {
                db.Entry(jewelTypeMst).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(jewelTypeMst);
        }

        // GET: Admin/JewelTypeMsts/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            JewelTypeMst jewelTypeMst = db.JewelTypeMsts.Find(id);
            if (jewelTypeMst == null)
            {
                return HttpNotFound();
            }
            return View(jewelTypeMst);
        }

        // POST: Admin/JewelTypeMsts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            JewelTypeMst jewelTypeMst = db.JewelTypeMsts.Find(id);
            db.JewelTypeMsts.Remove(jewelTypeMst);
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
