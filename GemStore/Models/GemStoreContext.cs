using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class GemStoreContext : DbContext
    {
        public GemStoreContext() : base("name=GemStoreContext")
        {
        }

        public DbSet<Products> Products { get; set; }

        public System.Data.Entity.DbSet<GemStore.Models.BrandMst> BrandMsts { get; set; }
    }
}