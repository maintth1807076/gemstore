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
                new ItemMst() {StyleCode = "ANH458", Name = "Green Onyx Rhodium Over Sterling Silver Dangle Earrings 6.50ctw", MRP = 59.99, SalePrice = 50.99, Thumbnails = "https://images.jtv.com/jewelry/JTV-ANH458-1-thumb.jpg, https://images.jtv.com/jewelry/JTV-ANH458-2-thumb.jpg, https://images.jtv.com/jewelry/JTV-ANH458-3-thumb.jpg", Pairs = 1, Quantity = 20, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "1", JewelleryId = "1", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "NCH024", Name = "Green Chrome Diopside Rhodium Over Silver Set of 2 Rings 2.11ctw", MRP = 81.99, SalePrice = 69.69, Thumbnails = "https://images.jtv.com/jewelry/JTV-NCH024-1-thumb.jpg, https://images.jtv.com/jewelry/JTV-NCH024-2-thumb.jpg, https://images.jtv.com/jewelry/JTV-NCH024-3-thumb.jpg", Pairs = 1, Quantity = 20, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "1", JewelleryId = "1", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "MSN569W", Name = "Moissanite Pendant Platineve ™ 1.20ctw DEW.", MRP = 299.99, SalePrice = 254.99, Thumbnails = "https://images.jtv.com/jewelry/JTV-MSN569W-1-medium.jpg, https://images.jtv.com/jewelry/JTV-MSN569W-1-medium.jpg, https://images.jtv.com/jewelry/JTV-MSN569W-1-medium.jpg", Pairs = 1, Quantity = 3, BrandId = "1", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "2", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "DOCV127", Name = "Green Russian Chrome Diopside Rhodium Over Silver Earrings 5.5ctw", MRP = 249.99, SalePrice = 46.99, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOCV127-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCV127-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCV127-3-medium.jpg", Pairs = 1, Quantity = 5, BrandId = "2", CatId = "1", ProdId = "1", GoldTypeId = "3", JewelleryId = "3", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "TVL032", Name = "Sterling Silver Cuff Bracelet", MRP = 279.99, SalePrice = 159.99, Thumbnails = "https://images.jtv.com/jewelry/JTV-TVL032-1-medium.jpg, https://images.jtv.com/jewelry/JTV-TVL032-2-medium.jpg, https://images.jtv.com/jewelry/JTV-TVL032-3-medium.jpg", Pairs = 1, Quantity = 7, BrandId = "3", CatId = "1", ProdId = "1", GoldTypeId = "4", JewelleryId = "4", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "FTW011", Name = "15.66ctw Amethyst And Sky Blue Topaz Mother of Pearl Dial Sterling Silver Watch", MRP = 249.99, SalePrice = 212.99, Thumbnails = "https://images.jtv.com/jewelry/JTV-FTW011-1-medium.jpg, https://images.jtv.com/jewelry/JTV-FTW011-2-medium.jpg, https://portalvhdskzpngkvpz6x48.blob.core.windows.net/yruler-merger/Bags/Textures/2932403/Lifestyle/ContextMode_71/light_desktop.png", Pairs = 1, Quantity = 9, BrandId = "4", CatId = "1", ProdId = "1", GoldTypeId = "2", JewelleryId = "5", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "MOS730", Name = "Moissanite Platineve Ring .64ctw D.E.W", MRP = 219.99, SalePrice = 149.99, Thumbnails = "https://images.jtv.com/jewelry/JTV-MOS730-1-medium.jpg, https://images.jtv.com/jewelry/JTV-MOS730-2-medium.jpg, https://images.jtv.com/jewelry/JTV-MOS730-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "2", CatId = "1", ProdId = "1", GoldTypeId = "3", JewelleryId = "6", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
               
                //Feature Shop
                new ItemMst() {StyleCode = "AU501C", Name = "10k Yellow Gold Faith Script 18 inch Necklace", MRP = 99.99, SalePrice = 89.99, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-AU501C-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-AU501C-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-AU501C-3-medium.jpg", Pairs = 1, Quantity = 4, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "7", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "SWE2167", Name = "Red Sponge Coral Rhodium Over Silver Eagle Pendant With Chain", MRP = 222.99, SalePrice = 139.99, Thumbnails = "https://images.jtv.com/jewelry/JTV-SWE2167-1-medium.jpg, https://images.jtv.com/jewelry/JTV-SWE2167-2-medium.jpg, https://images.jtv.com/jewelry/JTV-SWE2167-3-medium.jpg", Pairs = 1, Quantity = 6, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "8", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "BEC181", Name = "18k Yellow Gold Over Bronze Soft Rope Link Chain Necklace 24 inches", MRP = 105.99, SalePrice = 69.99, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BEC181-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC181-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC181-3-medium.jpg", Pairs = 1, Quantity = 8, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "1", JewelleryId = "9", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "DOCGW1", Name = "White Cubic Zirconia Rhodium Over Sterling Silver Stud Earrings Set of 3 6.78ctw", MRP = 79.09, SalePrice = 54.99, Thumbnails = "https://images.jtv.com/jewelry/JTV-DOCGW1-1-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCGW1-2-medium.jpg, https://images.jtv.com/jewelry/JTV-DOCGW1-2-medium.jpg", Pairs = 1, Quantity = 11, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "2", JewelleryId = "10", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "BEC749", Name = "18k Yellow Gold Over Bronze Hoop Earrings", MRP = 79.09, SalePrice = 59.99, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BEC749-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC749-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC749-2-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "3", JewelleryId = "11", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},
                new ItemMst() {StyleCode = "SRA2953", Name = "Pink Cultured Mabe Pearl Silver Floral Dangle Earrings", MRP = 259.99, SalePrice = 137.99, Thumbnails = "https://images.jtv.com/jewelry/JTV-SRA2953-1-medium.jpg, https://images.jtv.com/jewelry/JTV-SRA2953-2-medium.jpg, https://images.jtv.com/jewelry/JTV-SRA2953-3-medium.jpg", Pairs = 1, Quantity = 12, BrandId = "2", CatId = "1", ProdId = "2", GoldTypeId = "4", JewelleryId = "12", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2},

                //Trending Style
                new ItemMst() { StyleCode = "VG333A", Name = "14k White Gold 6.25mm Beveled Curb Chain", MRP = 1409.99, SalePrice = 899.99, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-VG333A-1-medium.jpg ", Pairs = 1, Quantity = 4, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "4", JewelleryId = "13", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "BEC749", Name = "18k Yellow Gold Over Bronze Hoop Earrings", MRP = 70.99, SalePrice = 47.09, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-BEC749-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC749-2-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-BEC749-3-medium.jpg", Pairs = 1, Quantity = 2, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "1", JewelleryId = "14", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "TRQ506", Name = "Green Kingman Turquoise 18k Yellow Gold Over Sterling Silver Ring", MRP = 128.99, SalePrice = 85.99, Thumbnails = "https://images.jtv.com/jewelry/JTV-TRQ506-1-medium.jpg, https://images.jtv.com/jewelry/JTV-TRQ506-1-medium.jpg, https://images.jtv.com/jewelry/JTV-TRQ506-3-medium.jpg", Pairs = 1, Quantity = 7, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "2", JewelleryId = "15", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },
                new ItemMst() { StyleCode = "MA175", Name = "18k yellow gold over bronze earrings.", MRP = 48.99, SalePrice = 37.09, Thumbnails = "https://images.jtv.com/jewelry/gold/JTV-MA175-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA175-1-medium.jpg, https://images.jtv.com/jewelry/gold/JTV-MA175-1-medium.jpg", Pairs = 1, Quantity = 5, BrandId = "2", CatId = "1", ProdId = "3", GoldTypeId = "3", JewelleryId = "16", NetGold = 10.2, GoldWt = 2.9, StoneWt = 1.9, GoldMaking = 10.3, StoneMaking = 15.2, OtherMaking = 20.2 },


                );
            context.StoneMsts.AddOrUpdate(x => x.StyleCode,
                new StoneMst() {StyleCode = "ANH458", StoneQltyId = "1", StonePcs = 1, StoneCrt = 6, StoneRate = 35 },
                new StoneMst() {StyleCode = "TS329", StoneQltyId = "2", StonePcs = 1, StoneCrt = 5, StoneRate = 100 },
                new StoneMst() {StyleCode = "TNC020", StoneQltyId = "3", StonePcs = 1, StoneCrt = 7, StoneRate = 216 },
                new StoneMst() {StyleCode = "NTT219", StoneQltyId = "4", StonePcs = 1, StoneCrt = 3, StoneRate = 560 },
                new StoneMst() {StyleCode = "MGC358", StoneQltyId = "5", StonePcs = 1, StoneCrt = 9, StoneRate = 2507 },
                new StoneMst() {StyleCode = "FO085", StoneQltyId = "6", StonePcs = 1, StoneCrt = 5, StoneRate = 102 }
            );
        }   
    }
}
