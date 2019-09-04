using MongoDB.Driver;
using Saperr.Models;

namespace Saperr.Services
{
  public class MeasurementService
  {
    private readonly IMongoCollection<Measurement> _measurements;
    private readonly IMongoCollection<MeasurementType> _measurementTypes;

    public MeasurementService(IDatabaseSettings settings)
    {
      var client = new MongoClient(settings.ConnectionString);
      var database = client.GetDatabase(settings.DatabaseName);
      _measurements = database.GetCollection<Measurement>("Measurements");
      _measurementTypes = database.GetCollection<MeasurementType>("MeasurementTypes");
    }
  }
}
