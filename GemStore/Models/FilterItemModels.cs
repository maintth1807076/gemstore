using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class BrandMst
    {
        [Key]
        public string BrandId { get; set; }
        public string BrandType { get; set; }
        public virtual ICollection<ItemMst> ItemMsts { get; set; }
    }

    public class CatMst
    {
        [Key]
        public string CatId { get; set; }
        public string CatName { get; set; }
        public string CatThumbnail { get; set; }
        public virtual ICollection<ItemMst> ItemMsts { get; set; }
    }
    public class ProdMst
    {
        [Key]
        public string ProdId { get; set; }
        public string ProdType { get; set; }
        public virtual ICollection<ItemMst> ItemMsts { get; set; }
    }
    public class CertifyMst
    {
        [Key]
        public string CertifyId { get; set; }
        public string CertifyType { get; set; }
        public virtual ICollection<ItemMst> ItemMsts { get; set; }
    }

    public class JewelTypeMst
    {
        [Key]
        public string JewelleryId { get; set; }
        public string JewelleryType { get; set; }
    }
}