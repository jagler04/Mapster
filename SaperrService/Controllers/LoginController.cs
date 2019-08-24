using Mapster.Models;
using Mapster.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

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
    public ActionResult<string> Login([FromBody]User login)
    {
      var id = _authService.GetIdFromRequest(Request);
      ActionResult response = Unauthorized();
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
