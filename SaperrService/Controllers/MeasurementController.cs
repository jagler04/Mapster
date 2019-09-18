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
    public ActionResult<Measurement> CreateMeasurement([FromBody] Measurement measurement)
    {
      return _measurementService.Create(measurement);
    }

    [HttpPut(Name = "Update_Measurement")]
    public ActionResult<MeasurementType> UpdateMeasurement([FromBody]Measurement measurement)
    {
      return null;
      //var owner = _authService.GetIdFromRequest(Request);
      //if (measurement.owner != owner)
      //  return Unauthorized();

      //_measurementService.Update(measurement);
      //return measurement;
    }

  }
}
