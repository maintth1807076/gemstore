namespace GemStore.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeModel : DbMigration
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
            
            CreateTable(
                "dbo.ItemMsts",
                c => new
                    {
                        Stype_Code = c.String(nullable: false, maxLength: 128),
                        Pairs = c.Int(nullable: false),
                        BrandId = c.String(maxLength: 128),
                        Quantity = c.Int(nullable: false),
                        CatId = c.String(maxLength: 128),
                        ProdQuantity = c.String(),
                        CertifyId = c.String(maxLength: 128),
                        ProdId = c.String(maxLength: 128),
                        GoldTypeId = c.String(maxLength: 128),
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
                    })
                .PrimaryKey(t => t.Stype_Code)
                .ForeignKey("dbo.BrandMsts", t => t.BrandId)
                .ForeignKey("dbo.CatMsts", t => t.CatId)
                .ForeignKey("dbo.CertifyMsts", t => t.CertifyId)
                .ForeignKey("dbo.GoldKrts", t => t.GoldTypeId)
                .ForeignKey("dbo.ProdMsts", t => t.ProdId)
                .Index(t => t.BrandId)
                .Index(t => t.CatId)
                .Index(t => t.CertifyId)
                .Index(t => t.ProdId)
                .Index(t => t.GoldTypeId);
            
            CreateTable(
                "dbo.CatMsts",
                c => new
                    {
                        CatId = c.String(nullable: false, maxLength: 128),
                        CatName = c.String(),
                        CatThumbnail = c.String(),
                    })
                .PrimaryKey(t => t.CatId);
            
            CreateTable(
                "dbo.CertifyMsts",
                c => new
                    {
                        CertifyId = c.String(nullable: false, maxLength: 128),
                        CertifyType = c.String(),
                    })
                .PrimaryKey(t => t.CertifyId);
            
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
                "dbo.GoldKrts",
                c => new
                    {
                        GoldTypeId = c.String(nullable: false, maxLength: 128),
                        GoldCrt = c.String(),
                    })
                .PrimaryKey(t => t.GoldTypeId);
            
            CreateTable(
                "dbo.ProdMsts",
                c => new
                    {
                        ProdId = c.String(nullable: false, maxLength: 128),
                        ProdType = c.String(),
                    })
                .PrimaryKey(t => t.ProdId);
            
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
            
            CreateTable(
                "dbo.JewelTypeMsts",
                c => new
                    {
                        JewelleryId = c.String(nullable: false, maxLength: 128),
                        JewelleryType = c.String(),
                    })
                .PrimaryKey(t => t.JewelleryId);
            
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        UserFName = c.String(),
                        UserLName = c.String(),
                        Address = c.String(),
                        City = c.String(),
                        State = c.String(),
                        MobileNumber = c.String(),
                        EmailId = c.String(),
                        Dob = c.String(),
                        CurrentDate = c.String(),
                        Password = c.String(),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropForeignKey("dbo.StoneMsts", "StoneQltyID", "dbo.StoneQltyMsts");
            DropForeignKey("dbo.StoneMsts", "StyleCode", "dbo.ItemMsts");
            DropForeignKey("dbo.ItemMsts", "ProdId", "dbo.ProdMsts");
            DropForeignKey("dbo.ItemMsts", "GoldTypeId", "dbo.GoldKrts");
            DropForeignKey("dbo.DimMsts", "StyleCode", "dbo.ItemMsts");
            DropForeignKey("dbo.DimMsts", "DimSubTypeId", "dbo.DimQltySubMsts");
            DropForeignKey("dbo.DimMsts", "DimQltyId", "dbo.DimQltyMsts");
            DropForeignKey("dbo.ItemMsts", "CertifyId", "dbo.CertifyMsts");
            DropForeignKey("dbo.ItemMsts", "CatId", "dbo.CatMsts");
            DropForeignKey("dbo.ItemMsts", "BrandId", "dbo.BrandMsts");
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropIndex("dbo.StoneMsts", new[] { "StoneQltyID" });
            DropIndex("dbo.StoneMsts", new[] { "StyleCode" });
            DropIndex("dbo.DimMsts", new[] { "DimSubTypeId" });
            DropIndex("dbo.DimMsts", new[] { "DimQltyId" });
            DropIndex("dbo.DimMsts", new[] { "StyleCode" });
            DropIndex("dbo.ItemMsts", new[] { "GoldTypeId" });
            DropIndex("dbo.ItemMsts", new[] { "ProdId" });
            DropIndex("dbo.ItemMsts", new[] { "CertifyId" });
            DropIndex("dbo.ItemMsts", new[] { "CatId" });
            DropIndex("dbo.ItemMsts", new[] { "BrandId" });
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetRoles");
            DropTable("dbo.JewelTypeMsts");
            DropTable("dbo.StoneQltyMsts");
            DropTable("dbo.StoneMsts");
            DropTable("dbo.ProdMsts");
            DropTable("dbo.GoldKrts");
            DropTable("dbo.DimQltySubMsts");
            DropTable("dbo.DimQltyMsts");
            DropTable("dbo.DimMsts");
            DropTable("dbo.CertifyMsts");
            DropTable("dbo.CatMsts");
            DropTable("dbo.ItemMsts");
            DropTable("dbo.BrandMsts");
        }
    }
}
