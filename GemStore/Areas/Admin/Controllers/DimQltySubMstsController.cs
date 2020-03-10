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
    public class DimQltySubMstsController : Controller
    {
        private GemStoreContext db = new GemStoreContext();

        // GET: Admin/DimQltySubMsts
        public ActionResult Index()
        {
            return View(db.DimQltySubMsts.ToList());
        }

        // GET: Admin/DimQltySubMsts/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DimQltySubMst dimQltySubMst = db.DimQltySubMsts.Find(id);
            if (dimQltySubMst == null)
            {
                return HttpNotFound();
            }
            return View(dimQltySubMst);
        }

        // GET: Admin/DimQltySubMsts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/DimQltySubMsts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "DimSubTypeId,DimQlty")] DimQltySubMst dimQltySubMst)
        {
            if (ModelState.IsValid)
            {
                db.DimQltySubMsts.Add(dimQltySubMst);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(dimQltySubMst);
        }

        // GET: Admin/DimQltySubMsts/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DimQltySubMst dimQltySubMst = db.DimQltySubMsts.Find(id);
            if (dimQltySubMst == null)
            {
                return HttpNotFound();
            }
            return View(dimQltySubMst);
        }

        // POST: Admin/DimQltySubMsts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "DimSubTypeId,DimQlty")] DimQltySubMst dimQltySubMst)
        {
            if (ModelState.IsValid)
            {
                db.Entry(dimQltySubMst).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(dimQltySubMst);
        }

        // GET: Admin/DimQltySubMsts/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DimQltySubMst dimQltySubMst = db.DimQltySubMsts.Find(id);
            if (dimQltySubMst == null)
            {
                return HttpNotFound();
            }
            return View(dimQltySubMst);
        }

        // POST: Admin/DimQltySubMsts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            DimQltySubMst dimQltySubMst = db.DimQltySubMsts.Find(id);
            db.DimQltySubMsts.Remove(dimQltySubMst);
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
