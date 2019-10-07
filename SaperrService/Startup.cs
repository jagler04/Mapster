using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Saperr.Models;
using Saperr.Services;
using System.Text;

namespace Mapster
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.Configure<DatabaseSettings>(
        Configuration.GetSection(nameof(DatabaseSettings)));

      services.AddSingleton<IDatabaseSettings>(sp =>
          sp.GetRequiredService<IOptions<DatabaseSettings>>().Value);

      services.AddSingleton<UserService>();
      services.AddSingleton<AreaService>();
      services.AddSingleton<IAuthenticationService, AuthenticationService>();
      services.AddSingleton<MeasurementService>();
      services.AddSingleton<GraphService>();

      services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
          .AddJwtBearer(options =>
          {
            options.TokenValidationParameters = new TokenValidationParameters
            {
              ValidateIssuer = true,
              ValidateAudience = true,
              ValidateLifetime = true,
              ValidateIssuerSigningKey = true,
              ValidIssuer = Configuration["Jwt:Issuer"],
              ValidAudience = Configuration["Jwt:Issuer"],
              IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
            };
          });

      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
      services.AddCors(o => o.AddPolicy("CorsPolicy", builder =>
      {
        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
      }));

      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseHsts();
      }
      app.UseCors("CorsPolicy");

      app.UseSwagger();
      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = string.Empty;
      });
      app.UseHttpsRedirection();
      app.UseAuthentication();
      app.UseMvc();
    }
  }
}
