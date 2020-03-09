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
        private readonly object BrandMsts;

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
            context.BrandMsts.AddOrUpdate( x => x.BrandId,
                new BrandMst() { BrandId = "1" , BrandType= "Graff", },
                new BrandMst() { BrandId = "2" , BrandType= "Buccellatib", }
            );
            context.CatMsts.AddOrUpdate(x => x.CatId,
                new CatMst() { CatId = "3", CatName = "Jewelry", },
                new CatMst() { CatId = "4", CatName = "Gémtones", }
            );
            context.ProdMst.AddOrUpdate(x => x.ProdId,
                new ProdMst() { ProdId = "5", ProdType= "Rings", }, 
                new ProdMst() { ProdId = "6", ProdType= "Earring", }
            );
            context.CertifyMst.AddOrUpdate(x => x.CertifyId,
                new CertifyMst() { CertifyId = "7", CertifyType = "IGI", },
                new CertifyMst() { CertifyId = "8", CertifyType = "AGSL", }
            );
            context.GoldKrt.AddOrUpdate(x => x.GoldTypeId,
                new GoldKrt() { GoldTypeId = "9", GoldCrt = "18 CRT", },
                new GoldKrt() { GoldTypeId = "10", GoldCrt = "10 CRT", }
            );
            context.JewelTypeMst.AddOrUpdate(x => x.JewelleryId,
                new JewelTypeMst() { JewelleryId = "11", JewelleryType = "Diamond", },
                new JewelTypeMst() { JewelleryId = "12", JewelleryType = "Stone", }
            );
            context.StoneQltyMst.AddOrUpdate(x => x.StoneQltyID,
                new StoneQltyMst() { StoneQltyID = "13", StoneQlty = "Ruby", },
                new StoneQltyMst() { StoneQltyID = "14", StoneQlty = "Garnet", }
            );
            context.ItemMst.AddOrUpdate(x => x.Stype_Code,
                new ItemMst() { Stype_Code = "CEH017", BrandId = "1", Quantity = 5, CatId = "7", ProdId = "5", MRP = 110, },
                new ItemMst() { Stype_Code = "DOCQF1B", BrandId = "2", Quantity = 10, CatId = "8", ProdId = "5", GoldTypeId ="9", GoldWt = 4.06, MRP = 35, },
            );
        }   
    }
}
