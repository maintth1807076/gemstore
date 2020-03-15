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
    public class ProdMstsController : Controller
    {
        private GemStoreContext db = new GemStoreContext();

        // GET: Admin/ProdMsts
        public ActionResult Index()
        {
            return View(db.ProdMsts.ToList());
        }

        // GET: Admin/ProdMsts/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProdMst prodMst = db.ProdMsts.Find(id);
            if (prodMst == null)
            {
                return HttpNotFound();
            }
            return View(prodMst);
        }

        // GET: Admin/ProdMsts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/ProdMsts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ProdId,ProdType,ProdThumbnail")] ProdMst prodMst)
        {
            prodMst.ProdId = "pro" + Guid.NewGuid().ToString().GetHashCode().ToString("x");
            if (ModelState.IsValid)
            {
                db.ProdMsts.Add(prodMst);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(prodMst);
        }

        // GET: Admin/ProdMsts/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProdMst prodMst = db.ProdMsts.Find(id);
            if (prodMst == null)
            {
                return HttpNotFound();
            }
            return View(prodMst);
        }

        // POST: Admin/ProdMsts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ProdId,ProdType")] ProdMst prodMst)
        {
            if (ModelState.IsValid)
            {
                db.Entry(prodMst).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(prodMst);
        }

        // GET: Admin/ProdMsts/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProdMst prodMst = db.ProdMsts.Find(id);
            if (prodMst == null)
            {
                return HttpNotFound();
            }
            return View(prodMst);
        }

        // POST: Admin/ProdMsts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            ProdMst prodMst = db.ProdMsts.Find(id);
            db.ProdMsts.Remove(prodMst);
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
