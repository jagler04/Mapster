using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Saperr.Models
{
  public class Area
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    [BsonRepresentation(BsonType.ObjectId)]
    public string owner { get; set; }
    public string areaname { get; set; }
    public List<Point> points { get; set; }
  }

  public class Point
  {
    public int position { get; set; }
    public Location loc { get; set; }
  }

  public class Location
  {
    public double latitude { get; set; }
    public double longitude { get; set; }
  }
}
