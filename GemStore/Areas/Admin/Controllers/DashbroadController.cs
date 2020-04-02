using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GemStore.Models;

namespace GemStore.Areas.Admin.Controllers
{
    public class DashbroadController : Controller
    {
        private GemStoreContext db = new GemStoreContext();
        // GET: Admin/Dashbroad
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult GetLineChartData(DateTime? startDate, DateTime? endDate)
        {
            var data = db.Orders.Where(o => o.CreatedAt >= startDate && o.CreatedAt <= endDate).OrderByDescending(o => o.CreatedAt).GroupBy(x => DbFunctions.TruncateTime(x.CreatedAt),
                (key, values) => new {
                    Day = key,
                    Total = values.Sum(x => x.TotalPrice)
                }).ToList();
            return new JsonResult()
            {
                Data = data,
                JsonRequestBehavior = JsonRequestBehavior.AllowGet,
            };
        }
        public ActionResult GetPieChartData(DateTime? startDate, DateTime? endDate)
        {
            var data = db.OrderDetails.Where(o => o.Order.CreatedAt >= startDate && o.Order.CreatedAt <= endDate).GroupBy(x => x.ItemMst)
                .Select(x => new
                {
                    Total = x.Sum(g => g.Quantity),
                    Item = x.Key.Name,
                    StyleCode = x.Key.StyleCode
                }).OrderByDescending(f => f.Total).ToList();
            return new JsonResult()
            {
                Data = data,
                JsonRequestBehavior = JsonRequestBehavior.AllowGet,
            };
        }
    }
}