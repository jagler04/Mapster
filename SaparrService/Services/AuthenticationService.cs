using Mapster.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Mapster.Services
{
  public interface IAuthenticationService
  {
    bool IsPasswordValid(string email, string password);
    string GenerateJSONWebToken(User userInfo);
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
      if(!IsPasswordValid(login.email, login.password))
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
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.username),
                new Claim(JwtRegisteredClaimNames.Email, userInfo.email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

      var token = new JwtSecurityToken(_config["Jwt:Issuer"],
          _config["Jwt:Issuer"],
          claims,
          expires: DateTime.Now.AddMinutes(120),
          signingCredentials: credentials);

      return new JwtSecurityTokenHandler().WriteToken(token);
    }

  }
}
