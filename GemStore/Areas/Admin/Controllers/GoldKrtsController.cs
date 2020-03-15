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
    public class GoldKrtsController : Controller
    {
        private GemStoreContext db = new GemStoreContext();

        // GET: Admin/GoldKrts
        public ActionResult Index()
        {
            return View(db.GoldKrts.ToList());
        }

        // GET: Admin/GoldKrts/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            GoldKrt goldKrt = db.GoldKrts.Find(id);
            if (goldKrt == null)
            {
                return HttpNotFound();
            }
            return View(goldKrt);
        }

        // GET: Admin/GoldKrts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/GoldKrts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "GoldTypeId,GoldCrt,GoldThumbnail")] GoldKrt goldKrt)
        {
            goldKrt.GoldTypeId = "gold" + Guid.NewGuid().ToString().GetHashCode().ToString("x");
            if (ModelState.IsValid)
            {
                db.GoldKrts.Add(goldKrt);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(goldKrt);
        }

        // GET: Admin/GoldKrts/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            GoldKrt goldKrt = db.GoldKrts.Find(id);
            if (goldKrt == null)
            {
                return HttpNotFound();
            }
            return View(goldKrt);
        }

        // POST: Admin/GoldKrts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "GoldTypeId,GoldCrt")] GoldKrt goldKrt)
        {
            if (ModelState.IsValid)
            {
                db.Entry(goldKrt).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(goldKrt);
        }

        // GET: Admin/GoldKrts/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            GoldKrt goldKrt = db.GoldKrts.Find(id);
            if (goldKrt == null)
            {
                return HttpNotFound();
            }
            return View(goldKrt);
        }

        // POST: Admin/GoldKrts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            GoldKrt goldKrt = db.GoldKrts.Find(id);
            db.GoldKrts.Remove(goldKrt);
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
