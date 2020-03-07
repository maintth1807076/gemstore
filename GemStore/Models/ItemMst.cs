using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class ItemMst
    {
        [Key]
        public string Stype_Code { get; set; }
        [Required]
        public int Pairs { get; set; }
        public string BrandId { get; set; }
        public virtual BrandMst BrandMst { get; set; }
        [Required]
        public int Quantity { get; set; }
        public string CatId { get; set; }
        public virtual CatMst CatMst { get; set; }
        public string ProdQuantity { get; set; }
        public string CertifyId { get; set; }
        public virtual CertifyMst CertifyMst { get; set; }
        public string ProdId { get; set; }
        public virtual ProdMst ProdMst { get; set; }
        public string GoldTypeId { get; set; }
        public virtual GoldKrt GoldKrt { get; set; }
        public double GoldWt { get; set; }
        public double StoneWt { get; set; }
        public double NetGold { get; set; }
        public double WstgPer { get; set; }
        public double TotGrossWt { get; set; }
        public double GoldRate { get; set; }
        public double GoldAmt { get; set; }
        public double GoldMaking { get; set; }
        public double StoneMaking { get; set; }
        public double OtherMaking { get; set; }
        public double TotMaking { get; set; }
        public double MRP { get; set; }
        public virtual DimMst DimMst { get; set; }
        public virtual StoneMst StoneMst { get; set; }
    }
}