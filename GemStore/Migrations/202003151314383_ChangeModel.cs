namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.BrandMsts", "BrandThumbnail", c => c.String());
            AddColumn("dbo.DimQltyMsts", "DimThumbnail", c => c.String());
            AddColumn("dbo.DimQltySubMsts", "DimSubThumbnail", c => c.String());
            AddColumn("dbo.GoldKrts", "GoldThumbnail", c => c.String());
            AddColumn("dbo.JewelTypeMsts", "JewelThumbnail", c => c.String());
            AddColumn("dbo.ProdMsts", "ProdThumbnail", c => c.String());
            AddColumn("dbo.StoneQltyMsts", "StoneThumbnail", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.StoneQltyMsts", "StoneThumbnail");
            DropColumn("dbo.ProdMsts", "ProdThumbnail");
            DropColumn("dbo.JewelTypeMsts", "JewelThumbnail");
            DropColumn("dbo.GoldKrts", "GoldThumbnail");
            DropColumn("dbo.DimQltySubMsts", "DimSubThumbnail");
            DropColumn("dbo.DimQltyMsts", "DimThumbnail");
            DropColumn("dbo.BrandMsts", "BrandThumbnail");
        }
    }
}
