using Microsoft.Azure.Mobile.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlauditService.DataObjects
{
    public class Setting: EntityData
    {
        public string UserId { get; set; }
        public string SettingName { get; set; }
        public int SettingTypeId { get; set; }
        public int Value { get; set; }
    }
}