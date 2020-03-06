using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class StoneMst
    {
        [Key]
        public string StyleCode { get; set; }
        public string StoneQltyID { get; set; }
        public int StoneGm { get; set; }
        public int StonePcs { get; set; }
        public int StoneCrt { get; set; }
        public int StoneRate { get; set; }
        public int StoneAmt { get; set; }
        public virtual StoneQltyMst StoneQltyMst { get; set; }
    }
    public class StoneQltyMst
    {
        public string StoneQltyID { get; set; }
        public string StoneQlty { get; set; }
        public virtual ICollection<StoneMst> StoneMsts { get; set; }
    }
}