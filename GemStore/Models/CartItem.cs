using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class CartItem
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Thumbnail { get; set; }
        public double UnitPrice { get; set; }
        public int Quantity { get; set; }
    }
}