using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace GemStore
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
            //routes.MapRoute(
            //    "Admin",
            //    "Admin/{controller}/{action}",
            //    new { area= "Admin", controller = "CatMsts" }
            //    //new { isInRoleAdmin = new RoleRouteConstraint("Admin") }
            //);
        }
        //public class RoleRouteConstraint : IRouteConstraint
        //{
        //    private string role;

        //    public RoleRouteConstraint(string role)
        //    {
        //        this.role = role;
        //    }
        //    public bool Match(HttpContextBase httpContext, Route route, string parameterName, RouteValueDictionary values, RouteDirection routeDirection)
        //    {
        //        if (string.IsNullOrWhiteSpace(this.role))
        //            return false;
        //        return httpContext.User.IsInRole(role);
        //    }
        //}
    }
}
