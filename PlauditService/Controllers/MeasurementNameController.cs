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
    public class MeasurementNameController : TableController<MeasurementType>
    {
        protected override void Initialize(HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            PlauditContext context = new PlauditContext();
            DomainManager = new EntityDomainManager<MeasurementType>(context, Request);
        }

        // GET tables/MeasurementName
        public IQueryable<MeasurementType> GetAllMeasurementName()
        {
            return Query(); 
        }

        // GET tables/MeasurementName/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public SingleResult<MeasurementType> GetMeasurementName(string id)
        {
            return Lookup(id);
        }

        // PATCH tables/MeasurementName/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task<MeasurementType> PatchMeasurementName(string id, Delta<MeasurementType> patch)
        {
             return UpdateAsync(id, patch);
        }

        // POST tables/MeasurementName
        public async Task<IHttpActionResult> PostMeasurementName(MeasurementType item)
        {
            MeasurementType current = await InsertAsync(item);
            return CreatedAtRoute("Tables", new { id = current.Id }, current);
        }

        // DELETE tables/MeasurementName/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task DeleteMeasurementName(string id)
        {
             return DeleteAsync(id);
        }
    }
}
