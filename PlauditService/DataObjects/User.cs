﻿using Microsoft.Azure.Mobile.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlauditService.DataObjects
{
    public class User : EntityData
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Companyname { get; set; }
        public bool Premium { get; set; }
    }
}