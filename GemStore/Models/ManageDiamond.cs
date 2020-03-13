using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class DimMst
    {
        [Key]
        [ForeignKey("ItemMst")]
        public string StyleCode { get; set; }
        [ForeignKey("DimQltyMst")]
        public string DimQltyId { get; set; }
        [ForeignKey("DimQltySubMst")]
        public string DimSubTypeId { get; set; }
        [DisplayName("Carat Of Diamond")]
        public double DimCrt { get; set; }
        [DisplayName("Carat Of Diamond")]
        public double DimPcs { get; set; }
        [DisplayName("Weight Of Each Diamond(Grams)")]
        public double DimGm { get; set; }
        [DisplayName("Size Of Each Diamond")]
        public double DimSize { get; set; }
        [DisplayName("Rate Of Each Diamond")]
        public double DimRate { get; set; }
        public double DimAmt { get; set; }
        public virtual ItemMst ItemMst { get; set; }
        public virtual DimQltyMst DimQltyMst { get; set; }
        public virtual DimQltySubMst DimQltySubMst { get; set; }

    }
    public class DimQltyMst
    {
        [Key]
        public string DimQltyId { get; set; }
        public string DimQlty { get; set; }
    }

    public class DimQltySubMst
    {
        [Key]
        public string DimSubTypeId { get; set; }
        public string DimQlty { get; set; }
    }
    public class DimInfoMst
    {
        [Key]
        public string DimId { get; set; }
        public string DimType { get; set; }
        public string DimSubType { get; set; }
        public string DimCrt { get; set; }
        public double DimPrice { get; set; }
        public string DimImg { get; set; }
    }
}