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
    private readonly MeasurementService _measurementService;

    public GraphController(IAuthenticationService authService, MeasurementService measurementService)
    {
      _authService = authService;
      _measurementService = measurementService;
    }
    [HttpGet(Name = "Graph_Measurements")]
    public ActionResult<GraphData> GetGraphMeasurements([FromBody]GraphMeasurementRequest measurement)
    {
      return null;

    }
  }
}
