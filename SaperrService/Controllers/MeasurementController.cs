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
    private readonly AreaService _areaService;

    public MeasurementController(IAuthenticationService authService, MeasurementService measurementService, AreaService areaService)
    {
      _authService = authService;
      _measurementService = measurementService;
      _areaService = areaService;

    }

    [HttpGet("{measurementTypeId}/{areaId}")]
    public ActionResult<List<Measurement>> GetMeasurements(string measurementTypeId, string areaId)
    {
      var owner = _authService.GetIdFromRequest(Request);
      var area = _areaService.Get(areaId);

      if (area.owner != owner)
        return Unauthorized();

      return _measurementService.GetByMeasurementTypeAndArea(measurementTypeId, areaId);
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
    [HttpGet(Name = "Graph_Measurements")]
    public ActionResult<GraphData> GetGraphMeasurements([FromBody]GraphMeasurementRequest measurement)
    {
      return null;

    }
  }

}
