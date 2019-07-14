using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.OData;
using Microsoft.Azure.Mobile.Server;
using PlauditService.DataObjects;
using PlauditService.Models;

namespace PlauditService.Controllers
{
    public class ZonePointController : TableController<ZonePoint>
    {
        protected override void Initialize(HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            PlauditContext context = new PlauditContext();
            DomainManager = new EntityDomainManager<ZonePoint>(context, Request);
        }

        // GET tables/ZonePoint
        public IQueryable<ZonePoint> GetAllZonePoint()
        {
            return Query(); 
        }

        // GET tables/ZonePoint/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public SingleResult<ZonePoint> GetZonePoint(string id)
        {
            return Lookup(id);
        }

        // PATCH tables/ZonePoint/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task<ZonePoint> PatchZonePoint(string id, Delta<ZonePoint> patch)
        {
             return UpdateAsync(id, patch);
        }

        // POST tables/ZonePoint
        public async Task<IHttpActionResult> PostZonePoint(ZonePoint item)
        {
            ZonePoint current = await InsertAsync(item);
            return CreatedAtRoute("Tables", new { id = current.Id }, current);
        }

        // DELETE tables/ZonePoint/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task DeleteZonePoint(string id)
        {
             return DeleteAsync(id);
        }
    }
}
