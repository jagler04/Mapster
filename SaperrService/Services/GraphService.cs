using MongoDB.Driver;
using Saperr.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Saperr.Services
{
  public class GraphService
  {
    private readonly IMongoCollection<Measurement> _measurements;
    private readonly IMongoCollection<MeasurementType> _measurementTypes;
    private readonly AreaService _areaService;
    public GraphService(IDatabaseSettings settings, AreaService areaService)
    {
      var client = new MongoClient(settings.ConnectionString);
      var database = client.GetDatabase(settings.DatabaseName);
      _measurements = database.GetCollection<Measurement>("Measurements");
      _measurementTypes = database.GetCollection<MeasurementType>("MeasurementTypes");
      _areaService = areaService;
    }
    public GraphData GetGraphData(GraphMeasurementRequest measurementRequest)
    {
      var data = _measurements.Find(m => m.measurementtypeid == measurementRequest.MeasurementTypeId
                        && m.dateadded >= measurementRequest.StartDate
                        && m.dateadded <= measurementRequest.EndDate
                        && measurementRequest.Areas.Contains(m.areaid)).ToList();
      var returnData = new GraphData() { Measurements = new List<GraphDataObject>(), Labels = new List<string>() };
      var areaGraphDataObject = new Dictionary<string, GraphDataObject>();
      foreach (var area in measurementRequest.Areas)
      {
        if (!areaGraphDataObject.ContainsKey(area))
        {
          areaGraphDataObject.Add(area, new GraphDataObject() { Data = new List<double>(), Label = _areaService.Get(area).areaname });
        }
      }
      switch (measurementRequest.GroupBy)
      {
        case "Hour":
          var currentHour = new DateTime(measurementRequest.StartDate.Year, measurementRequest.StartDate.Month, measurementRequest.StartDate.Day, measurementRequest.StartDate.Hour, 0, 0); ;
          measurementRequest.EndDate = new DateTime(measurementRequest.EndDate.Year, measurementRequest.EndDate.Month, measurementRequest.EndDate.Day, measurementRequest.EndDate.Hour, 59, 59);
          while (currentHour < measurementRequest.EndDate)
          {
            var prevHour = currentHour;
            currentHour = currentHour.AddHours(1);
            returnData.Labels.Add(currentHour.ToString("mm/dd/yyyy h tt"));
            if (currentHour < measurementRequest.EndDate)
            {
              var dataGrouped = (from d in data.AsQueryable()
                                 where d.dateadded >= prevHour && d.dateadded < currentHour
                                 group d by d.areaid into da
                                 select new
                                 {
                                   areaId = da.Key,
                                   measurementSum = da.Sum(c => c.measurement)
                                 }).ToList();

              foreach (var itm in dataGrouped)
              {
                areaGraphDataObject[itm.areaId].Data.Add(itm.measurementSum);
              }
            }
            else
            {
              var dataGrouped = (from d in data.AsQueryable()
                                 where d.dateadded >= prevHour
                                 group d by d.areaid into da
                                 select new
                                 {
                                   areaId = da.Key,
                                   measurementSum = da.Sum(c => c.measurement)
                                 }).ToList();

              foreach (var itm in dataGrouped)
              {
                areaGraphDataObject[itm.areaId].Data.Add(itm.measurementSum);
              }
            }
          }
          break;
        case "Day":
          var currentDay = new DateTime(measurementRequest.StartDate.Year, measurementRequest.StartDate.Month, measurementRequest.StartDate.Day, 0, 0, 0);
          measurementRequest.EndDate = new DateTime(measurementRequest.EndDate.Year, measurementRequest.EndDate.Month,
                                                      measurementRequest.EndDate.Day, 23, 59, 59);
          while (currentDay < measurementRequest.EndDate)
          {
            var prevDay = currentDay;
            currentDay = currentDay.AddDays(1);
            returnData.Labels.Add(currentDay.ToString("mm/dd/yyyy"));

            if (currentDay < measurementRequest.EndDate)
            {
              var dataGrouped = (from d in data.AsQueryable()
                                 where d.dateadded >= prevDay && d.dateadded < currentDay
                                 group d by d.areaid into da
                                 select new
                                 {
                                   areaId = da.Key,
                                   measurementSum = da.Sum(c => c.measurement)
                                 }).ToList();

              foreach (var itm in dataGrouped)
              {
                areaGraphDataObject[itm.areaId].Data.Add(itm.measurementSum);
              }
            }
            else
            {
              var dataGrouped = (from d in data.AsQueryable()
                                 where d.dateadded >= prevDay
                                 group d by d.areaid into da
                                 select new
                                 {
                                   areaId = da.Key,
                                   measurementSum = da.Sum(c => c.measurement)
                                 }).ToList();

              foreach (var itm in dataGrouped)
              {
                areaGraphDataObject[itm.areaId].Data.Add(itm.measurementSum);
              }
            }
          }
          break;
        case "Week":
          //Getting the starting date to monday since it is the start of the week
          var currentWeek = measurementRequest.StartDate;
          while (measurementRequest.StartDate.DayOfWeek != DayOfWeek.Monday)
          {
            currentWeek = currentWeek.AddDays(-1);
          }
          //Getting the end day to a sunday, since it is the end of a week
          measurementRequest.EndDate = new DateTime(measurementRequest.EndDate.Year, measurementRequest.EndDate.Month, measurementRequest.EndDate.Day, 23, 59, 59);
          while (measurementRequest.EndDate.DayOfWeek != DayOfWeek.Sunday)
          {
            measurementRequest.EndDate.AddDays(1);
          }

          while (currentWeek < measurementRequest.EndDate)
          {
            var prevWeek = currentWeek;
            currentWeek = currentWeek.AddDays(7);
            returnData.Labels.Add($"Week Starting {currentWeek.ToShortDateString()}");
            if (currentWeek < measurementRequest.EndDate)
            {
              var dataGrouped = (from d in data.AsQueryable()
                                 where d.dateadded >= prevWeek && d.dateadded < currentWeek
                                 group d by d.areaid into da
                                 select new
                                 {
                                   areaId = da.Key,
                                   measurementSum = da.Sum(c => c.measurement)
                                 }).ToList();

              foreach (var itm in dataGrouped)
              {
                areaGraphDataObject[itm.areaId].Data.Add(itm.measurementSum);
              }

            }
            else
            {
              var dataGrouped = (from d in data.AsQueryable()
                                 where d.dateadded >= prevWeek
                                 group d by d.areaid into da
                                 select new
                                 {
                                   areaId = da.Key,
                                   measurementSum = da.Sum(c => c.measurement)
                                 }).ToList();

              foreach (var itm in dataGrouped)
              {
                areaGraphDataObject[itm.areaId].Data.Add(itm.measurementSum);
              }
            }
          }
          break;
        case "Month":
          var currentMonth = new DateTime(measurementRequest.StartDate.Year, measurementRequest.StartDate.Month, 1, 0, 0, 0);
          measurementRequest.EndDate = new DateTime(measurementRequest.EndDate.Year, measurementRequest.EndDate.Month,
                                                      DateTime.DaysInMonth(measurementRequest.EndDate.Year, measurementRequest.EndDate.Month), 23, 59, 59);
          while (currentMonth < measurementRequest.EndDate)
          {
            var prevMonth = currentMonth;
            currentMonth = currentMonth.AddMonths(1);
            returnData.Labels.Add(currentMonth.ToString("mm/yyyy"));
            if (currentMonth < measurementRequest.EndDate)
            {
              var dataGrouped = (from d in data.AsQueryable()
                                 where d.dateadded >= prevMonth && d.dateadded < currentMonth
                                 group d by d.areaid into da
                                 select new
                                 {
                                   areaId = da.Key,
                                   measurementSum = da.Sum(c => c.measurement)
                                 }).ToList();

              foreach (var itm in dataGrouped)
              {
                areaGraphDataObject[itm.areaId].Data.Add(itm.measurementSum);
              }
            }
            else
            {
              var dataGrouped = (from d in data.AsQueryable()
                                 where d.dateadded >= prevMonth
                                 group d by d.areaid into da
                                 select new
                                 {
                                   areaId = da.Key,
                                   measurementSum = da.Sum(c => c.measurement)
                                 }).ToList();

              foreach (var itm in dataGrouped)
              {
                areaGraphDataObject[itm.areaId].Data.Add(itm.measurementSum);
              }
            }
          }
          break;
        case "Year":
          var currentYear = new DateTime(measurementRequest.StartDate.Year, 1, 1, 0, 0, 0);
          measurementRequest.EndDate = new DateTime(measurementRequest.EndDate.Year, 12, 31, 23, 59, 59);
          returnData.Labels.Add(currentYear.ToString("yyyy"));
          while (currentYear < measurementRequest.EndDate)
          {
            var prevYear = currentYear;
            currentYear = currentYear.AddMonths(1);
            if (currentYear < measurementRequest.EndDate)
            {
              var dataGrouped = (from d in data.AsQueryable()
                                 where d.dateadded >= prevYear && d.dateadded < currentYear
                                 group d by d.areaid into da
                                 select new
                                 {
                                   areaId = da.Key,
                                   measurementSum = da.Sum(c => c.measurement)
                                 }).ToList();

              foreach (var itm in dataGrouped)
              {
                areaGraphDataObject[itm.areaId].Data.Add(itm.measurementSum);
              }
            }
            else
            {
              var dataGrouped = (from d in data.AsQueryable()
                                 where d.dateadded >= prevYear
                                 group d by d.areaid into da
                                 select new
                                 {
                                   areaId = da.Key,
                                   measurementSum = da.Sum(c => c.measurement)
                                 }).ToList();

              foreach (var itm in dataGrouped)
              {
                areaGraphDataObject[itm.areaId].Data.Add(itm.measurementSum);
              }
            }
          }
          break;
      }
      returnData.Measurements.AddRange(areaGraphDataObject.Select(a => a.Value)
        );
      return returnData;
    }
  }
}
