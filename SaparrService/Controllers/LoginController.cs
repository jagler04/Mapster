using Mapster.Models;
using Mapster.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Mapster.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class LoginController :ControllerBase
  {
    private readonly IAuthenticationService _authService;

    public LoginController( IAuthenticationService authService)
    {
      _authService = authService;
    }

    [HttpPost]
    public IActionResult Login([FromBody]User login)
    {
      IActionResult response = Unauthorized();
      var user = _authService.AuthenticateUser(login);

      if (user != null)
      {
        var tokenString = _authService.GenerateJSONWebToken(user);
        response = Ok(new { token = tokenString });
      }

      return response;
    }


  }
}
