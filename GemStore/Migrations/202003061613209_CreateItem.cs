namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateItem : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ItemMsts",
                c => new
                    {
                        Stype_Code = c.String(nullable: false, maxLength: 128),
                        Pairs = c.Int(nullable: false),
                        BrandId = c.String(maxLength: 128),
                        Quantity = c.Int(nullable: false),
                        CatId = c.String(maxLength: 128),
                        ProdQuantity = c.String(),
                        CertifyId = c.String(maxLength: 128),
                        ProdId = c.String(maxLength: 128),
                        GoldTypeId = c.String(maxLength: 128),
                        GoldWt = c.Double(nullable: false),
                        StoneWt = c.Double(nullable: false),
                        NetGold = c.Double(nullable: false),
                        WstgPer = c.Double(nullable: false),
                        TotGrossWt = c.Double(nullable: false),
                        GoldRate = c.Double(nullable: false),
                        GoldAmt = c.Double(nullable: false),
                        GoldMaking = c.Double(nullable: false),
                        StoneMaking = c.Double(nullable: false),
                        OtherMaking = c.Double(nullable: false),
                        TotMaking = c.Double(nullable: false),
                        MRP = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Stype_Code)
                .ForeignKey("dbo.BrandMsts", t => t.BrandId)
                .ForeignKey("dbo.CatMsts", t => t.CatId)
                .ForeignKey("dbo.CertifyMsts", t => t.CertifyId)
                .ForeignKey("dbo.GoldKrts", t => t.GoldTypeId)
                .ForeignKey("dbo.ProdMsts", t => t.ProdId)
                .Index(t => t.BrandId)
                .Index(t => t.CatId)
                .Index(t => t.CertifyId)
                .Index(t => t.ProdId)
                .Index(t => t.GoldTypeId);
            
            CreateTable(
                "dbo.CatMsts",
                c => new
                    {
                        CatId = c.String(nullable: false, maxLength: 128),
                        CatName = c.String(),
                    })
                .PrimaryKey(t => t.CatId);
            
            CreateTable(
                "dbo.CertifyMsts",
                c => new
                    {
                        CertifyId = c.String(nullable: false, maxLength: 128),
                        CertifyType = c.String(),
                    })
                .PrimaryKey(t => t.CertifyId);
            
            CreateTable(
                "dbo.GoldKrts",
                c => new
                    {
                        GoldTypeId = c.String(nullable: false, maxLength: 128),
                        GoldCrt = c.String(),
                    })
                .PrimaryKey(t => t.GoldTypeId);
            
            CreateTable(
                "dbo.ProdMsts",
                c => new
                    {
                        ProdId = c.String(nullable: false, maxLength: 128),
                        ProdType = c.String(),
                    })
                .PrimaryKey(t => t.ProdId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ItemMsts", "ProdId", "dbo.ProdMsts");
            DropForeignKey("dbo.ItemMsts", "GoldTypeId", "dbo.GoldKrts");
            DropForeignKey("dbo.ItemMsts", "CertifyId", "dbo.CertifyMsts");
            DropForeignKey("dbo.ItemMsts", "CatId", "dbo.CatMsts");
            DropForeignKey("dbo.ItemMsts", "BrandId", "dbo.BrandMsts");
            DropIndex("dbo.ItemMsts", new[] { "GoldTypeId" });
            DropIndex("dbo.ItemMsts", new[] { "ProdId" });
            DropIndex("dbo.ItemMsts", new[] { "CertifyId" });
            DropIndex("dbo.ItemMsts", new[] { "CatId" });
            DropIndex("dbo.ItemMsts", new[] { "BrandId" });
            DropTable("dbo.ProdMsts");
            DropTable("dbo.GoldKrts");
            DropTable("dbo.CertifyMsts");
            DropTable("dbo.CatMsts");
            DropTable("dbo.ItemMsts");
        }
    }
}
