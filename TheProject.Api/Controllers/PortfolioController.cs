using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TheProject.Data;
using TheProject.Model;

namespace TheProject.Api.Controllers
{
    public class PortfolioController : ApiController
    {
        //public Portfolio UpdatePortfolio(Portfolio portfolio)
        //{
        //    return new Portfolio();
        //}

        [HttpPost]
        public Portfolio AddPortfolio(Portfolio portfolio)
        {
            try
            {
                using (ApplicationUnit unit = new ApplicationUnit())
                {
                    Client client = unit.Clients.GetAll()
                        .FirstOrDefault(u => u.Id == portfolio.Client.Id);

                    Portfolio hasPortfolio = unit.Portfolios.GetAll()
                        .FirstOrDefault(u => u.Name.ToLower() == portfolio.Name.ToLower());

                    if (hasPortfolio == null)
                    {
                        portfolio.Client = client;
                        unit.Portfolios.Add(portfolio);
                        unit.SaveChanges();
                        return portfolio;
                    }
                    return null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        public Dashboard GetDashboardData()
        {

            try
            {
                using (ApplicationUnit unit = new ApplicationUnit())
                {
                    List<Facility> facilities = unit.Facilities.GetAll().ToList();
                    List<Facility> SubmittedFacilities = facilities.Where(ss => ss.Status == "Submitted").ToList();

                    int value1 = SubmittedFacilities.Count;
                    int value2 = facilities.Count;
                    decimal div = decimal.Divide(value1, value2);
                    string propertiesPercentage = String.Format("{0:.##}", (div * 100));
                    propertiesPercentage = propertiesPercentage.Replace(",", ".");
                    
                    decimal noOfImprovements = SubmittedFacilities.Sum(f => f.Buildings.Count);
                    double improvementsSize = SubmittedFacilities.Sum(f => f.Buildings.Sum(b => b.ImprovedArea));
                    double occupationStatus = SubmittedFacilities.Sum(f => f.Buildings.Sum(b => Convert.ToDouble(b.Status)));

                    decimal value3 = Convert.ToDecimal(occupationStatus);
                    decimal value4 = noOfImprovements;
                    decimal div1 = decimal.Divide(value3, value4);

                    List<DataPoint> dataPoints = GetZoning(SubmittedFacilities, facilities);

                    Dashboard dashboard = new Dashboard()
                    {
                        PropertiesCount = SubmittedFacilities.Count,
                        PropertiesPercentage = propertiesPercentage,
                        NoOfImprovements = noOfImprovements,
                        ImprovementsSize = improvementsSize,
                        OccupationStatus = String.Format("{0:.##}", (div1)),
                        VacantPercentage = GetUsagePercentage(new List<Facility>()),
                        DataPoints = dataPoints,
                    };

                    return dashboard;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private bool StringIsInList(List<string> list, string str)
        {
            foreach (var item in list)
            {
                if (!string.IsNullOrEmpty(str))
                {
                    if (item.ToLower().Trim() == str.ToLower().Trim())
                        return true;
                }

            }

            return false;
        }

        private List<DataPoint> GetZoning(List<Facility> facilities, List<Facility> allfacilities)
        {

            List<DataPoint> dataPoints = new List<DataPoint>();
            List<string> zonings = facilities.Select(d => d.Zoning).Distinct().ToList();
            List<string> sortedZonings = new List<string>();
            foreach (var item in zonings)
            {
                if (!StringIsInList(sortedZonings, item))
                    sortedZonings.Add(item);
            }
            List<Facility> newfacilities = new List<Facility>();
            foreach (var item in facilities)
            {
                if (!string.IsNullOrEmpty(item.Zoning))
                {
                    newfacilities.Add(item);
                }
            }

            List<Facility> allNewfacilities = new List<Facility>();
            foreach (var item in allfacilities)
            {
                if (!string.IsNullOrEmpty(item.Zoning))
                {
                    allNewfacilities.Add(item);
                }
            }
            foreach (var zoning in sortedZonings)
            {
                if (!string.IsNullOrEmpty(zoning))
                {
                    var zoningCount = newfacilities.Where(d => d.Zoning.ToLower().Trim() == zoning.ToLower().Trim()).ToList();
                    var totalZoningCount = allNewfacilities.Where(d => d.Zoning.ToLower().Trim() == zoning.ToLower().Trim()).ToList();
                    //string id = "#"+ zoning.ToLower().Trim().Replace(" ", "");
                    //decimal percentage = 
                    dataPoints.Add(new DataPoint(zoning, "", totalZoningCount.Count, zoningCount.Count, 0, ""));
                }
            }

            return dataPoints;
        }

        private string GetUsagePercentage(List<Facility> SubmittedFacilities)
        {
            using (ApplicationUnit unit = new ApplicationUnit())
            {
                var str = "vacant";
                var dbfacilities = unit.OriginalDatas.GetAll().Select(f => f).ToList();

                if (SubmittedFacilities.Count > 0)
                {
                    var newfacilities = new List<Model.OriginalData>();
                    foreach (var item in SubmittedFacilities)
                    {
                        var facility = dbfacilities.Where(f => f.VENUS_CODE.ToLower().Trim() == item.ClientCode.ToLower().Trim()).FirstOrDefault();

                        if (facility != null)
                        {
                            newfacilities.Add(facility);
                        }
                    }

                    dbfacilities = newfacilities;
                }
                int UsageCount = 0;
                foreach (var item in dbfacilities)
                {
                    if (item.Usage_Descrip.ToLower().Trim().Contains(str))
                    {
                        UsageCount = UsageCount + 1;
                    }
                }
                decimal div = decimal.Divide(UsageCount, dbfacilities.Count);
                string percentage = String.Format("{0:.##}", (div * 100));
                return percentage = percentage.Replace(",", ".");
            }
        }

        [HttpGet]
        public IEnumerable<Portfolio> GetPortfolios()
        {
            try
            {
                List<Portfolio> returnPortfolio = new List<Portfolio>();
                using (ApplicationUnit unit = new ApplicationUnit())
                {
                    IEnumerable<Portfolio> portfolios = unit.Portfolios.GetAll()
                        .Include(c => c.Client).Include(f => f.Facilities).ToList();
                    foreach (var portfolio in portfolios)
                    {
                        returnPortfolio.Add(new Portfolio
                        {
                            Client = portfolio.Client,
                            Id = portfolio.Id,
                            Name = portfolio.Name
                        });
                    }

                    return returnPortfolio;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
