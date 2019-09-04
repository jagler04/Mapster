using Microsoft.AspNetCore.Mvc;
using Saperr.Models;
using Saperr.Services;

namespace Saperr.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class LoginController : ControllerBase
  {
    private readonly IAuthenticationService _authService;

    public LoginController(IAuthenticationService authService)
    {
      _authService = authService;
    }

    [HttpPost(Name = "Login")]
    public ActionResult<string> Login([FromBody]User login)
    {
      var user = _authService.AuthenticateUser(login);
      if (user != null)
      {
        var tokenString = _authService.GenerateJSONWebToken(user);
        return Ok(new { token = tokenString });
      }

      return Unauthorized();
    }
  }
}
