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
                new BrandMst() { BrandId = "1" , BrandType= "Graff", },
                new BrandMst() { BrandId = "2" , BrandType= "Buccellatib", },
                new BrandMst() { BrandId = "3" , BrandType= "Chopard", },
                new BrandMst() { BrandId = "4" , BrandType= "Buccellatib", }
            );
            context.CatMsts.AddOrUpdate(x => x.CatId,
                new CatMst() { CatId = "1", CatName = "Jewelry", },
                new CatMst() { CatId = "2", CatName = "Gemstones", },
                new CatMst() { CatId = "3", CatName = "Wedding Ring", }
            );
            context.ProdMst.AddOrUpdate(x => x.ProdId,
                new ProdMst() { ProdId = "1", ProdType = "Shop By Type", },
                new ProdMst() { ProdId = "2", ProdType = "Featured Shop", },
                new ProdMst() { ProdId = "3", ProdType = "Trending Styles", }
            ); ;
            context.CertifyMst.AddOrUpdate(x => x.CertifyId,
                new CertifyMst() { CertifyId = "1", CertifyType = "IGI", },
                new CertifyMst() { CertifyId = "2", CertifyType = "AGSL", },
                new CertifyMst() { CertifyId = "3", CertifyType = "GIA", },
                new CertifyMst() { CertifyId = "4", CertifyType = "IGI", },
                new CertifyMst() { CertifyId = "5", CertifyType = "HRD", }
            );
            context.GoldKrt.AddOrUpdate(x => x.GoldTypeId,
                new GoldKrt() { GoldTypeId = "1", GoldCrt = "18 CRT", },
                new GoldKrt() { GoldTypeId = "2", GoldCrt = "10 CRT", },
                new GoldKrt() { GoldTypeId = "3", GoldCrt = "14 CRT", },
                new GoldKrt() { GoldTypeId = "4", GoldCrt = "22 CRT", }
            );
            context.JewelTypeMst.AddOrUpdate(x => x.JewelleryId,
                new JewelTypeMst() { JewelleryId = "1", JewelleryType = "Diamond", },
                new JewelTypeMst() { JewelleryId = "2", JewelleryType = "Necklace", },
                new JewelTypeMst() { JewelleryId = "3", JewelleryType = "Earring", },
                new JewelTypeMst() { JewelleryId = "4", JewelleryType = "Necklace", },
                new JewelTypeMst() { JewelleryId = "5", JewelleryType = "Watches", },
                new JewelTypeMst() { JewelleryId = "6", JewelleryType = "Rings", },
                new JewelTypeMst() { JewelleryId = "7", JewelleryType = "Bracelet", },
                new JewelTypeMst() { JewelleryId = "8", JewelleryType = "Sping Trends", },
                new JewelTypeMst() { JewelleryId = "9", JewelleryType = "Animal Jewelry", }
                new JewelTypeMst() { JewelleryId = "10", JewelleryType = "New Jewelry", }
            );
            context.StoneQltyMst.AddOrUpdate(x => x.StoneQltyID,
                new StoneQltyMst() { StoneQltyID = "1", StoneQlty = "Ruby", },
                new StoneQltyMst() { StoneQltyID = "2", StoneQlty = "Garnet", },
                new StoneQltyMst() { StoneQltyID = "3", StoneQlty = "Sapphire", },
                new StoneQltyMst() { StoneQltyID = "4", StoneQlty = "Topaz", },
                new StoneQltyMst() { StoneQltyID = "5", StoneQlty = "Grandidierite ", },
                new StoneQltyMst() { StoneQltyID = "6", StoneQlty = "Garnet", },
                new StoneQltyMst() { StoneQltyID = "7", StoneQlty = "Opal", },
                new StoneQltyMst() { StoneQltyID = "8", StoneQlty = "Emerald", }
            );
            context.ItemMsts.AddOrUpdate(x => x.StyleCode,
                new ItemMst() { StyleCode = "CEH017", BrandId = "1", Pairs = 1, Quantity = 5, CatId = "1", ProdId = "1", JewelleryId= "2", MRP = 110, },
                new ItemMst() { StyleCode = "DOCQF1B", BrandId = "2", Pairs = 1, Quantity = 10, CatId = "2", ProdId = "1", JewelleryId = "3", GoldTypeId = "1", GoldWt = 4.06, MRP = 35, },
                new ItemMst() { StyleCode = "FTW11", BrandId = "3", Pairs = 1, Quantity = 3, CatId = "1", ProdId = "2", JewelleryId = "4", MRP = 150, },
                new ItemMst() { StyleCode = "COR070", BrandId = "4", Pairs = 1, Quantity = 3, CatId = "1", ProdId = "1", JewelleryId = "5", MRP = 150, },
                new ItemMst() { StyleCode = "DOCS934", BrandId = "2", Pairs = 1, Quantity = 20, CatId = "1", ProdId = "3", JewelleryId = "7", MRP = 250, },
                new ItemMst() { StyleCode = "DOM086", BrandId = "1", Pairs = 1, Quantity = 16, CatId = "1", ProdId = "2", JewelleryId = "10", MRP = 35, }
            );
            context.StoneMsts.AddOrUpdate(x => x.StyleCode,
                new StoneMst() { StyleCode = "S3C014", StoneQltyID = "3", StonePcs = 1, StoneCrt = 6, StoneRate = 35 },
                new StoneMst() { StyleCode = "HEV108", StoneQltyID = "3", StonePcs = 1, StoneCrt = 2, StoneRate = 22 },
                new StoneMst() { StyleCode = "OP574", StoneQltyID = "6", StonePcs = 1, StoneCrt = 1, StoneRate = 38 },
                new StoneMst() { StyleCode = "ES151", StoneQltyID = "6", StonePcs = 1, StoneCrt = 1, StoneRate = 49 }
            );
        }   
    }
}
