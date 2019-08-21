using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mapster.Models;
using Mapster.Services;
using Microsoft.AspNetCore.Mvc;

namespace Mapster.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AreaController : ControllerBase
  {
    private readonly UserService _userService;
    private readonly AreaService _areaService;

    public AreaController(UserService userService, AreaService areaService)
    {
      _userService = userService;
      _areaService = areaService;
    }

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
    public ActionResult<Area> Create([FromBody] Area area)
    {
      var user = _userService.Get(area.owner);
      if (user != null)
      {
        _areaService.Create(area);
        return CreatedAtRoute("GetArea", new { id = area.Id.ToString() }, area);
      }
      return NotFound();
    }
  }
}
