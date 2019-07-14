using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using Microsoft.Azure.Mobile.Server;
using Microsoft.Azure.Mobile.Server.Tables;
using PlauditService.DataObjects;

namespace PlauditService.Models
{
    public class PlauditContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to alter your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        private const string connectionStringName = "Name=MS_TableConnectionString";

        public PlauditContext() : base(connectionStringName)
        {
        } 

        public DbSet<User> Users { get; set; }

        public DbSet<Area> Areas { get; set; }

        public DbSet<AreaPoint> AreaPoints { get; set; }

        public DbSet<Zone> Zones { get; set; }

        public DbSet<ZonePoint> ZonePoints { get; set; }

        public DbSet<Measurement> Measurements { get; set; }

        public DbSet<MeasurementType> MeasurementTypes { get; set; }

        public DbSet<Setting> Settings { get; set; }
        public DbSet<SettingType> SettingTypes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Add(
                new AttributeToColumnAnnotationConvention<TableColumnAttribute, string>(
                    "ServiceTableColumn", (property, attributes) => attributes.Single().ColumnType.ToString()));
        }
    }

}
