using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GemStore.Startup))]
namespace GemStore
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}