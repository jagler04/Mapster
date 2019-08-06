using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Mapster.Models
{
  public class Area
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    [BsonRepresentation(BsonType.ObjectId)]
    public string owner { get; set; }
    public string areaname { get; set; }
    public List<Points> points { get; set; }
  }

  public class Points
  {
    public int position { get; set; }
    public Location loc { get; set; }
  }

  public class Location
  {
    public double lat { get; set; }
    [BsonElement("long")]
    public double longitude { get; set; }
  }
}
