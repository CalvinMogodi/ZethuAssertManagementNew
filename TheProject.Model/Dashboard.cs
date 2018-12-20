﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheProject.Model
{
    public class Dashboard
    {
        public int PropertiesCount { get; set; }

        public string PropertiesPercentage { get; set; }

        public decimal? NoOfImprovements { get; set; }

        public double? ImprovementsSize { get; set; }

        public string OccupationStatus { get; set; }

        public string VacantPercentage { get; set; }

        public List<DataPoint> DataPoints { get; set; }
    }
}
