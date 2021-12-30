using ProductAPI.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProductAPI.Repository
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAll();
        Task<Product> GetById(int id);
        Task<Product> Create(Product product);
        Task<Product> Update(Product product);
        Task<Product> Delete(Product product);
    }
}
