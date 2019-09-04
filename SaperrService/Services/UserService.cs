using MongoDB.Driver;
using Saperr.Models;
using System.Collections.Generic;
using System.Linq;

namespace Saperr.Services
{
  public class UserService
  {
    private readonly IMongoCollection<User> _users;

    public UserService(IDatabaseSettings settings)
    {
      var client = new MongoClient(settings.ConnectionString);
      var database = client.GetDatabase(settings.DatabaseName);
      _users = database.GetCollection<User>("Users");
    }

    public List<User> Get() =>
           _users.Find(User => true).ToList();

    public User Get(string id) =>
        _users.Find<User>(User => User.Id == id).FirstOrDefault();

    public User GetByEmail(string email) =>
        _users.Find<User>(User => User.email == email).FirstOrDefault();

    public User Create(User User)
    {
      _users.InsertOne(User);
      return User;
    }

    public void Update(string id, User UserIn) =>
        _users.ReplaceOne(User => User.Id == id, UserIn);

    public void Remove(User UserIn) =>
        _users.DeleteOne(User => User.Id == UserIn.Id);

    public void Remove(string id) =>
        _users.DeleteOne(User => User.Id == id);
  }
}
