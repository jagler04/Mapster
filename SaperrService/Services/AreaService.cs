using Mapster.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mapster.Services
{
  public class AreaService
  {
    private readonly IMongoCollection<Area> _areas;

    public AreaService(IDatabaseSettings settings)
    {
      var client = new MongoClient(settings.ConnectionString);
      var database = client.GetDatabase(settings.DatabaseName);
      _areas = database.GetCollection<Area>("Areas");
    }

    public List<Area> Get() =>
           _areas.Find(Area => true).ToList();

    public Area Get(string id) =>
        _areas.Find<Area>(Area => Area.Id == id).FirstOrDefault();

    public List<Area> GetByOwner(string id) =>
        _areas.Find<Area>(Area => Area.owner == id).ToList();

    public Area Create(Area User)
    {
      _areas.InsertOne(User);
      return User;
    }

    public void Update(Area areaIn) =>
        _areas.ReplaceOne(Area => Area.Id == areaIn.Id, areaIn);
  }
}
