using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Saperr.Models
{
  public class Measurement
  {
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string areaid { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string measurementtypeid { get; set; }

    public DateTime dateadded { get; set; }
    public string measurement { get; set; }
  }

  public class MeasurementType
  {
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    public string measurementname { get; set; }
    public string units { get; set; }
  }
}
