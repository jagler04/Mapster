using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Saperr.Models;
using Saperr.Services;

namespace Saperr.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class MeasurementController : ControllerBase
  {
    private readonly IAuthenticationService _authService;
    private readonly MeasurementService _measurementService;

    public MeasurementController(IAuthenticationService authService, MeasurementService measurementService)
    {
      _authService = authService;
      _measurementService = measurementService;
    }

    [HttpPost(Name = "Create_Measurement")]
    public ActionResult<Measurement> CreateArea([FromBody] Measurement measurement)
    {
      return _measurementService.Create(measurement);
      //var measurement = CreatedAtRoute("GetArea", new { id = measurement.Id.ToString() }, measurement);
    }
  }
}
