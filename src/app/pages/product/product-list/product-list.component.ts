import { Component, OnInit } from '@angular/core';
import { Product } from '@/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [
    new Product(1, "Product 001"),
    new Product(2, "Product 002"),
    new Product(3, "Product 003"),
    new Product(4, "Product 004"),
    new Product(5, "Product 005"),
    new Product(6, "Product 006"),
    new Product(7, "Product 007"),
    new Product(8, "Product 008")
  ];

  constructor() { }

  ngOnInit() {
  }

}
