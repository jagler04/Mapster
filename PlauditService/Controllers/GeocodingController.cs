using System.Collections.ObjectModel;
using System.Web.Http;
using Microsoft.Azure.Mobile.Server.Config;
using PlauditService.Models;
using PlauditService.Services;

namespace PlauditService.Controllers
{
    [MobileAppController]
    public class GeocodingController : ApiController
    {

        public string Get(string searchAddress)
        {
            var geoService = new GeocodingService();
            return Newtonsoft.Json.JsonConvert.SerializeObject(geoService.GetPlacesPredictionsAsync(searchAddress).Result);
        }
    }
}
