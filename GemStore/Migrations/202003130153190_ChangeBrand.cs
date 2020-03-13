namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeBrand : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ItemViewModels",
                c => new
                    {
                        StyleCode = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        Pairs = c.Int(nullable: false),
                        BrandId = c.String(),
                        Quantity = c.Int(nullable: false),
                        CatId = c.String(),
                        ProdQuantity = c.String(),
                        CertifyId = c.String(),
                        ProdId = c.String(),
                        GoldTypeId = c.String(),
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
                        SalePrice = c.Double(nullable: false),
                        Thumbnails = c.String(),
                        JewelleryId = c.String(),
                        DimMstView_StyleCode = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.StyleCode)
                .ForeignKey("dbo.DimMsts", t => t.DimMstView_StyleCode)
                .Index(t => t.DimMstView_StyleCode);
            
            AlterColumn("dbo.BrandMsts", "BrandType", c => c.String(nullable: false, maxLength: 50));
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ItemViewModels", "DimMstView_StyleCode", "dbo.DimMsts");
            DropIndex("dbo.ItemViewModels", new[] { "DimMstView_StyleCode" });
            AlterColumn("dbo.BrandMsts", "BrandType", c => c.String());
            DropTable("dbo.ItemViewModels");
        }
    }
}
