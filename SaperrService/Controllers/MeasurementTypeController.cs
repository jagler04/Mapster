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
  public class MeasurementTypeController : ControllerBase
  {
    private readonly IAuthenticationService _authService;
    private readonly MeasurementService _measurementService;

    public MeasurementTypeController(IAuthenticationService authService, MeasurementService measurementService)
    {
      _authService = authService;
      _measurementService = measurementService;
    }

    [HttpGet(Name = "Get_MeasurementTypes")]
    public ActionResult<List<MeasurementType>> GetMeasurementTypes()
    {
      var owner = _authService.GetIdFromRequest(Request);
      return _measurementService.GetByOwner(owner);

    }

    [HttpPost(Name = "Create_MeasurementType")]
    public ActionResult<MeasurementType> CreateMeasurementType([FromBody] MeasurementType measurementType)
    {
      var owner = _authService.GetIdFromRequest(Request);
      measurementType.owner = owner;
      return _measurementService.Create(measurementType);
    }

    [HttpPut(Name = "Update_MeasurementType")]
    public ActionResult<MeasurementType> UpdateMeasurementType([FromBody]MeasurementType measurementType)
    {
      var owner = _authService.GetIdFromRequest(Request);
      if (measurementType.owner != owner)
        return Unauthorized();

      _measurementService.Update(measurementType);
      return measurementType;
    }

  }
}
