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
    public class CatMstsController : Controller
    {
        private GemStoreContext db = new GemStoreContext();

        // GET: Admin/CatMsts
        public ActionResult Index()
        {
            return View(db.CatMsts.ToList());
        }

        // GET: Admin/CatMsts/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CatMst catMst = db.CatMsts.Find(id);
            if (catMst == null)
            {
                return HttpNotFound();
            }
            return View(catMst);
        }

        // GET: Admin/CatMsts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/CatMsts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "CatId,CatName,CatThumbnail")] CatMst catMst)
        {
            if (ModelState.IsValid)
            {
                db.CatMsts.Add(catMst);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(catMst);
        }

        // GET: Admin/CatMsts/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CatMst catMst = db.CatMsts.Find(id);
            if (catMst == null)
            {
                return HttpNotFound();
            }
            return View(catMst);
        }

        // POST: Admin/CatMsts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "CatId,CatName,CatThumbnail")] CatMst catMst)
        {
            if (ModelState.IsValid)
            {
                db.Entry(catMst).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(catMst);
        }

        // GET: Admin/CatMsts/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CatMst catMst = db.CatMsts.Find(id);
            if (catMst == null)
            {
                return HttpNotFound();
            }
            return View(catMst);
        }

        // POST: Admin/CatMsts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            CatMst catMst = db.CatMsts.Find(id);
            db.CatMsts.Remove(catMst);
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
