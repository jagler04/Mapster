using Microsoft.Azure.Mobile.Server;

namespace PlauditService.DataObjects
{
    public class Area : EntityData
    {
        public string UserId { get; set; }
        public string AreaName { get; set; }
    }
}