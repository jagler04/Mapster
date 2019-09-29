using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Saperr.Models
{
  public class GraphMeasurementRequest
  {
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string MeasurementTypeId {get; set;}
    public string GroupBy { get; set; }
    public List<string> Areas { get; set; }
  }
}
