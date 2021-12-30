import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductApiService } from 'src/app/product-api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  product:Product = {
    Id: 0,
    Name: '',
    Describe: '',
    Price: 0,
    Quantity: 0,
  };
  submitted = false;

  constructor(private productService: ProductApiService) {}

  ngOnInit(): void {}

  createProduct(): void {
    const data = {
      Id: this.product.Id,
      Name: this.product.Name,
      Description: this.product.Describe,
      Price: this.product.Price,
      Quantity: this.product.Quantity,
    };

    this.productService.create(data).subscribe(
      (res) => {
        console.log(res);
        this.submitted = true;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      Id: 0,
      Name: '',
      Describe: '',
      Price: 0,
      Quantity: 0,
    };
  }
}
