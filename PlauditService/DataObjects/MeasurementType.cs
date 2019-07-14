using Microsoft.Azure.Mobile.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlauditService.DataObjects
{
    public class MeasurementType : EntityData
    {
        public string UserId { get; set; }
        public string Name { get; set; }
        public string Units { get; set; }
    }
}