using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(PlauditService.Startup))]

namespace PlauditService
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureMobileApp(app);
        }
    }
}