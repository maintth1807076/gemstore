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
    public class DimQltyMstsController : Controller
    {
        private GemStoreContext db = new GemStoreContext();

        // GET: Admin/DimQltyMsts
        public ActionResult Index()
        {
            return View(db.DimQltyMsts.ToList());
        }

        // GET: Admin/DimQltyMsts/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DimQltyMst dimQltyMst = db.DimQltyMsts.Find(id);
            if (dimQltyMst == null)
            {
                return HttpNotFound();
            }
            return View(dimQltyMst);
        }

        // GET: Admin/DimQltyMsts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/DimQltyMsts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "DimQltyId, DimQlty,DimThumbnail")] DimQltyMst dimQltyMst)
        {
            dimQltyMst.DimQltyId = "dimq" + Guid.NewGuid().ToString().GetHashCode().ToString("x");
            if (ModelState.IsValid)
            {
                db.DimQltyMsts.Add(dimQltyMst);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(dimQltyMst);
        }

        // GET: Admin/DimQltyMsts/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DimQltyMst dimQltyMst = db.DimQltyMsts.Find(id);
            if (dimQltyMst == null)
            {
                return HttpNotFound();
            }
            return View(dimQltyMst);
        }

        // POST: Admin/DimQltyMsts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "DimQltyId,DimQlty,DimThumbnail")] DimQltyMst dimQltyMst)
        {
            if (ModelState.IsValid)
            {
                db.Entry(dimQltyMst).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(dimQltyMst);
        }

        // GET: Admin/DimQltyMsts/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DimQltyMst dimQltyMst = db.DimQltyMsts.Find(id);
            if (dimQltyMst == null)
            {
                return HttpNotFound();
            }
            return View(dimQltyMst);
        }

        // POST: Admin/DimQltyMsts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            DimQltyMst dimQltyMst = db.DimQltyMsts.Find(id);
            db.DimQltyMsts.Remove(dimQltyMst);
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
