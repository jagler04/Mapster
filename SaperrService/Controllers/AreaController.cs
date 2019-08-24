using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mapster.Models;
using Mapster.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Mapster.Controllers
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

    [HttpGet]
    [Route("GetAll")]
    public ActionResult<List<Area>> GetAll() =>
        _areaService.Get();

    [HttpGet("{id:length(24)}", Name = "GetArea")]
    public ActionResult<Area> Get(string id)
    {
      var area = _areaService.Get(id);

      if (area == null)
      {
        return NotFound();
      }

      return area;
    }

    [HttpPost]
    [Route("Create")]
    public ActionResult<Area> Create([FromBody] Area area)
    {
      var owner = _authService.GetIdFromRequest(Request);
      area.owner = owner;

      _areaService.Create(area);
      return CreatedAtRoute("GetArea", new { id = area.Id.ToString() }, area);
    }
  }
}
