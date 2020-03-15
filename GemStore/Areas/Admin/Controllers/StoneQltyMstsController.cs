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
    public class StoneQltyMstsController : Controller
    {
        private GemStoreContext db = new GemStoreContext();

        // GET: Admin/StoneQltyMsts
        public ActionResult Index()
        {
            return View(db.StoneQltyMsts.ToList());
        }

        // GET: Admin/StoneQltyMsts/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            StoneQltyMst stoneQltyMst = db.StoneQltyMsts.Find(id);
            if (stoneQltyMst == null)
            {
                return HttpNotFound();
            }
            return View(stoneQltyMst);
        }

        // GET: Admin/StoneQltyMsts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/StoneQltyMsts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "StoneQltyId,StoneQlty,Description,StoneThumbnail")] StoneQltyMst stoneQltyMst)
        {
            stoneQltyMst.StoneQltyId = "stone" + Guid.NewGuid().ToString().GetHashCode().ToString("x");
            if (ModelState.IsValid)
            {
                db.StoneQltyMsts.Add(stoneQltyMst);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(stoneQltyMst);
        }

        // GET: Admin/StoneQltyMsts/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            StoneQltyMst stoneQltyMst = db.StoneQltyMsts.Find(id);
            if (stoneQltyMst == null)
            {
                return HttpNotFound();
            }
            return View(stoneQltyMst);
        }

        // POST: Admin/StoneQltyMsts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "StoneQltyId,StoneQlty,Description")] StoneQltyMst stoneQltyMst)
        {
            if (ModelState.IsValid)
            {
                db.Entry(stoneQltyMst).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(stoneQltyMst);
        }

        // GET: Admin/StoneQltyMsts/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            StoneQltyMst stoneQltyMst = db.StoneQltyMsts.Find(id);
            if (stoneQltyMst == null)
            {
                return HttpNotFound();
            }
            return View(stoneQltyMst);
        }

        // POST: Admin/StoneQltyMsts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            StoneQltyMst stoneQltyMst = db.StoneQltyMsts.Find(id);
            db.StoneQltyMsts.Remove(stoneQltyMst);
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
