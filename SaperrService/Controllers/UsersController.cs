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
  public class UsersController : ControllerBase
  {
    private readonly UserService _userService;

    public UsersController(UserService userService)
    {
      _userService = userService;
    }

    [Authorize]
    [HttpGet]
    public ActionResult<List<User>> Get() =>
            _userService.Get();

    [HttpGet("{id:length(24)}", Name = "GetUser")]
    public ActionResult<User> Get(string id)
    {
      var user = _userService.Get(id);

      if (user == null)
      {
        return NotFound();
      }

      return user;
    }
    // POST api/values
    [HttpPost]
    public ActionResult<User> Create([FromBody] User user)
    {
      var hashedPass = PasswordService.GenerateSaltAndHash(user.password);
      user.password = hashedPass;
      user.premium = true;
      var current = _userService.Create(user);
      return CreatedAtRoute("GetUser", new { id = user.Id.ToString() }, user);
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
