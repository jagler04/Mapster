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
    [Authorize]
    public class AreaController : TableController<Area>
    {
        protected override void Initialize(HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            PlauditContext context = new PlauditContext();
            DomainManager = new EntityDomainManager<Area>(context, Request);
        }

        // GET tables/Area
        public IQueryable<Area> GetAllArea()
        {
            return Query();
        }

        // GET tables/Area/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public SingleResult<Area> GetArea(string id)
        {
            return Lookup(id);
        }

        // PATCH tables/Area/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task<Area> PatchArea(string id, Delta<Area> patch)
        {
             return UpdateAsync(id, patch);
        }

        // POST tables/Area
        public async Task<IHttpActionResult> PostArea(Area item)
        {
            Area current = await InsertAsync(item);
            return CreatedAtRoute("Tables", new { id = current.Id }, current);
        }

        // DELETE tables/Area/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task DeleteArea(string id)
        {
             return DeleteAsync(id);
        }
    }
}
