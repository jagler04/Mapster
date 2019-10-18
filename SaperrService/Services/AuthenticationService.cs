using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Saperr.Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Saperr.Services
{
  public interface IAuthenticationService
  {
    bool IsPasswordValid(string email, string password);

    string GenerateJSONWebToken(User userInfo);

    string GetIdFromRequest(HttpRequest request);

    User AuthenticateUser(User login);
  }

  public class AuthenticationService : IAuthenticationService
  {
    private readonly UserService _userService;
    private readonly IConfiguration _config;

    public AuthenticationService(IConfiguration config, UserService userService)
    {
      _userService = userService;
      _config = config;
    }

    public User AuthenticateUser(User login)
    {
      if (!IsPasswordValid(login.email, login.password))
      {
        return null;
      }
      return _userService.GetByEmail(login.email);
    }

    public bool IsPasswordValid(string email, string password)
    {
      var user = _userService.GetByEmail(email);
      if (user == null)
        return false;

      return PasswordService.CheckPassword(password, user.password);
    }

    public string GenerateJSONWebToken(User userInfo)
    {
      var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
      var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

      var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.Id),
                new Claim(JwtRegisteredClaimNames.Email, userInfo.email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("UserData", userInfo.premium.ToString())
            };

      var token = new JwtSecurityToken(_config["Jwt:Issuer"],
          _config["Jwt:Issuer"],
          claims,
          expires: DateTime.Now.AddMinutes(120),
          signingCredentials: credentials);

      return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public string GetIdFromRequest(HttpRequest request)
    {
      try
      {
        string jwt = request.Headers["Authorization"].ToString().Split(' ')[1];
        var handler = new JwtSecurityTokenHandler();
        var token = handler.ReadJwtToken(jwt);
        return token.Subject;
      }
      catch (Exception e)
      {
        return null;
      }
    }
  }
}
