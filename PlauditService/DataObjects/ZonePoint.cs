using Microsoft.Azure.Mobile.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlauditService.DataObjects
{
    public class ZonePoint : EntityData
    {
        public int OrderNumber { get; set; }
        public string ZoneId { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    }
}