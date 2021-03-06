﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class GoldKrt
    {
        [Key]
        public string GoldTypeId { get; set; }
        public string GoldCrt { get; set; }
        [DisplayName("Image")]
        public string GoldThumbnail { get; set; }
        public virtual ICollection<ItemMst> ItemMsts { get; set; }
    }
}