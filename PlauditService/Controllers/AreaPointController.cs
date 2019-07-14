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
    public class AreaPointController : TableController<AreaPoint>
    {
        [Authorize]
        protected override void Initialize(HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            PlauditContext context = new PlauditContext();
            DomainManager = new EntityDomainManager<AreaPoint>(context, Request);
        }

        // GET tables/AreaPoint
        public IQueryable<AreaPoint> GetAllAreaPoint()
        {
            return Query();
        }

        // GET tables/AreaPoint/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public SingleResult<AreaPoint> GetAreaPoint(string id)
        {
            return Lookup(id);
        }

        // PATCH tables/AreaPoint/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task<AreaPoint> PatchAreaPoint(string id, Delta<AreaPoint> patch)
        {
             return UpdateAsync(id, patch);
        }

        // POST tables/AreaPoint
        public async Task<IHttpActionResult> PostAreaPoint(AreaPoint item)
        {
            AreaPoint current = await InsertAsync(item);
            return CreatedAtRoute("Tables", new { id = current.Id }, current);
        }

        // DELETE tables/AreaPoint/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task DeleteAreaPoint(string id)
        {
             return DeleteAsync(id);
        }
    }
}
