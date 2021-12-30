using Microsoft.EntityFrameworkCore;
using ProductAPI.Model;

namespace ProductAPI.Data
{
    public class ProductAPIDbContext : DbContext
    {
        public ProductAPIDbContext(DbContextOptions<ProductAPIDbContext> options)
            : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}
