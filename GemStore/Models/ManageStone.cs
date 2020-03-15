using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class StoneMst
    {
        [Key]
        [ForeignKey("ItemMst")]
        public string StyleCode { get; set; }
        [ForeignKey("StoneQltyMst")]
        public string StoneQltyId { get; set; }
        public double StoneGm { get; set; }
        public double StonePcs { get; set; }
        public double StoneCrt { get; set; }
        public double StoneRate { get; set; }
        public double StoneAmt { get; set; }
        public virtual StoneQltyMst StoneQltyMst { get; set; }
        public virtual ItemMst ItemMst { get; set; }
    }
    public class StoneQltyMst
    {
        [Key]
        public string StoneQltyId { get; set; }
        public string StoneQlty { get; set; }
        [DisplayName("Image")]
        public string StoneThumbnail { get; set; }
        public string Description { get; set; }
    }
}