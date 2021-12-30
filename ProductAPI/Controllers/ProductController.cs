using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ProductAPI.Model;
using ProductAPI.Repository;
using System;
using System.Threading.Tasks;

namespace ProductAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _repos;

        public ProductController(IProductRepository repos)
        {
            _repos = repos;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var product = await _repos.GetAll();
                return Ok(product);
            }
            catch (Exception)
            {

                return StatusCode(500);
            }
        }

        [HttpGet("{id:int}", Name = "GetById")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var product = await _repos.GetById(id);
                return Ok(product);
            }
            catch (Exception)
            {

                return StatusCode(500);
            }
        }

        [HttpPost("product")]
        public async Task<IActionResult> CreateProduct(Product product)
        {
            try
            {
                await _repos.Create(product);
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Product product)
        {
            try
            {
                await _repos.Update(product);
                return NoContent();
            }
            catch (Exception)
            {

                return StatusCode(500);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(Product product)
        {
            try
            {
                await _repos.Delete(product);
                return Ok();
            }
            catch (Exception)
            {

                return StatusCode(500);
            }
        }
    }
}
