using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Saperr.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ValuesController : ControllerBase
  {
    // GET api/values
    [HttpGet]
    public ActionResult<IEnumerable<string>> Get()
    {
      return new string[] { "online" };
    }
  }
}
