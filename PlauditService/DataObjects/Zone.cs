using Microsoft.Azure.Mobile.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlauditService.DataObjects
{
    public class Zone : EntityData
    {
        public string UserId { get; set; }
        public string ZoneName { get; set; }
        public string AreaId { get; set; }

        public virtual Area Area { get; set; }
    }
}