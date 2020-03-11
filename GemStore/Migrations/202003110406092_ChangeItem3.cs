namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeItem3 : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.StoneMsts", new[] { "StoneQltyID" });
            CreateIndex("dbo.StoneMsts", "StoneQltyId");
        }
        
        public override void Down()
        {
            DropIndex("dbo.StoneMsts", new[] { "StoneQltyId" });
            CreateIndex("dbo.StoneMsts", "StoneQltyID");
        }
    }
}
