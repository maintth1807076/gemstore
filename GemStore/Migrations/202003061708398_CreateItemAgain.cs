namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateItemAgain : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DimMsts",
                c => new
                    {
                        StyleCode = c.String(nullable: false, maxLength: 128),
                        DimQltyId = c.String(maxLength: 128),
                        DimSubTypeId = c.String(maxLength: 128),
                        DimCrt = c.Double(nullable: false),
                        DimPcs = c.Double(nullable: false),
                        DimGm = c.Double(nullable: false),
                        DimSize = c.Double(nullable: false),
                        DimRate = c.Double(nullable: false),
                        DimAmt = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.StyleCode)
                .ForeignKey("dbo.DimQltyMsts", t => t.DimQltyId)
                .ForeignKey("dbo.DimQltySubMsts", t => t.DimSubTypeId)
                .ForeignKey("dbo.ItemMsts", t => t.StyleCode)
                .Index(t => t.StyleCode)
                .Index(t => t.DimQltyId)
                .Index(t => t.DimSubTypeId);
            
            CreateTable(
                "dbo.DimQltyMsts",
                c => new
                    {
                        DimQltyId = c.String(nullable: false, maxLength: 128),
                        DimQlty = c.String(),
                    })
                .PrimaryKey(t => t.DimQltyId);
            
            CreateTable(
                "dbo.DimQltySubMsts",
                c => new
                    {
                        DimSubTypeId = c.String(nullable: false, maxLength: 128),
                        DimQlty = c.String(),
                    })
                .PrimaryKey(t => t.DimSubTypeId);
            
            CreateTable(
                "dbo.StoneMsts",
                c => new
                    {
                        StyleCode = c.String(nullable: false, maxLength: 128),
                        StoneQltyID = c.String(maxLength: 128),
                        StoneGm = c.Double(nullable: false),
                        StonePcs = c.Double(nullable: false),
                        StoneCrt = c.Double(nullable: false),
                        StoneRate = c.Double(nullable: false),
                        StoneAmt = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.StyleCode)
                .ForeignKey("dbo.ItemMsts", t => t.StyleCode)
                .ForeignKey("dbo.StoneQltyMsts", t => t.StoneQltyID)
                .Index(t => t.StyleCode)
                .Index(t => t.StoneQltyID);
            
            CreateTable(
                "dbo.StoneQltyMsts",
                c => new
                    {
                        StoneQltyID = c.String(nullable: false, maxLength: 128),
                        StoneQlty = c.String(),
                    })
                .PrimaryKey(t => t.StoneQltyID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.StoneMsts", "StoneQltyID", "dbo.StoneQltyMsts");
            DropForeignKey("dbo.StoneMsts", "StyleCode", "dbo.ItemMsts");
            DropForeignKey("dbo.DimMsts", "StyleCode", "dbo.ItemMsts");
            DropForeignKey("dbo.DimMsts", "DimSubTypeId", "dbo.DimQltySubMsts");
            DropForeignKey("dbo.DimMsts", "DimQltyId", "dbo.DimQltyMsts");
            DropIndex("dbo.StoneMsts", new[] { "StoneQltyID" });
            DropIndex("dbo.StoneMsts", new[] { "StyleCode" });
            DropIndex("dbo.DimMsts", new[] { "DimSubTypeId" });
            DropIndex("dbo.DimMsts", new[] { "DimQltyId" });
            DropIndex("dbo.DimMsts", new[] { "StyleCode" });
            DropTable("dbo.StoneQltyMsts");
            DropTable("dbo.StoneMsts");
            DropTable("dbo.DimQltySubMsts");
            DropTable("dbo.DimQltyMsts");
            DropTable("dbo.DimMsts");
        }
    }
}
