namespace PlauditService.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserUpdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "CompanyName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "CompanyName");
        }
    }
}
