using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace GemStore.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string UserFName { get; set; }
        public string UserLName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string MobileNumber { get; set; }
        public string EmailId { get; set; }
        public string Dob { get; set; }
        public string CurrentDate { get; set; }
        public string Password { get; set; }
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
    }
    public class GemStoreContext : IdentityDbContext<ApplicationUser>
    {
        public GemStoreContext() : base("name=GemStoreContext", throwIfV1Schema: false)
        {
        }
        public static GemStoreContext Create()
        {
            return new GemStoreContext();
        }
        public DbSet<BrandMst> BrandMsts { get; set; }
        public DbSet<CatMst> CatMsts { get; set; }
        public DbSet<GoldKrt> GoldKrt { get; set; }
        public DbSet<ProdMst> ProdMst { get; set; }
        public DbSet<CertifyMst> CertifyMst { get; set; }
        public DbSet<JewelTypeMst> JewelTypeMst { get; set; }
        public DbSet<StoneQltyMst> StoneQltyMst { get; set; }
    }
}