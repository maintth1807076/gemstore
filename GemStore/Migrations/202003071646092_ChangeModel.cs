namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.JewelTypeMsts",
                c => new
                    {
                        JewelleryId = c.String(nullable: false, maxLength: 128),
                        JewelleryType = c.String(),
                    })
                .PrimaryKey(t => t.JewelleryId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.JewelTypeMsts");
        }
    }
}
