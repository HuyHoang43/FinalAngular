using System.ComponentModel.DataAnnotations;

namespace ProductAPI.Model
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Describe { get; set; }
        [Required]
        public double Price { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}
