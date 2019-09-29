using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Saperr.Models
{
  public class GraphData
  {
    public List<GraphDataObject> Measurements { get; set; }
    public List<string> Labels { get; set; }
  }
}
