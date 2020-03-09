using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;

namespace GemStore.Models
{
    public class GemStoreContext : IdentityDbContext<ApplicationUser>
    {
        public GemStoreContext() : base("name=GemStoreContext", throwIfV1Schema: false)
        {
        }
        public static GemStoreContext Create()
        {
            return new GemStoreContext();
        }
        public DbSet<BrandMst> BrandMsts { get; set; }
        public DbSet<CatMst> CatMsts { get; set; }
        public DbSet<GoldKrt> GoldKrts { get; set; }
        public DbSet<ProdMst> ProdMsts { get; set; }
        public DbSet<CertifyMst> CertifyMsts { get; set; }
        public DbSet<JewelTypeMst> JewelTypeMsts { get; set; }
        public DbSet<StoneQltyMst> StoneQltyMsts { get; set; }
        public DbSet<DimQltyMst> DimQltyMsts { get; set; }
        public DbSet<DimQltySubMst> DimQltySubMsts { get; set; }
        public DbSet<ItemMst> ItemMsts { get; set; }
        public DbSet<StoneMst> StoneMsts { get; set; }
        public DbSet<DimMst> DimMsts { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
    }
}