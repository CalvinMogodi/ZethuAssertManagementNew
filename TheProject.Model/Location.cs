using System;
using System.Collections.Generic;

namespace TheProject.Model
{
    public class Location
    {
        public int Id { get; set; }

        public string StreetAddress { get; set; }

        public string Suburb { get; set; }

        public string Province { get; set; }

        public string LocalMunicipality { get; set; }

        public string Region { get; set; }

        public virtual List<BoundryPolygon> BoundryPolygon { get; set; }

        public virtual GPSCoordinate GPSCoordinates { get; set; }

        //public DateTime CreatedDate { get; set; }

        //public DateTime? ModifiedDate { get; set; }

        //public int CreatedUserId { get; set; }

        //public int? ModifiedUserId { get; set; }
    }
}