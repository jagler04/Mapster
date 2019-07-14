using Microsoft.Azure.Mobile.Server.Config;
using Microsoft.Azure.Mobile.Server.Login;
using PlauditService.DataObjects;
using PlauditService.Models;
using PlauditService.Services;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web;
using System.Web.Http;

namespace PlauditService.Controllers
{
    [MobileAppController]
    public class AuthController : ApiController
    {
        public HttpResponseMessage Post([FromBody]User user)
        {
            // return error if password is not correct
            if (!this.IsPasswordValid(user.Email, user.Password))
            {
                return this.Request.CreateResponse(HttpStatusCode.Unauthorized, new
                {
                    Token = "",
                    user.Email,
                    Id = "",
                    Authenticated = false,
                    user.Premium
                });
            }

            JwtSecurityToken token = this.GetAuthenticationTokenForUser(user.Email);
            using (var context = new PlauditContext())
            {
                var dbUser = context.Users.AsQueryable().FirstOrDefault(x => x.Email == user.Email);
                return this.Request.CreateResponse(HttpStatusCode.OK, new
                {
                    Token = token.RawData,
                    UserName = dbUser.Username,
                    Id = dbUser.Id,
                    Authenticated = true,
                    dbUser.Premium,
                    dbUser.Email,
                    dbUser.Companyname
                });
            }
        }

        private JwtSecurityToken GetAuthenticationTokenForUser(string email)
        {
            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, email)
            };

            var signingKey = this.GetSigningKey();
            var audience = this.GetSiteUrl(); // audience must match the url of the site
            var issuer = this.GetSiteUrl(); // audience must match the url of the site

            JwtSecurityToken token = AppServiceLoginHandler.CreateToken(
                claims,
                signingKey,
                audience,
                issuer,
                TimeSpan.FromHours(24)
                );

            return token;
        }

        private bool IsPasswordValid(string email, string password)
        {
            using (var context = new PlauditContext())
            {
                var user = context.Users.AsQueryable().FirstOrDefault(x => x.Email == email);
                if (user == null)
                    return false;

                return PasswordService.CheckPassword(password, user.Password);
            }
        }

        private string GetSiteUrl()
        {
            var settings = this.Configuration.GetMobileAppSettingsProvider().GetMobileAppSettings();

            if (string.IsNullOrEmpty(settings.HostName))
            {
                return ConfigurationManager.AppSettings["ValidAudience"];
            }
            else
            {
                return "https://" + settings.HostName + "/";
            }
        }

        private string GetSigningKey()
        {
            var settings = this.Configuration.GetMobileAppSettingsProvider().GetMobileAppSettings();

            if (string.IsNullOrEmpty(settings.HostName))
            {
                // this key is for debuggint and testing purposes only
                // this key should match the one supplied in Startup.MobileApp.cs
                return ConfigurationManager.AppSettings["SigningKey"];
            }
            else
            {
                return Environment.GetEnvironmentVariable("WEBSITE_AUTH_SIGNING_KEY");
            }
        }
    }
}