using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
  }
}