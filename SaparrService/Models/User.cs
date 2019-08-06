using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Mapster.Models
{
  public class User
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string username { get; set; }
    public string email { get; set; }
    public string password { get; set; }
    public string companyname { get; set; }
    public bool premium { get; set; }
  }
}
