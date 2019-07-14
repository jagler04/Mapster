using Microsoft.Azure.Mobile.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlauditService.DataObjects
{
    public class AreaPoint : EntityData
    {
        public int OrderNumber { get; set; }
        public string AreaId { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    }
}