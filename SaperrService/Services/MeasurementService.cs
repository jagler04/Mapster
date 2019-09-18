using MongoDB.Driver;
using Saperr.Models;
using System.Collections.Generic;

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

    public Measurement Create(Measurement measurement)
    {
      _measurements.InsertOne(measurement);
      return measurement;
    }

    public MeasurementType Create(MeasurementType measurementType)
    {
      _measurementTypes.InsertOne(measurementType);
      return measurementType;
    }
    public List<MeasurementType> GetByOwner(string id) => _measurementTypes.Find(Mtype => Mtype.owner == id).ToList();

    public void Update(MeasurementType measurementType) => _measurementTypes.ReplaceOne(Mtype => Mtype.Id == measurementType.Id, measurementType);
  }
}
