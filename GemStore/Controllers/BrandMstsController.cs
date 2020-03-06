using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using GemStore.Models;

namespace GemStore.Controllers
{
    public class BrandMstsController : Controller
    {
        private GemStoreContext db = new GemStoreContext();

        // GET: BrandMsts
        public ActionResult Index()
        {
            return View(db.BrandMsts.ToList());
        }

        // GET: BrandMsts/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BrandMst brandMst = db.BrandMsts.Find(id);
            if (brandMst == null)
            {
                return HttpNotFound();
            }
            return View(brandMst);
        }

        // GET: BrandMsts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: BrandMsts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "BrandId,BrandType")] BrandMst brandMst)
        {
            if (ModelState.IsValid)
            {
                db.BrandMsts.Add(brandMst);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(brandMst);
        }

        // GET: BrandMsts/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BrandMst brandMst = db.BrandMsts.Find(id);
            if (brandMst == null)
            {
                return HttpNotFound();
            }
            return View(brandMst);
        }

        // POST: BrandMsts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "BrandId,BrandType")] BrandMst brandMst)
        {
            if (ModelState.IsValid)
            {
                db.Entry(brandMst).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(brandMst);
        }

        // GET: BrandMsts/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            BrandMst brandMst = db.BrandMsts.Find(id);
            if (brandMst == null)
            {
                return HttpNotFound();
            }
            return View(brandMst);
        }

        // POST: BrandMsts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            BrandMst brandMst = db.BrandMsts.Find(id);
            db.BrandMsts.Remove(brandMst);
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
