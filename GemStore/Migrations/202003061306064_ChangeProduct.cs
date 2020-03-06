namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeProduct : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ItemMsts",
                c => new
                    {
                        Stype_Code = c.String(nullable: false, maxLength: 128),
                        Pairs = c.String(),
                        Brand_ID = c.String(),
                        Quantity = c.Int(nullable: false),
                        Cat_ID = c.String(),
                        Prod_Quantity = c.String(),
                        Certify_ID = c.String(),
                        Prod_ID = c.String(),
                        GoldType_ID = c.String(),
                        Gold_Wt = c.String(),
                        Stone_Wt = c.String(),
                        Net_Gold = c.String(),
                        Wstg_Per = c.String(),
                        Tot_Gross_Wt = c.String(),
                        Gold_Rate = c.String(),
                        Gold_Amt = c.String(),
                        Gold_Making = c.String(),
                        Stone_Making = c.String(),
                        Other_Making = c.String(),
                        Tot_Making = c.String(),
                        MRP = c.String(),
                        BrandMst_BrandId = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Stype_Code)
                .ForeignKey("dbo.BrandMsts", t => t.BrandMst_BrandId)
                .Index(t => t.BrandMst_BrandId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ItemMsts", "BrandMst_BrandId", "dbo.BrandMsts");
            DropIndex("dbo.ItemMsts", new[] { "BrandMst_BrandId" });
            DropTable("dbo.ItemMsts");
        }
    }
}
