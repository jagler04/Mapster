using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Saperr.Models;
using Saperr.Services;

namespace Saperr.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class GraphController : ControllerBase
  {
    private readonly IAuthenticationService _authService;
    private readonly GraphService _graphService;

    public GraphController(IAuthenticationService authService, GraphService graphService)
    {
      _authService = authService;
      _graphService = graphService;
    }
    [HttpGet(Name = "Graph_Measurements")]
    public ActionResult<GraphData> GetGraphMeasurements([FromBody]GraphMeasurementRequest measurement)
    {
      return _graphService.GetGraphData(measurement);

    }
  }
}
