using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Saperr.Models;
using Saperr.Services;

namespace Saperr.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class UserController : ControllerBase
  {
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
      _userService = userService;
    }

    [HttpGet("{id:length(24)}", Name = "Get_User")]
    public ActionResult<User> Get(string id)
    {
      var user = _userService.Get(id);

      if (user == null)
      {
        return BadRequest();
      }

      return user;
    }

    [HttpPost(Name = "Create_User")]
    public ActionResult<User> Create([FromBody] User user)
    {
      var hashedPass = PasswordService.GenerateSaltAndHash(user.password);
      user.password = hashedPass;
      user.premium = true;
      var current = _userService.Create(user);
      return CreatedAtRoute("Get_User", new { id = user.Id.ToString() }, user);
    }

    // PUT api/values/5
    [HttpPut("{id}", Name = "Update_User")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}", Name = "Delete_User")]
    public void Delete(int id)
    {
    }
  }
}
