﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TheProject.BoundryPolygons
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class TheProjectEntities : DbContext
    {
        public TheProjectEntities()
            : base("name=TheProjectEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Audit> Audits { get; set; }
        public virtual DbSet<BoundryPolygon> BoundryPolygons { get; set; }
        public virtual DbSet<Building> Buildings { get; set; }
        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<DeedsInfo> DeedsInfoes { get; set; }
        public virtual DbSet<ErrorLog> ErrorLogs { get; set; }
        public virtual DbSet<Facility> Facilities { get; set; }
        public virtual DbSet<GPSCoordinate> GPSCoordinates { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Person> People { get; set; }
        public virtual DbSet<Portfolio> Portfolios { get; set; }
        public virtual DbSet<User> Users { get; set; }
    }
}
