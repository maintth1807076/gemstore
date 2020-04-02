using System.Collections.Generic;
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
            if (!context.Users.Any(u => u.UserName == "user1"))
            {
                var user = new ApplicationUser
                {
                    UserName = "user1",
                    Email = "maintth1807076@fpt.edu.vn"
                    //SecurityStamp = Guid.NewGuid().ToString("D"),
                    //PasswordHash = userManager.PasswordHasher.HashPassword("secret"),
                };
                userManager.Create(user, "password");
                userManager.AddToRole(user.Id, "User");
            }
            context.BrandMsts.AddOrUpdate(x => x.BrandId,
                new BrandMst() { BrandId = "1", BrandType = "Graff", },
                new BrandMst() { BrandId = "2", BrandType = "Buccellatib", },
                new BrandMst() { BrandId = "3", BrandType = "Chopard", },
                new BrandMst() { BrandId = "4", BrandType = "Buccellatib1", }
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
                new JewelTypeMst() { JewelleryId = "4", JewelleryType = "Bracelet", },
                new JewelTypeMst() { JewelleryId = "5", JewelleryType = "Watches", },
                new JewelTypeMst() { JewelleryId = "6", JewelleryType = "Rings", },
                // trending style
                new JewelTypeMst() { JewelleryId = "7", JewelleryType = "Sping Trends", },
                new JewelTypeMst() { JewelleryId = "8", JewelleryType = "Animal Jewelry", },
                new JewelTypeMst() { JewelleryId = "9", JewelleryType = "Chain Necklace", },
                new JewelTypeMst() { JewelleryId = "10", JewelleryType = "Heart Jewelry", },
                new JewelTypeMst() { JewelleryId = "11", JewelleryType = "Hoop Earrings", },
                new JewelTypeMst() { JewelleryId = "12", JewelleryType = "Floral Jewelry", },
                // feature shop
                new JewelTypeMst() { JewelleryId = "13", JewelleryType = "New Jewelry", },
                new JewelTypeMst() { JewelleryId = "14", JewelleryType = "Fashion Jewelry", },
                new JewelTypeMst() { JewelleryId = "15", JewelleryType = "Resort Jewelry", },
                new JewelTypeMst() { JewelleryId = "16", JewelleryType = "Meta Jewelry", }
            );
            context.StoneQltyMsts.AddOrUpdate(x => x.StoneQltyId,
                new StoneQltyMst() { StoneQltyId = "1", StoneQlty = "Ruby", },
                new StoneQltyMst() { StoneQltyId = "2", StoneQlty = "Garnet", },
                new StoneQltyMst() { StoneQltyId = "3", StoneQlty = "Sapphire", },
                new StoneQltyMst() { StoneQltyId = "4", StoneQlty = "Tanzanite", },
                new StoneQltyMst() { StoneQltyId = "5", StoneQlty = "Morganite ", },
                new StoneQltyMst() { StoneQltyId = "6", StoneQlty = "Opal", }
            );
            context.ItemMsts.AddOrUpdate(x => x.StyleCode,

                //Shop By Type
                new ItemMst() { StyleCode = "1", Name = "Moissanite Pendant Platineve ™ 1.20ctw DEW.", MRP = 299, SalePrice = 254, Thumbnails = "https://images.jtv.com/jewelry/JTV-MSN569W-1-medium.jpg, https://images.jtv.com/jewelry/JTV-MSN569W-1-medium.jpg, https://images.jtv.com/jewelry/JTV-MSN569W-1-medium.jpg", Pairs = 1, Quantity = 3, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "2", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "2", Name = "Golden Cultured South Sea Pearl Rhodium Over Sterling Silver Pendant With Chain 10mm", MRP = 152, SalePrice = 85, Thumbnails = "https://images.jtv.com/jewelry/pearls/JTV-CPL807-1-medium.jpg, https://images.jtv.com/jewelry/pearls/JTV-CPL807-2-medium.jpg, https://images.jtv.com/jewelry/pearls/JTV-CPL807-3-medium.jpg", Pairs = 1, Quantity = 3, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "2", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "3", Name = "Blue And White Cubic Zirconia Rhodium Over Sterling Silver Pendant With Chain 6.15ctw", MRP = 74, SalePrice = 50, Thumbnails = "https://images.jtv.com/jewelry/JTV-BEJ068-1-medium.jpg, https://images.jtv.com/jewelry/JTV-BEJ068-2-medium.jpg, https://images.jtv.com/jewelry/JTV-BEJ068-3-medium.jpg", Pairs = 1, Quantity = 3, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "2", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "4", Name = "Green Connemara Marble Silver Pendant With 18", MRP = 175, SalePrice = 93, Thumbnails = "https://images.jtv.com/jewelry/JTV-IRE204-1-medium.jpg, https://images.jtv.com/jewelry/JTV-IRE204-2-medium.jpg, https://images.jtv.com/jewelry/JTV-IRE204-3-medium.jpg", Pairs = 1, Quantity = 3, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "2", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "5", Name = "14k Tri-Tone Love Knot Pendant With Chain 18 inch", MRP = 261, SalePrice = 224, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BGW763-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BGW763-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BGW763-3-medium.jpg", Pairs = 1, Quantity = 3, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "2", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "6", Name = "8-8.5mm White Cultured Freshwater Pearl 14k White Gold Pendant With Chain", MRP = 220, SalePrice = 115, Thumbnails = "https://images.jtv.com/jewelry/pearls/JTV-PII269-1-medium.jpg", Pairs = 1, Quantity = 3, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "2", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },

                new ItemMst() { StyleCode = "7", Name = "Sterling Silver Cuff Bracelet D.E.W", MRP = 279, SalePrice = 159, Thumbnails = "https://images.jtv.com/jewelry/JTV-TVL032-1-medium.jpg, https://images.jtv.com/jewelry/JTV-TVL032-2-medium.jpg, https://images.jtv.com/jewelry/JTV-TVL032-3-medium.jpg", Pairs = 1, Quantity = 7, BrandId = "3", CatId = "1", ProdId = "1", GoldTypeId = "4", JewelleryId = "4", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "8", Name = "White Cubic Zirconia 18K Yellow Gold Over Sterling Silver Tennis Bracelet 9.30ctw", MRP = 158, SalePrice = 39, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOB082-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOB082-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOB082-3-medium.jpg", Pairs = 1, Quantity = 7, BrandId = "3", CatId = "1", ProdId = "1", GoldTypeId = "5", JewelleryId = "4", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "9", Name = "Moda Al Massimo™ 18k Yellow Gold Polished Rosetta Link 8.25 inch Bracelet", MRP = 120, SalePrice = 89, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-MA155-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA155-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA155-3-medium.jpg", Pairs = 1, Quantity = 7, BrandId = "4", CatId = "1", ProdId = "1", GoldTypeId = "1", JewelleryId = "4", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "10", Name = "Turquoise Blended With Abalone Shell Stretch Bracelet", MRP = 175, SalePrice = 84, Thumbnails = "https://images.jtv.com/jewelry/JTV-SWE2227-1-medium.jpg, https://images.jtv.com/jewelry/JTV-SWE2227-2-medium.jpg", Pairs = 1, Quantity = 7, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "4", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "11", Name = "18k Yellow Gold Over Bronze Diamond Cut Flex Bangle 7.5 inch", MRP = 145, SalePrice = 79, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BEC590B-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC590B-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC590B-3-medium.jpg", Pairs = 1, Quantity = 7, BrandId = "2", CatId = "1", ProdId = "1", GoldTypeId = "3", JewelleryId = "4", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "12", Name = "Blue lapis 18k yellow gold over sterling silver bracelet", MRP = 420, SalePrice = 220, Thumbnails = "https://images.jtv.com/jewelry/JTV-ONH036-1-medium.jpg, https://images.jtv.com/jewelry/JTV-ONH036-2-medium.jpg, https://images.jtv.com/jewelry/JTV-ONH036-3-medium.jpg", Pairs = 1, Quantity = 7, BrandId = "3", CatId = "1", ProdId = "1", GoldTypeId = "4", JewelleryId = "4", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },

                new ItemMst() { StyleCode = "13", Name = "15.66ctw Amethyst And Sky Blue Topaz Mother of Pearl Dial Sterling Silver Watch", MRP = 249, SalePrice = 212, Thumbnails = "https://images.jtv.com/jewelry/JTV-FTW011-1-medium.jpg, https://images.jtv.com/jewelry/JTV-FTW011-2-medium.jpg, https://portalvhdskzpngkvpz6x48.blob.core.windows.net/yruler-merger/Bags/Textures/2932403/Lifestyle/ContextMode_71/light_desktop.png", Pairs = 1, Quantity = 9, BrandId = "4", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "5", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "14", Name = "White Cubic Zirconia 18K Yellow Gold Over Brass Ladies Wrist Watch 1.45ctw", MRP = 91, SalePrice = 76, Thumbnails = "https://images.jtv.com/jewelry/watches/JTV-BLW009B-1-medium.jpg, https://images.jtv.com/jewelry/watches/JTV-BLW009B-2-medium.jpg, https://images.jtv.com/jewelry/watches/JTV-BLW009B-3-medium.jpg", Pairs = 1, Quantity = 9, BrandId = "3", CatId = "1", ProdId = "1", GoldTypeId = "3", JewelleryId = "5", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "15", Name = "Adee Kaye™ White Crystal Gold Tone Rhodium Over Base Metal Mother of Pearl Dial Watch", MRP = 495, SalePrice = 138, Thumbnails = "https://images.jtv.com/jewelry/watches/JTV-ADK013B-1-medium.jpg, https://images.jtv.com/jewelry/watches/JTV-ADK013B-2-medium.jpg, https://images.jtv.com/jewelry/watches/JTV-ADK013B-3-medium.jpg", Pairs = 1, Quantity = 9, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "4", JewelleryId = "5", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "16", Name = "Adee Kaye™ Gold Tone Stainless Steel and Black Leather Band Gent's Watch", MRP = 245, SalePrice = 69, Thumbnails = "https://images.jtv.com/jewelry/watches/JTV-ADK012E-1-medium.jpg, https://images.jtv.com/jewelry/watches/JTV-ADK012E-2-medium.jpg, https://images.jtv.com/jewelry/watches/JTV-ADK012E-3-medium.jpg", Pairs = 1, Quantity = 9, BrandId = "2", CatId = "1", ProdId = "1", GoldTypeId = "5", JewelleryId = "5", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "17", Name = "Burgi™ Crystals From Swarovski™ and Leather Band Watch", MRP = 465, SalePrice = 76, Thumbnails = "https://images.jtv.com/jewelry/watches/JTV-BUR003C-1-medium.jpg, https://images.jtv.com/jewelry/watches/JTV-BUR003C-2-medium.jpg", Pairs = 1, Quantity = 9, BrandId = "4", CatId = "1", ProdId = "1", GoldTypeId = "1", JewelleryId = "5", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "18", Name = "15.66ctw Amethyst And Sky Blue Topaz Mother of Pearl Dial Sterling Silver Watch", MRP = 249, SalePrice = 212, Thumbnails = "https://images.jtv.com/jewelry/JTV-FTW011-1-medium.jpg, https://images.jtv.com/jewelry/JTV-FTW011-2-medium.jpg", Pairs = 1, Quantity = 9, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "5", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },

                //new ItemMst() { StyleCode = "18", Name = "Moissanite Platineve Ring .64ctw D.E.W", MRP = 219, SalePrice = 149, Thumbnails = "https://images.jtv.com/jewelry/JTV-MOS730-1-medium.jpg, https://images.jtv.com/jewelry/JTV-MOS730-2-medium.jpg, https://images.jtv.com/jewelry/JTV-MOS730-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "2", CatId = "1", ProdId = "1", GoldTypeId = "3", JewelleryId = "6", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "19", Name = "Cubic Zirconia 18k Rose Gold Over Silver Ring 5.53ctw", MRP = 89, SalePrice = 50, Thumbnails = "https://images.jtv.com/jewelry/JTV-BLD260R-1-medium.jpg, https://images.jtv.com/jewelry/JTV-BLD260R-2-medium.jpg, https://images.jtv.com/jewelry/JTV-BLD260R-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "3", CatId = "1", ProdId = "1", GoldTypeId = "4", JewelleryId = "6", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "20", Name = "White Cubic Zirconia Platinenve Ring 3.70ctw", MRP = 131, SalePrice = 76, Thumbnails = "https://images.jtv.com/jewelry/JTV-VKB832-1-medium.jpg, https://images.jtv.com/jewelry/JTV-VKB832-2-medium.jpg, https://images.jtv.com/jewelry/JTV-VKB832-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "4", CatId = "1", ProdId = "1", GoldTypeId = "5", JewelleryId = "6", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "21", Name = "London Blue Topaz rhodium over sterling silver solitaire ring 5.50ctw", MRP = 210, SalePrice = 88, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOCW364-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCW364-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCW364-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "1", JewelleryId = "6", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "22", Name = "Sky Blue Topaz Rhodium Over Sterling Silver Ring 3.80ctw", MRP = 224, SalePrice = 79, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOK210-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOK210-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOK210-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "2", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "6", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "23", Name = "White Cubic Zirconia Platineve Ring 4.28CTW", MRP = 93, SalePrice = 68, Thumbnails = "https://images.jtv.com/jewelry/JTV-VKB823-1-medium.jpg, https://images.jtv.com/jewelry/JTV-VKB823-2-medium.jpg, https://images.jtv.com/jewelry/JTV-VKB823-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "3", CatId = "1", ProdId = "1", GoldTypeId = "3", JewelleryId = "6", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },


                ////Trending Shop
                new ItemMst() { StyleCode = "24", Name = "10k Yellow Gold Faith Script 18 inch Necklace", MRP = 99, SalePrice = 89, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-AU501C-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-AU501C-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-AU501C-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "7", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "25", Name = "10K Yellow Gold Wide Diamond Cut Textured Ring", MRP = 198, SalePrice = 134, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-AU430-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-AU430-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-AU430-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "3", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "7", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "26", Name = "White Cultured Japanese Akoya Pearl Rhodium Over Sterling Silver Diamond Cut Bracelet", MRP = 268, SalePrice = 144, Thumbnails = "https://images.jtv.com/jewelry/pearls/JTV-CPL713-1-medium.jpg, ", Pairs = 1, Quantity = 4, BrandId = "4", CatId = "1", ProdId = "2", GoldTypeId = "5", JewelleryId = "7", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "27", Name = "18K Yellow Gold Over Sterling Silver Byzantine and Cuban Link Adjustable Set of 2 Bracelet 4", MRP = 70, SalePrice = 59, Thumbnails = "https://images.jtv.com/jewelry/silver/JTV-AG121B-1-medium.jpg, https://images.jtv.com/jewelry/silver/JTV-AG121B-2-medium.jpg, https://images.jtv.com/jewelry/silver/JTV-AG121B-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "4", CatId = "1", ProdId = "2", GoldTypeId = "1", JewelleryId = "7", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "28", Name = "Moda Al Massimo® 18K Yellow Gold Over Bronze Diamond Cut Bangle Bracelet 8 Inch", MRP = 146, SalePrice = 107, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-MA109-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA109-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA109-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "1", CatId = "1", ProdId = "2", GoldTypeId = "2", JewelleryId = "7", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "29", Name = "Blue Diamond Rhodium Over Sterling Silver Ring 0.23ctw", MRP = 99, SalePrice = 49, Thumbnails = "https://images.jtv.com/jewelry/JTV-BDK012-1-medium.jpg, https://images.jtv.com/jewelry/JTV-BDK012-2-medium.jpg, https://images.jtv.com/jewelry/JTV-BDK012-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "7", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 }

                //new ItemMst() { StyleCode = "30", Name = "Red Sponge Coral Rhodium Over Silver Eagle Pendant With Chain", MRP = 222, SalePrice = 139, Thumbnails = "https://images.jtv.com/jewelry/JTV-SWE2167-1-medium.jpg, https://images.jtv.com/jewelry/JTV-SWE2167-2-medium.jpg, https://images.jtv.com/jewelry/JTV-SWE2167-3-medium.jpg", Pairs = 1, Quantity = 6, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "8", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "31", Name = "White And Green Crystal Black Enamel Gold Tone Jaguar Ring", MRP = 30, SalePrice = 27, Thumbnails = "https://images.jtv.com/jewelry/JTV-OPC258R-1-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC258R-2-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC258R-3-medium.jpg", Pairs = 1, Quantity = 6, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "5", JewelleryId = "8", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "32", Name = "Red Sponge Coral Rhodium Over Sterling Silver Butterfly Earrings", MRP = 365, SalePrice = 164, Thumbnails = "https://images.jtv.com/jewelry/JTV-SWE2119-1-medium.jpg, https://images.jtv.com/jewelry/JTV-SWE2119-2-medium.jpg, https://images.jtv.com/jewelry/JTV-SWE2119-3-medium.jpg", Pairs = 1, Quantity = 6, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "1", JewelleryId = "8", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "33", Name = "Multicolor Crystal Gold Tone Giraffe Ring", MRP = 29, SalePrice = 26, Thumbnails = "https://images.jtv.com/jewelry/JTV-OPC205R-1-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC205R-2-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC205R-3-medium.jpg", Pairs = 1, Quantity = 6, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "2", JewelleryId = "8", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "34", Name = "Black spinel 18k gold over sterling silver pendant with chain 1.17ctw", MRP = 59, SalePrice = 50, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOCW580Y-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCW580Y-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCW580Y-3-medium.jpg", Pairs = 1, Quantity = 6, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "8", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "35", Name = "White Diamond 14K Yellow Gold Over Sterling Silver Ring 0.20ctw", MRP = 112, SalePrice = 89, Thumbnails = "https://images.jtv.com/jewelry/JTV-ENG151-1-medium.jpg, https://images.jtv.com/jewelry/JTV-ENG151-2-medium.jpg, https://images.jtv.com/jewelry/JTV-ENG151-3-medium.jpg", Pairs = 1, Quantity = 6, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "8", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },

                //new ItemMst() { StyleCode = "36", Name = "18k Yellow Gold Over Bronze Soft Rope Link Chain Necklace 24 inches", MRP = 105, SalePrice = 69, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BEC181-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC181-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC181-3-medium.jpg", Pairs = 1, Quantity = 8, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "1", JewelleryId = "9", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "37", Name = "10k Yellow Gold 3.2mm Figaro 20 inch Chain Necklace", MRP = 247, SalePrice = 159, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-AU316-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-AU316-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-AU316-3-medium.jpg", Pairs = 1, Quantity = 8, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "1", JewelleryId = "9", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "38", Name = "14k Yellow Gold 4.1mm Semi-Solid Anchor Chain", MRP = 467, SalePrice = 743, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-VG019A-1-medium.jpg", Pairs = 1, Quantity = 8, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "1", JewelleryId = "9", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "39", Name = "Copper Flat Chain", MRP = 69, SalePrice = 59, Thumbnails = "https://images.jtv.com/jewelry/JTV-COP818-1-medium.jpg, https://images.jtv.com/jewelry/JTV-COP818-2-medium.jpg, https://images.jtv.com/jewelry/JTV-COP818-3-medium.jpg", Pairs = 1, Quantity = 8, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "1", JewelleryId = "9", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "40", Name = "White Crystal Gold Tone Double Rolo Chain Necklace", MRP = 39, SalePrice = 35, Thumbnails = "https://images.jtv.com/jewelry/JTV-OPC712-1-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC712-2-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC712-3-medium.jpg", Pairs = 1, Quantity = 8, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "1", JewelleryId = "9", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "41", Name = "18k Yellow Gold Over Bronze Singapore Link Chain Necklace Set Of 2 20/24 inch", MRP = 104, SalePrice = 59, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BEC814-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC814-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC814-3-medium.jpg", Pairs = 1, Quantity = 8, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "1", JewelleryId = "9", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },

                //new ItemMst() { StyleCode = "42", Name = "White Cubic Zirconia Rhodium Over Sterling Silver Stud Earrings", MRP = 79, SalePrice = 54, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOCGW1-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCGW1-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCGW1-2-medium.jpg", Pairs = 1, Quantity = 11, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "2", JewelleryId = "10", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "43", Name = "White Diamond 10k Yellow Gold Ring 1.33ctw", MRP = 1020, SalePrice = 606, Thumbnails = "https://images.jtv.com/jewelry/JTV-CDG366-1-medium.jpg, https://images.jtv.com/jewelry/JTV-CDG366-2-medium.jpg, https://images.jtv.com/jewelry/JTV-CDG366-3-medium.jpg", Pairs = 1, Quantity = 11, BrandId = "3", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "10", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "44", Name = "White Diamond Accent Rhodium Over Sterling Silver Heart Necklace", MRP = 39, SalePrice = 19, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOD133-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOD133-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOD133-3-medium.jpg", Pairs = 1, Quantity = 11, BrandId = "4", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "10", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "45", Name = "Red, White, And Blue Cubic Zirconia Rhodium Over Sterling Silver Heart Flag Earrings 3.13ctw", MRP = 134, SalePrice = 42, Thumbnails = "https://images.jtv.com/jewelry/JTV-BCB608-1-medium.jpg, https://images.jtv.com/jewelry/JTV-BCB608-2-medium.jpg, https://images.jtv.com/jewelry/JTV-BCB608-3-medium.jpg", Pairs = 1, Quantity = 11, BrandId = "1", CatId = "1", ProdId = "2", GoldTypeId = "5", JewelleryId = "10", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "46", Name = "White Diamond Rhodium And 14K Rose Gold Over Sterling Silver Heart Pendant With Chain 0.25ctw", MRP = 87, SalePrice = 44, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOD187-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOD187-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOD187-3-medium.jpg", Pairs = 1, Quantity = 11, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "1", JewelleryId = "10", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "47", Name = "White Cubic Zirconia Rhodium Over Sterling Silver Heart Rings 3.65ctw", MRP = 88, SalePrice = 30, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOCMB22-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCMB22-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCMB22-3-medium.jpg", Pairs = 1, Quantity = 11, BrandId = "3", CatId = "1", ProdId = "2", GoldTypeId = "2", JewelleryId = "10", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 }

                //new ItemMst() { StyleCode = "48", Name = "18k Yellow Gold Over Bronze Hoop Earrings", MRP = 79, SalePrice = 59, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BEC749-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC749-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC749-2-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "11", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "49", Name = "Blue and White Cubic Zirconia 18k Yellow Gold Over Sterling Silver Earrings 3.05ctw", MRP = 67, SalePrice = 39, Thumbnails = "https://images.jtv.com/jewelry/JTV-BLN939-1-medium.jpg, https://images.jtv.com/jewelry/JTV-BLN939-2-medium.jpg, https://images.jtv.com/jewelry/JTV-BLN939-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "11", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "50", Name = "White Cubic Zirconia Rhodium Over Sterling Silver Earrings Set of 3 9.78ctw", MRP = 103, SalePrice = 43, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOCGY8-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCGY8-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCGY8-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "11", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "51", Name = "Blue kyanite rhodium over silver inside/outside hoop earrings 4.75ctw", MRP = 315, SalePrice = 152, Thumbnails = "https://images.jtv.com/jewelry/JTV-NNH338-1-medium.jpg, https://images.jtv.com/jewelry/JTV-NNH338-2-medium.jpg, https://images.jtv.com/jewelry/JTV-NNH338-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "11", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "52", Name = "White Cubic Zirconia 18k Yellow Gold Over Sterling Silver Earrings 12.80ctw", MRP = 121, SalePrice = 85, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOCK256Y-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCK256Y-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCK256Y-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "11", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "53", Name = "Multi-color gemstone rhodium over silver earrings 10.98ctw", MRP = 113, SalePrice = 69, Thumbnails = "https://images.jtv.com/jewelry/JTV-HNC003-1-medium.jpg, https://images.jtv.com/jewelry/JTV-HNC003-2-medium.jpg, https://images.jtv.com/jewelry/JTV-HNC003-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "11", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },

                //new ItemMst() { StyleCode = "54", Name = "Pink Cultured Mabe Pearl Silver Floral Dangle Earrings", MRP = 259, SalePrice = 137, Thumbnails = "https://images.jtv.com/jewelry/JTV-SRA2953-1-medium.jpg, https://images.jtv.com/jewelry/JTV-SRA2953-2-medium.jpg, https://images.jtv.com/jewelry/JTV-SRA2953-3-medium.jpg", Pairs = 1, Quantity = 12, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "12", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "55", Name = "Black Mother Of Pearl Sterling Silver Earrings", MRP = 285, SalePrice = 139, Thumbnails = "https://images.jtv.com/jewelry/JTV-SRA2099-1-medium.jpg, https://images.jtv.com/jewelry/JTV-SRA2099-2-medium.jpg, https://images.jtv.com/jewelry/JTV-SRA2099-3-medium.jpg", Pairs = 1, Quantity = 12, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "12", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "56", Name = "Green onyx sterling silver pendant with chain", MRP = 119, SalePrice = 67, Thumbnails = "https://images.jtv.com/jewelry/JTV-JUH130-1-medium.jpg, https://images.jtv.com/jewelry/JTV-JUH130-2-medium.jpg, https://images.jtv.com/jewelry/JTV-JUH130-3-medium.jpg", Pairs = 1, Quantity = 12, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "12", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "57", Name = "Red Garnet & Green Chrome Diopside Rhodium Over Sterling Silver Ring 6.28ctw", MRP = 196, SalePrice = 110, Thumbnails = "https://images.jtv.com/jewelry/JTV-JQH105-1-medium.jpg, https://images.jtv.com/jewelry/JTV-JQH105-2-medium.jpg, https://images.jtv.com/jewelry/JTV-JQH105-3-medium.jpg", Pairs = 1, Quantity = 12, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "12", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "58", Name = "10k Yellow Gold Shamrock Charm", MRP = 41, SalePrice = 31, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BGV579-1-medium.jpg", Pairs = 1, Quantity = 12, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "12", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "59", Name = "Red Lab Created Ruby Rhodium Over Sterling Silver Ring 7.22ctw", MRP = 84, SalePrice = 50, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOH123-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOH123-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOH123-3-medium.jpg", Pairs = 1, Quantity = 12, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "12", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 }


                //Feature Shop
                //new ItemMst() { StyleCode = "61", Name = "14k White Gold 6.25mm Beveled Curb Chain", MRP = 140, SalePrice = 89, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-VG333A-1-medium.jpg ", Pairs = 1, Quantity = 4, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "4", JewelleryId = "13", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "62", Name = "Sterling Silver Turtle Dangle Earrings", MRP = 135, SalePrice = 69, Thumbnails = "https://images.jtv.com/jewelry/JTV-SRA3510-1-medium.jpg, https://images.jtv.com/jewelry/JTV-SRA3510-2-medium.jpg, https://images.jtv.com/jewelry/JTV-SRA3510-3-medium.jpg ", Pairs = 1, Quantity = 4, BrandId = "1", CatId = "1", ProdId = "3", GoldTypeId = "5", JewelleryId = "13", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "63", Name = "Fabulite Strontium Titanate and white zircon rhodium over sterling silver ring 5.06ctw.", MRP = 453, SalePrice = 279, Thumbnails = "https://images.jtv.com/jewelry/JTV-STS164-1-medium.jpg, https://images.jtv.com/jewelry/JTV-STS164-2-medium.jpg, https://images.jtv.com/jewelry/JTV-STS164-3-medium.jpg  ", Pairs = 1, Quantity = 8, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "1", JewelleryId = "13", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "64", Name = "Black And White Diamond Rhodium Over Sterling Silver Earrings and Pendant Jewelry Set 0.48ctw", MRP = 237, SalePrice = 86, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOD192-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOD192-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOD192-3-medium.jpg ", Pairs = 1, Quantity = 7, BrandId = "3", CatId = "1", ProdId = "3", GoldTypeId = "2", JewelleryId = "13", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "65", Name = "Rainbow Moonstone Sterling Silver Dangle Earrings", MRP = 214, SalePrice = 89, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOK359-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOK359-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOK359-3-medium.jpg ", Pairs = 1, Quantity = 2, BrandId = "4", CatId = "1", ProdId = "3", GoldTypeId = "3", JewelleryId = "13", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "66", Name = "White Diamond Rhodium Over Sterling Silver Dancing Diamond Pendant With Box Chain 0.20ctw", MRP = 133, SalePrice = 69, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOD128-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOD128-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOD128-3-medium.jpg ", Pairs = 1, Quantity = 5, BrandId = "1", CatId = "1", ProdId = "3", GoldTypeId = "4", JewelleryId = "13", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "67", Name = "18k Yellow Gold Over Bronze Hoop Earrings", MRP = 70, SalePrice = 47, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BEC749-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC749-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC749-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "1", JewelleryId = "14", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "68", Name = "18k Yellow Gold Over Bronze Dangle Earrings", MRP = 125, SalePrice = 99, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BEC608-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC608-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC608-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "1", JewelleryId = "14", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "69", Name = "Multi Color Crystal Gold Tone Candy Corn Dangle Earrings", MRP = 29, SalePrice = 26, Thumbnails = "https://images.jtv.com/jewelry/JTV-OPC430-1-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC430-2-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC430-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "3", CatId = "1", ProdId = "3", GoldTypeId = "2", JewelleryId = "14", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "70", Name = "Crystal Gold Tone Football Earrings", MRP = 36, SalePrice = 29, Thumbnails = "https://images.jtv.com/jewelry/JTV-OPC728-1-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC728-2-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC728-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "4", CatId = "1", ProdId = "3", GoldTypeId = "3", JewelleryId = "14", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "71", Name = "Moda Al Massimo™ 18k Yellow Gold Polished Rosetta Link 8.25 inch Bracelet", MRP = 120, SalePrice = 89, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-MA155-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA155-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA155-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "1", CatId = "1", ProdId = "3", GoldTypeId = "4", JewelleryId = "14", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "72", Name = "Crystal Gold Tone 3- Band Ring", MRP = 39, SalePrice = 35, Thumbnails = "https://images.jtv.com/jewelry/JTV-OPC843-1-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC843-2-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC843-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "5", JewelleryId = "14", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "73", Name = "Green Kingman Turquoise 18k Yellow Gold Over Sterling Silver Ring", MRP = 128, SalePrice = 85, Thumbnails = "https://images.jtv.com/jewelry/JTV-TRQ506-1-medium.jpg, https://images.jtv.com/jewelry/JTV-TRQ506-1-medium.jpg, https://images.jtv.com/jewelry/JTV-TRQ506-3-medium.jpg", Pairs = 1, Quantity = 7, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "2", JewelleryId = "15", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "74", Name = "18k Yellow Gold Over Bronze Leaf Ring", MRP = 67, SalePrice = 44, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BEC716-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC716-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC716-3-medium.jpg", Pairs = 1, Quantity = 7, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "2", JewelleryId = "15", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "75", Name = "Multicolor Crystal Gold Tone Angelfish Necklace", MRP = 73, SalePrice = 62, Thumbnails = "https://images.jtv.com/jewelry/JTV-OPC614-1-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC614-2-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC614-3-medium.jpg", Pairs = 1, Quantity = 1, BrandId = "3", CatId = "1", ProdId = "3", GoldTypeId = "3", JewelleryId = "15", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "76", Name = "Multicolor Crystal Gold Tone Floral Statement Necklace", MRP = 59, SalePrice = 53, Thumbnails = "https://images.jtv.com/jewelry/JTV-OPC202N-1-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC202N-2-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC202N-3-medium.jpg", Pairs = 1, Quantity = 5, BrandId = "4", CatId = "1", ProdId = "3", GoldTypeId = "4", JewelleryId = "15", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "77", Name = "Blue Larimar Silver Pendant With Chain .51ctw", MRP = 185, SalePrice = 118, Thumbnails = "https://images.jtv.com/jewelry/JTV-MMH372-1-medium.jpg, https://images.jtv.com/jewelry/JTV-MMH372-2-medium.jpg, https://images.jtv.com/jewelry/JTV-MMH372-3-medium.jpg", Pairs = 1, Quantity = 3, BrandId = "1", CatId = "1", ProdId = "3", GoldTypeId = "5", JewelleryId = "15", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "78", Name = "Multicolor Crystal Rose Tone Seahorse Ring", MRP = 39, SalePrice = 22, Thumbnails = "https://images.jtv.com/jewelry/JTV-OPC553-1-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC553-2-medium.jpg, https://images.jtv.com/jewelry/JTV-OPC553-3-medium.jpg", Pairs = 1, Quantity = 8, BrandId = "4", CatId = "1", ProdId = "3", GoldTypeId = "1", JewelleryId = "15", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "79", Name = "18k yellow gold over bronze earrings.", MRP = 48, SalePrice = 37, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-MA175-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA175-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA175-1-medium.jpg", Pairs = 1, Quantity = 5, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "3", JewelleryId = "16", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "80", Name = "14k Tri-Color Gold Textured Love Knot Earrings", MRP = 139, SalePrice = 125, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BGV463-1-medium.jpg", Pairs = 1, Quantity = 5, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "3", JewelleryId = "16", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "81", Name = "18k yellow gold over bronze earrings.", MRP = 47, SalePrice = 39, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-MA175-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA175-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA175-3-medium.jpg", Pairs = 1, Quantity = 5, BrandId = "3", CatId = "1", ProdId = "3", GoldTypeId = "4", JewelleryId = "16", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "82", Name = "18k Yellow Gold Over Bronze Dangle Earrings", MRP = 124, SalePrice = 69, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BEC608-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC608-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC608-3-medium.jpg", Pairs = 1, Quantity = 5, BrandId = "4", CatId = "1", ProdId = "3", GoldTypeId = "5", JewelleryId = "16", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "83", Name = "14k Tri-Tone Love Knot Pendant With Chain 18 inch", MRP = 261, SalePrice = 224, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BGW763-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BGW763-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BGW763-3-medium.jpg", Pairs = 1, Quantity = 5, BrandId = "1", CatId = "1", ProdId = "3", GoldTypeId = "1", JewelleryId = "16", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                //new ItemMst() { StyleCode = "84", Name = "Leopard Print Fabric Gold Tone Earrings", MRP = 43, SalePrice = 35, Thumbnails = "https://images.jtv.com/jewelry/JTV-OPW070-1-medium.jpg, https://images.jtv.com/jewelry/JTV-OPW070-2-medium.jpg", Pairs = 1, Quantity = 5, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "2", JewelleryId = "16", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 }

                );
            //context.StoneMsts.AddOrUpdate(x => x.StyleCode,
            //    new StoneMst() { StyleCode = "ANH458", StoneQltyId = "1", StonePcs = 1, StoneCrt = 6, StoneRate = 35 },
            //    new StoneMst() { StyleCode = "TS329", StoneQltyId = "2", StonePcs = 1, StoneCrt = 5, StoneRate = 100 },
            //    new StoneMst() { StyleCode = "TNC020", StoneQltyId = "3", StonePcs = 1, StoneCrt = 7, StoneRate = 216 },
            //    new StoneMst() { StyleCode = "NTT219", StoneQltyId = "4", StonePcs = 1, StoneCrt = 3, StoneRate = 560 },
            //    new StoneMst() { StyleCode = "MGC358", StoneQltyId = "5", StonePcs = 1, StoneCrt = 9, StoneRate = 2507 },
            //    new StoneMst() { StyleCode = "FO085", StoneQltyId = "6", StonePcs = 1, StoneCrt = 5, StoneRate = 102 }
            //);
            var listOrders = new List<Order>()
            {
                new Order(){TotalPrice = 150, CreatedAt = DateTime.Now},
                new Order(){TotalPrice = 480, CreatedAt = DateTime.Now.AddDays(-5)},
                new Order(){TotalPrice = 400, CreatedAt = DateTime.Now.AddDays(-3)},
                new Order(){TotalPrice = 120, CreatedAt = DateTime.Now.AddDays(-1)},
                new Order(){TotalPrice = 130, CreatedAt = DateTime.Now.AddDays(-2)},
                new Order(){TotalPrice = 450, CreatedAt = DateTime.Now.AddDays(-3)},
                new Order(){TotalPrice = 360, CreatedAt = DateTime.Now.AddDays(-4)},
                new Order(){TotalPrice = 780, CreatedAt = DateTime.Now.AddDays(-5)},
                new Order(){TotalPrice = 234, CreatedAt = DateTime.Now.AddDays(-6)},
                new Order(){TotalPrice = 213, CreatedAt = DateTime.Now.AddDays(-7)},
                new Order(){TotalPrice = 654, CreatedAt = DateTime.Now.AddDays(-8)},
                new Order(){TotalPrice = 809, CreatedAt = DateTime.Now.AddDays(-9)},
                new Order(){TotalPrice = 345, CreatedAt = DateTime.Now.AddDays(-10)},
                new Order(){TotalPrice = 789, CreatedAt = DateTime.Now.AddDays(-10).AddMonths(-1)},
                new Order(){TotalPrice = 300, CreatedAt = DateTime.Now.AddDays(-9).AddMonths(-2)},
                new Order(){TotalPrice = 400, CreatedAt = DateTime.Now.AddDays(-8).AddMonths(-3)},
                new Order(){TotalPrice = 356, CreatedAt = DateTime.Now.AddDays(-7).AddMonths(-4)},
                new Order(){TotalPrice = 250, CreatedAt = DateTime.Now.AddDays(-6).AddMonths(-5)},
                new Order(){TotalPrice = 632, CreatedAt = DateTime.Now.AddDays(-5).AddMonths(-6)},
                new Order(){TotalPrice = 342, CreatedAt = DateTime.Now.AddDays(-4).AddMonths(-7)},
                new Order(){TotalPrice = 180, CreatedAt = DateTime.Now.AddDays(-3).AddMonths(-8)},
                new Order(){TotalPrice = 573, CreatedAt = DateTime.Now.AddDays(-2).AddMonths(-9)},
                new Order(){TotalPrice = 289, CreatedAt = DateTime.Now.AddDays(-1).AddMonths(-10)},
                new Order(){TotalPrice = 163, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-10).AddMonths(-1)},
                new Order(){TotalPrice = 367, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-11).AddMonths(-2)},
                new Order(){TotalPrice = 934, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-12).AddMonths(-3)},
                new Order(){TotalPrice = 278, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-13).AddMonths(-4)},
                new Order(){TotalPrice = 421, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-14).AddMonths(-5)},
                new Order(){TotalPrice = 690, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-15).AddMonths(-6)},
                new Order(){TotalPrice = 631, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-16).AddMonths(-7)},
                new Order(){TotalPrice = 643, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-17).AddMonths(-8)},
                new Order(){TotalPrice = 712, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-18).AddMonths(-9)},
                new Order(){TotalPrice = 521, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-19).AddMonths(-10)},
                new Order(){TotalPrice = 644, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-30).AddMonths(-1)},
                new Order(){TotalPrice = 222, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-29).AddMonths(-3)},
                new Order(){TotalPrice = 777, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-28).AddMonths(-5)},
                new Order(){TotalPrice = 900, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-27).AddMonths(-7)},
                new Order(){TotalPrice = 451, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-26).AddMonths(-9)},
                new Order(){TotalPrice = 361, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-25).AddMonths(-2)},
                new Order(){TotalPrice = 401, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-24).AddMonths(-4)},
                new Order(){TotalPrice = 562, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-23).AddMonths(-6)},
                new Order(){TotalPrice = 309, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-22).AddMonths(-8)},
                new Order(){TotalPrice = 432, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-21).AddMonths(-10)},
                new Order(){TotalPrice = 866, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-1).AddMonths(-1)},
                new Order(){TotalPrice = 667, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-9).AddMonths(-4)},
                new Order(){TotalPrice = 433, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-2).AddMonths(-2)},
                new Order(){TotalPrice = 221, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-8).AddMonths(-2)},
                new Order(){TotalPrice = 779, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-3).AddMonths(-3)},
                new Order(){TotalPrice = 422, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-7).AddMonths(-4)},
                new Order(){TotalPrice = 445, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-4).AddMonths(-5)},
                new Order(){TotalPrice = 480, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-6).AddMonths(-1)},
                new Order(){TotalPrice = 331, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-5).AddMonths(-3)},
                new Order(){TotalPrice = 505, CreatedAt = DateTime.Now.AddYears(-1).AddDays(-10).AddMonths(-2)},
                new Order(){TotalPrice = 607, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-44)},
                new Order(){TotalPrice = 540, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-22)},
                new Order(){TotalPrice = 650, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-33)},
                new Order(){TotalPrice = 190, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-11)},
                new Order(){TotalPrice = 672, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-55)},
                new Order(){TotalPrice = 308, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-66)},
                new Order(){TotalPrice = 468, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-77)},
                new Order(){TotalPrice = 537, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-88)},
                new Order(){TotalPrice = 246, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-99)},
                new Order(){TotalPrice = 579, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-31)},
                new Order(){TotalPrice = 540, CreatedAt = DateTime.Now.AddYears(-2).AddDays(-37)},
                new Order()
                {
                    OrderId = "1", MemberId = "1", CreatedAt = DateTime.Now,
                    OrderDetails = new List<OrderDetail>()
                    {
                        new OrderDetail(){StyleCode = "1", UnitPrice = 75, Quantity = 2},
                        new OrderDetail(){StyleCode = "2", UnitPrice = 80, Quantity = 1},
                    }
                }
        };
            var totalPrice = 0.0;
            foreach (var order in listOrders)
            {
                
                order.OrderId = Guid.NewGuid().ToString().GetHashCode().ToString("x");
                order.Status = (int)Order.OrderStatus.Pending;
                foreach (var orderDetail in order.OrderDetails)
                {
                    totalPrice += orderDetail.Quantity * orderDetail.UnitPrice;
                }
                order.TotalPrice = totalPrice;
                context.Orders.Add(order);
                context.SaveChanges();
            }
        }   
    }
}
