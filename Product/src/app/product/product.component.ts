import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../Product';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any;
  currentProduct : Product ={
    Id: 0,
    Name: '',
    Describe: '',
    Price: 0,
    Quantity: 0,
  };
  mess = '';
  constructor(
    public product: ProductApiService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.showProducts();
    this.mess = '';
    this.getProduct(this.route.snapshot.params['Id']);
  }

  showProducts(): void {
    this.product.getList().subscribe(
      (products) => {
        this.products = products;
        console.log(products);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProduct(id: number): void {
    this.product.getById(id).subscribe(
      (product) => {
        this.currentProduct = product;
        console.log(product);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateProduct(): void {
    this.product
      .update(this.currentProduct.Id, this.currentProduct)
      .subscribe(
        (response) => {
          console.log(response);
          this.mess = 'The product was updated!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteProduct(): void {
    this.product.delete(this.currentProduct.Id).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/products']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
