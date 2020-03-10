namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeItem : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ItemMsts", "Thumbnails", c => c.String());
            AddColumn("dbo.ItemMsts", "JewelleryId", c => c.String(maxLength: 128));
            AddColumn("dbo.CertifyMsts", "Description", c => c.String());
            AddColumn("dbo.StoneQltyMsts", "Description", c => c.String());
            CreateIndex("dbo.ItemMsts", "JewelleryId");
            AddForeignKey("dbo.ItemMsts", "JewelleryId", "dbo.JewelTypeMsts", "JewelleryId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ItemMsts", "JewelleryId", "dbo.JewelTypeMsts");
            DropIndex("dbo.ItemMsts", new[] { "JewelleryId" });
            DropColumn("dbo.StoneQltyMsts", "Description");
            DropColumn("dbo.CertifyMsts", "Description");
            DropColumn("dbo.ItemMsts", "JewelleryId");
            DropColumn("dbo.ItemMsts", "Thumbnails");
        }
    }
}
