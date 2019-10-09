using MongoDB.Driver;
using Saperr.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Saperr.Services
{
  public class MeasurementService
  {
    private readonly IMongoCollection<Measurement> _measurements;
    private readonly IMongoCollection<MeasurementType> _measurementTypes;
    private readonly AreaService _areaService;
    public MeasurementService(IDatabaseSettings settings, AreaService areaService)
    {
      var client = new MongoClient(settings.ConnectionString);
      var database = client.GetDatabase(settings.DatabaseName);
      _measurements = database.GetCollection<Measurement>("Measurements");
      _measurementTypes = database.GetCollection<MeasurementType>("MeasurementTypes");
      _areaService = areaService;
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

    public void UpdateMeasurementType(MeasurementType measurementType) => _measurementTypes.ReplaceOne(Mtype => Mtype.Id == measurementType.Id, measurementType);
    public void UpdateMeasurement(Measurement measurement) => _measurements.ReplaceOne(m => m.Id == measurement.Id, measurement);
    public void DeleteMeasurement(Measurement measurement) => _measurements.DeleteOne(m => m.Id == measurement.Id);

    public List<Measurement> GetMeasurements(string areaId, string measurementTypeId) => _measurements.Find(m => m.areaid == areaId && m.measurementtypeid == measurementTypeId).ToList();

  }
}
