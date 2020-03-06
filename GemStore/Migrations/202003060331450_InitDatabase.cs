namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitDatabase : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.BrandMsts",
                c => new
                    {
                        BrandId = c.String(nullable: false, maxLength: 128),
                        BrandType = c.String(),
                    })
                .PrimaryKey(t => t.BrandId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.BrandMsts");
        }
    }
}
