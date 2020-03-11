namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeItem2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ItemMsts", "Name", c => c.String());
            AddColumn("dbo.ItemMsts", "SalePrice", c => c.Double(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ItemMsts", "SalePrice");
            DropColumn("dbo.ItemMsts", "Name");
        }
    }
}
