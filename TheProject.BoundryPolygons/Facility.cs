//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Facility
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Facility()
        {
            this.Buildings = new HashSet<Building>();
        }
    
        public int Id { get; set; }
        public string Name { get; set; }
        public string ClientCode { get; set; }
        public string SettlementType { get; set; }
        public string Zoning { get; set; }
        public string IDPicture { get; set; }
        public string Status { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public System.DateTime ModifiedDate { get; set; }
        public int CreatedUserId { get; set; }
        public Nullable<int> ModifiedUserId { get; set; }
        public Nullable<int> DeedsInfo_Id { get; set; }
        public Nullable<int> Location_Id { get; set; }
        public Nullable<int> Portfolio_Id { get; set; }
        public Nullable<int> ResposiblePerson_Id { get; set; }
        public Nullable<int> User_Id { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Building> Buildings { get; set; }
        public virtual DeedsInfo DeedsInfo { get; set; }
        public virtual Location Location { get; set; }
        public virtual Person Person { get; set; }
        public virtual Portfolio Portfolio { get; set; }
        public virtual User User { get; set; }
    }
}
