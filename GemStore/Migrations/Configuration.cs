using GemStore.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<GemStoreContext>
    {
        //private readonly object BrandMsts;

        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(GemStoreContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            var userManager = new UserManager<ApplicationUser>(
                new UserStore<ApplicationUser>(context));
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            if (!roleManager.RoleExists("Admin"))
            {
                var role = new IdentityRole("Admin");
                roleManager.Create(role);

            }
            if (!roleManager.RoleExists("User"))
            {
                var role = new IdentityRole("User");
                roleManager.Create(role);

            }
            if (!context.Users.Any(u => u.UserName == "admin"))
            {
                var user = new ApplicationUser
                {
                    UserName = "admin",

                    //SecurityStamp = Guid.NewGuid().ToString("D"),
                    //PasswordHash = userManager.PasswordHasher.HashPassword("secret"),
                };
                userManager.Create(user, "password");
                userManager.AddToRole(user.Id, "Admin");
            }
            context.BrandMsts.AddOrUpdate(x => x.BrandId,
                new BrandMst() { BrandId = "1", BrandType = "Graff", },
                new BrandMst() { BrandId = "2", BrandType = "Buccellatib", },
                new BrandMst() { BrandId = "3", BrandType = "Chopard", },
                new BrandMst() { BrandId = "4", BrandType = "Buccellatib", }
            );
            context.CatMsts.AddOrUpdate(x => x.CatId,
                new CatMst() { CatId = "1", CatName = "Jewelry", },
                new CatMst() { CatId = "2", CatName = "Gemstones", },
                new CatMst() { CatId = "3", CatName = "Wedding Ring", }
            );
            context.ProdMsts.AddOrUpdate(x => x.ProdId,
                new ProdMst() { ProdId = "1", ProdType = "Shop By Type", },
                new ProdMst() { ProdId = "2", ProdType = "Featured Shop", },
                new ProdMst() { ProdId = "3", ProdType = "Trending Styles", }
            ); ;
            context.CertifyMsts.AddOrUpdate(x => x.CertifyId,
                new CertifyMst() { CertifyId = "1", CertifyType = "IGI", },
                new CertifyMst() { CertifyId = "2", CertifyType = "AGSL", },
                new CertifyMst() { CertifyId = "3", CertifyType = "GIA", },
                new CertifyMst() { CertifyId = "4", CertifyType = "IGI", },
                new CertifyMst() { CertifyId = "5", CertifyType = "HRD", }
            );
            context.GoldKrts.AddOrUpdate(x => x.GoldTypeId,
                new GoldKrt() { GoldTypeId = "1", GoldCrt = "18 CRT", },
                new GoldKrt() { GoldTypeId = "2", GoldCrt = "10 CRT", },
                new GoldKrt() { GoldTypeId = "3", GoldCrt = "14 CRT", },
                new GoldKrt() { GoldTypeId = "4", GoldCrt = "22 CRT", },
                new GoldKrt() { GoldTypeId = "5", GoldCrt = "16 CRT", }
            );
            context.JewelTypeMsts.AddOrUpdate(x => x.JewelleryId,
                // shop by type
                new JewelTypeMst() { JewelleryId = "1", JewelleryType = "Diamond", },
                new JewelTypeMst() { JewelleryId = "2", JewelleryType = "Necklace", },
                new JewelTypeMst() { JewelleryId = "3", JewelleryType = "Earring", },
                new JewelTypeMst() { JewelleryId = "4", JewelleryType = "Necklace", },
                new JewelTypeMst() { JewelleryId = "5", JewelleryType = "Watches", },
                new JewelTypeMst() { JewelleryId = "6", JewelleryType = "Rings", },
                new JewelTypeMst() { JewelleryId = "7", JewelleryType = "Bracelet", },
                // trending style
                new JewelTypeMst() { JewelleryId = "8", JewelleryType = "Sping Trends", },
                new JewelTypeMst() { JewelleryId = "9", JewelleryType = "Animal Jewelry", },
                new JewelTypeMst() { JewelleryId = "10", JewelleryType = "Chain Necklace", },
                new JewelTypeMst() { JewelleryId = "11", JewelleryType = "Heart Jewelry", },
                new JewelTypeMst() { JewelleryId = "12", JewelleryType = "Hoop Earrings", },
                new JewelTypeMst() { JewelleryId = "13", JewelleryType = "Floral Jewelry", },
                // feature shop
                new JewelTypeMst() { JewelleryId = "14", JewelleryType = "New Jewelry", },
                new JewelTypeMst() { JewelleryId = "15", JewelleryType = "Fashion Jewelry", },
                new JewelTypeMst() { JewelleryId = "16", JewelleryType = "Resort Jewelry", },
                new JewelTypeMst() { JewelleryId = "17", JewelleryType = "Birthstone Jewelry", },
            );
            context.StoneQltyMsts.AddOrUpdate(x => x.StoneQltyId,
                new StoneQltyMst() { StoneQltyId = "1", StoneQlty = "Ruby", },
                new StoneQltyMst() { StoneQltyId = "2", StoneQlty = "Garnet", },
                new StoneQltyMst() { StoneQltyId = "3", StoneQlty = "Sapphire", },
                new StoneQltyMst() { StoneQltyId = "4", StoneQlty = "Topaz", },
                new StoneQltyMst() { StoneQltyId = "5", StoneQlty = "Grandidierite ", },
                new StoneQltyMst() { StoneQltyId = "6", StoneQlty = "Garnet", },
                new StoneQltyMst() { StoneQltyId = "7", StoneQlty = "Opal", },
                new StoneQltyMst() { StoneQltyId = "8", StoneQlty = "Emerald", }
            );
            context.ItemMsts.AddOrUpdate(x => x.StyleCode,
                new ItemMst() {StyleCode = "ANH458", Name = "Green Onyx Rhodium Over Sterling Silver Dangle Earrings 6.50ctw", MRP = 59.99, SalePrice = 50.99, Thumbnails = "https://images.jtv.com/jewelry/JTV-ANH458-1-thumb.jpg, https://images.jtv.com/jewelry/JTV-ANH458-2-thumb.jpg, https://images.jtv.com/jewelry/JTV-ANH458-3-thumb.jpg", Pairs = 1, Quantity = 20, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "1", JewelleryId = "1", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "NCH024", Name = "Green Chrome Diopside Rhodium Over Silver Set of 2 Rings 2.11ctw", MRP = 81.99, SalePrice = 69.69, Thumbnails = "https://images.jtv.com/jewelry/JTV-NCH024-1-thumb.jpg, https://images.jtv.com/jewelry/JTV-NCH024-2-thumb.jpg, https://images.jtv.com/jewelry/JTV-NCH024-3-thumb.jpg", Pairs = 1, Quantity = 20, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "1", JewelleryId = "1", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2}
            );
            context.StoneMsts.AddOrUpdate(x => x.StyleCode,
                new StoneMst() {StyleCode = "ANH458", StoneQltyId = "1", StonePcs = 1, StoneCrt = 6, StoneRate = 35 }
            );
        }   
    }
}
