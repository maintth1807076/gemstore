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
            context.BrandMsts.AddOrUpdate( x => x.BrandId,
                new BrandMst() { BrandId = "1" , BrandType= "a" , },
                new BrandMst() { BrandId = "2" , BrandType= "b" , }
            );
            context.CatMsts.AddOrUpdate(x => x.CatId,
                new CatMst() { CatId = "3", CatName = "c", },
                new CatMst() { CatId = "4", CatName = "d", }
            );
            context.ProdMsts.AddOrUpdate(x => x.ProdId,
                new ProdMst() { ProdId = "5", ProdType= "e", },
                new ProdMst() { ProdId = "6", ProdType= "f", }
            );
            context.CertifyMsts.AddOrUpdate(x => x.CertifyId,
                new CertifyMst() { CertifyId = "7", CertifyType = "g", },
                new CertifyMst() { CertifyId = "8", CertifyType = "h", }
            );
            context.GoldKrts.AddOrUpdate(x => x.GoldTypeId,
                new GoldKrt() { GoldTypeId = "9", GoldCrt = "i", },
                new GoldKrt() { GoldTypeId = "10", GoldCrt = "k", }
            );
            context.JewelTypeMsts.AddOrUpdate(x => x.JewelleryId,
                new JewelTypeMst() { JewelleryId = "11", JewelleryType =  "e", },
                new JewelTypeMst() { JewelleryId = "12", JewelleryType =  "a", }
            );
            context.StoneQltyMsts.AddOrUpdate(x => x.StoneQltyID,
                new StoneQltyMst() { StoneQltyID = "13", StoneQlty = "x", },
                new StoneQltyMst() { StoneQltyID = "14", StoneQlty = "z", }
            );
        }   
    }
}
