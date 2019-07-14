using Microsoft.Azure.Mobile.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlauditService.DataObjects
{
    public class Measurement : EntityData
    {
        public float MeasurementReading { get; set; }
        public string MeasurementTypeId { get; set; }
        public string ZoneId { get; set; }
    }
}