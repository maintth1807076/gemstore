using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class OrderDetail
    {
        [Key, Column(Order = 0)]
        public string StyleCode { get; set; }
        [Key, Column(Order = 1)]
        public string OrderId { get; set; }
        public virtual Order Order { get; set; }
        public virtual ItemMst ItemMst { get; set; }
        public int Quantity { get; set; }
        public double UnitPrice { get; set; }
    }
}