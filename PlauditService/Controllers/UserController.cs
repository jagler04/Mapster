using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.OData;
using Microsoft.Azure.Mobile.Server;
using PlauditService.DataObjects;
using PlauditService.Models;
using PlauditService.Services;

namespace PlauditService.Controllers
{
    public class UserController : TableController<User>
    {
        protected override void Initialize(HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            PlauditContext context = new PlauditContext();
            DomainManager = new EntityDomainManager<User>(context, Request);
        }

        // GET tables/User
        [Authorize]
        public IQueryable<User> GetAllUser()
        {
            return Query(); 
        }
        // GET tables/User/48D68C86-6EA6-4C25-AA33-223FC9A27959
        [Authorize]
        public SingleResult<User> GetUser(string id)
        {
            return Lookup(id);
        }

        // PATCH tables/User/48D68C86-6EA6-4C25-AA33-223FC9A27959
        [Authorize]
        public Task<User> PatchUser(string id, Delta<User> patch)
        {
             return UpdateAsync(id, patch);
        }

        // POST tables/User
        public async Task<IHttpActionResult> PostUser(User item)
        {
            var hashedPass = PasswordService.GenerateSaltAndHash(item.Password);
            item.Password = hashedPass;
            item.Premium = true;
            User current = await InsertAsync(item);
            return CreatedAtRoute("Tables", new { id = current.Id }, current);
        }

        // DELETE tables/User/48D68C86-6EA6-4C25-AA33-223FC9A27959
        [Authorize]
        public Task DeleteUser(string id)
        {
             return DeleteAsync(id);
        }
    }
}
