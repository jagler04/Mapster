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
  public class AreaController : ControllerBase
  {
    private readonly UserService _userService;
    private readonly AreaService _areaService;
    private readonly IAuthenticationService _authService;

    public AreaController(UserService userService, AreaService areaService, IAuthenticationService authService)
    {
      _userService = userService;
      _areaService = areaService;
      _authService = authService;
    }

    [HttpGet(Name = "Get_Areas")]
    public ActionResult<List<Area>> GetAllAreas() =>
        _areaService.Get();

    [HttpGet("{id:length(24)}", Name = "Get_Area")]
    public ActionResult<Area> GetArea(string id)
    {
      var area = _areaService.Get(id);
      if (area != null)
      {
        return Ok(area);
      }
      return BadRequest();
    }

    [HttpPost(Name = "Create_Area")]
    public ActionResult<Area> CreateArea([FromBody] Area area)
    {
      var owner = _authService.GetIdFromRequest(Request);
      area.owner = owner;

      return _areaService.Create(area);
    }

    [HttpPut(Name = "Update_Area")]
    public ActionResult<Area> UpdateArea([FromBody]Area area)
    {
      var owner = _authService.GetIdFromRequest(Request);
      if (area.owner != owner)
        return Unauthorized();

      _areaService.Update(area);
      return area;
    }
  }
}
