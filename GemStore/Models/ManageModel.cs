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
        //public virtual ICollection<ItemMst> ItemMsts { get; set; }
    }

    //public class CatMst
    //{
    //    [Key]
    //    public string CatId { get; set; }
    //    public string CatName { get; set; }
    //    public virtual ICollection<ItemMst> ItemMsts { get; set; }
    //}

    //public class CertifyMst
    //{
    //    [Key]
    //    public string CertifyId { get; set; }
    //    public string CertifyType { get; set; }
    //    public virtual ICollection<ItemMst> ItemMsts { get; set; }
    //}

    //public class GoldKrt
    //{
    //    [Key]
    //    public string GoldTypeId { get; set; }
    //    public string GoldCrt { get; set; }
    //    public virtual ICollection<ItemMst> ItemMsts { get; set; }
    //}

    //public class Prod
    //{
    //    [Key]
    //    public string ProdId { get; set; }
    //    public string ProdType { get; set; }
    //    public virtual ICollection<ItemMst> ItemMsts { get; set; }
    //}

    //public class Stone
    //{
    //    public string StyleCode { get; set; }
    //    public string StoneQltyID { get; set; }
    //    public int StoneGm { get; set; }
    //    public int StonePcs { get; set; }
    //    public int StoneCrt { get; set; }
    //    public int StoneRate { get; set; }
    //    public int StoneAmt { get; set; }
    //}

    //public class ItemMst
    //{
    //    [Key]
    //    public string Stype_Code { get; set; }
    //    public string Pairs { get; set; }
    //    public string Brand_ID { get; set; }
    //    public virtual BrandMst BrandMst { get; set; }
    //    public int Quantity { get; set; }
    //    public string Cat_ID { get; set; }
    //    public virtual CatMst CatMst { get; set; }
    //    public string Prod_Quantity { get; set; }
    //    public string Certify_ID { get; set; }
    //    public virtual CertifyMst CertifyMst { get; set; }
    //    public string Prod_ID { get; set; }
    //    public virtual Prod Prod { get; set; }
    //    public string GoldType_ID { get; set; }
    //    public virtual GoldKrt GoldKrt { get; set; }
    //    public string Gold_Wt { get; set; }
    //    public string Stone_Wt { get; set; }
    //    public string Net_Gold { get; set; }
    //    public string Wstg_Per { get; set; }
    //    public string Tot_Gross_Wt { get; set; }
    //    public string Gold_Rate { get; set; }
    //    public string Gold_Amt { get; set; }
    //    public string Gold_Making { get; set; }
    //    public string Stone_Making { get; set; }
    //    public string Other_Making { get; set; }
    //    public string Tot_Making { get; set; }
    //    public string MRP { get; set; }
    //}
}
