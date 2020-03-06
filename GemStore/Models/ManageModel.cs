using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class AdminLoginMst
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class BrandMst
    {
        public string BrandId { get; set; }
        public string BrandType { get; set; }
    }

    public class CatMst
    {
        public string CatId { get; set; }
        public string CatName { get; set; }
    }

    public class CertifyMst
    {
        public string CertifyId { get; set; }
        public string CertifyType { get; set; }
    }





    public class GoldKrt
    {
        public string GoldTypeId { get; set; }
        public string GoldCrt { get; set; }
    }

    public class Prod
    {
        public string ProdId { get; set; }
        public string ProdType { get; set; }
    }

    public class Stone
    {
        public string StyleCode { get; set; }
        public string StoneQltyID { get; set; }
        public int StoneGm { get; set; }
        public int StonePcs { get; set; }
        public int StoneCrt { get; set; }
        public int StoneRate { get; set; }
        public int StoneAmt { get; set; }
    }

    public class Products
    {
        public string Id { get; set; }
        public string name { get; set; }

    }


    public class UserRegMst
    {
        public string UserId { get; set; }
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
    }

    public class Item
    {
        public string Stype_Code { get; set; }
        public string Pairs { get; set; }
        public string Brand_ID { get; set; }
        public int Quantity { get; set; }
        public string Cat_ID { get; set; }
        public string Prod_Quantity { get; set; }
        public string Certify_ID { get; set; }
        public string Prod_ID { get; set; }
        public string GoldType_ID { get; set; }
        public string Gold_Wt { get; set; }
        public string Stone_Wt { get; set; }
        public string Net_Gold { get; set; }
        public string Wstg_Per { get; set; }
        public string Tot_Gross_Wt { get; set; }
        public string Gold_Rate { get; set; }
        public string Gold_Amt { get; set; }
        public string Gold_Making { get; set; }
        public string Stone_Making { get; set; }
        public string Other_Making { get; set; }
        public string Tot_Making { get; set; }
        public string MRP { get; set; }
    }
}
