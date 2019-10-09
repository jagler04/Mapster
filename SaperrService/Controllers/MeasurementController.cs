using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Saperr.Models;
using Saperr.Services;
using System.Collections.Generic;

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

    [HttpGet(Name = "Get_Measurement")]
    public ActionResult<List<Measurement>> GetMeasurements(string areaId, string measurementTypeId)
    {
      return _measurementService.GetMeasurements(areaId, measurementTypeId);
    }

    [HttpPost(Name = "Create_Measurement")]
    public ActionResult<Measurement> CreateMeasurement([FromBody] Measurement measurement)
    {
      return _measurementService.Create(measurement);
    }

    [HttpPut(Name = "Update_Measurement")]
    public ActionResult<Measurement> UpdateMeasurement([FromBody]Measurement measurement)
    {
      _measurementService.UpdateMeasurement(measurement); 
      return measurement;
      //var owner = _authService.GetIdFromRequest(Request);
      //if (measurement.owner != owner)
      //  return Unauthorized();

      //_measurementService.Update(measurement);
      //return measurement;
    }
    [HttpDelete(Name = "Delete_Measurement")]
    public ActionResult DeleteMeasurement([FromBody] Measurement measurement)
    {
      _measurementService.DeleteMeasurement(measurement);
      return Ok();
    }

  }

}
