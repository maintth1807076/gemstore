using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GemStore.Models
{
    public class BrandMst
    {
        [Key]
        public string BrandId { get; set; }
        [DisplayName("Brand")]
        [StringLength(50, ErrorMessage = "The {0} must be at least {2} characters long.")]
        [Required]
        [Remote("IsBrandExist", "BrandMsts", ErrorMessage = "Brand Type already exits")]
        public string BrandType { get; set; }
        [DisplayName("Image")]
        public string BrandThumbnail { get; set; }
        public virtual ICollection<ItemMst> ItemMsts { get; set; }
    }

    public class CatMst
    {
        [Key]
        public string CatId { get; set; }
        [DisplayName("Category")]
        public string CatName { get; set; }
        [DisplayName("Image")]
        public string CatThumbnail { get; set; }
        public virtual ICollection<ItemMst> ItemMsts { get; set; }
    }
    //public class CatSubMst
    //{
    //    [Key]
    //    public string CatSubId { get; set; }
    //    public string Description { get; set; }
    //    public string Thumbnail { get; set; }
        
    //}
    public class ProdMst
    {
        [Key]
        public string ProdId { get; set; }
        [DisplayName("Product Type")]
        public string ProdType { get; set; }
        [DisplayName("Image")]
        public string ProdThumbnail { get; set; }
        public virtual ICollection<ItemMst> ItemMsts { get; set; }
    }
    public class CertifyMst
    {
        [Key]
        public string CertifyId { get; set; }
        [DisplayName("Certify")]
        public string CertifyType { get; set; }
        public string Description { get; set; }
        public virtual ICollection<ItemMst> ItemMsts { get; set; }
    }

    public class JewelTypeMst
    {
        [Key]
        public string JewelleryId { get; set; }
        [DisplayName("Jewellery Type")]
        public string JewelleryType { get; set; }
        [DisplayName("Image")]
        public string JewelThumbnail { get; set; }
    }
}