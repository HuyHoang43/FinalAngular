using Microsoft.EntityFrameworkCore;
using ProductAPI.Data;
using ProductAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductAPI.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly ProductAPIDbContext _db;

        public ProductRepository(ProductAPIDbContext db)
        {
            _db = db;
        }
        public async Task<IEnumerable<Product>> GetAll()
        {
            return await _db.Products.ToListAsync();
        }

        public async Task<Product> GetById(int id)
        {
            return await _db.Products.FindAsync(id);
        }

        public async Task<Product> Create(Product product)
        {
            await _db.Products.AddAsync(product);
            await _db.SaveChangesAsync();
            return product;
        }

        public async Task<Product> Update(Product product)
        {
            _db.Products.Update(product);
            await _db.SaveChangesAsync();
            return product;
        }

        public async Task<Product> Delete(Product product)
        {
            _db.Products.Remove(product);
            await _db.SaveChangesAsync();
            return product;
        }
    }
}
