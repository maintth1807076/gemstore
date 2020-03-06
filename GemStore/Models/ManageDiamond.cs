using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class DimMst
    {
        public string StyleCode { get; set; }
        public string DimQltyId { get; set; }
        public string DimSubTypeId { get; set; }
        public string DimCrt { get; set; }
    }
    public class DimQltyMst
    {
        public string DimQltyId { get; set; }
        public string DimQlty { get; set; }
    }

    public class DimQltySubMst
    {
        public string DimSubTypeId { get; set; }
        public string DimQlty { get; set; }
    }
    public class DimInfoMst
    {
        public string DimId { get; set; }
        public string DimType { get; set; }
        public string DimSubType { get; set; }
        public string DimCrt { get; set; }
        public string DimPrice { get; set; }
        public string DimImg { get; set; }
    }
}