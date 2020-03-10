namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeCat : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.CatMsts", "CatThumbnail", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.CatMsts", "CatThumbnail");
        }
    }
}
