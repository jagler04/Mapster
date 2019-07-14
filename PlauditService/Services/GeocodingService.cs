using Newtonsoft.Json;
using PlauditService.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace PlauditService.Services
{
    public class GeocodingService
    {
        private const string GooglePlacesApiAutoCompletePath = "https://maps.googleapis.com/maps/api/place/autocomplete/json?key={0}&input={1}&components=country:us"; //Adding country:us limits results to us
        private const string GooglePlacesApiKey = "AIzaSyCU2867Rocotglq5fwvzEQnOJI6GqXCmSU";

        private static HttpClient _httpClientInstance;
        public static HttpClient HttpClientInstance => _httpClientInstance ?? (_httpClientInstance = new HttpClient());

        private ObservableCollection<AddressInfo> _addresses = new ObservableCollection<AddressInfo>();

        public GeocodingService() { }

        public async Task<ObservableCollection<AddressInfo>> GetPlacesPredictionsAsync(string searchAddress)
        {

            // TODO: Add throttle logic, Google begins denying requests if too many are made in a short amount of time

            CancellationToken cancellationToken = new CancellationTokenSource(TimeSpan.FromMinutes(2)).Token;

            using (HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, string.Format(GooglePlacesApiAutoCompletePath, GooglePlacesApiKey, WebUtility.UrlEncode(searchAddress))))
            { //Be sure to UrlEncode the search term they enter

                using (HttpResponseMessage message = await HttpClientInstance.SendAsync(request, HttpCompletionOption.ResponseContentRead, cancellationToken).ConfigureAwait(false))
                {
                    if (message.IsSuccessStatusCode)
                    {
                        string json = await message.Content.ReadAsStringAsync().ConfigureAwait(false);

                        PlacesLocationPredictions predictionList = await Task.Run(() => JsonConvert.DeserializeObject<PlacesLocationPredictions>(json)).ConfigureAwait(false);

                        if (predictionList.Status == "OK")
                        {

                            _addresses.Clear();

                            if (predictionList.Predictions.Count > 0)
                            {
                                foreach (Prediction prediction in predictionList.Predictions)
                                {
                                    _addresses.Add(new AddressInfo
                                    {
                                        Address = prediction.Description
                                    });
                                }
                            }
                            return _addresses;
                        }
                        else if (predictionList.Status == "ZERO_RESULTS")
                        {
                            return null;
                        }
                        else
                        {
                            throw new Exception(predictionList.Status);
                        }
                    }
                    return null;
                }
            }
        }

    }
}