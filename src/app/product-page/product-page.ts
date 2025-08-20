import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})

export class ProductPage {
  constructor(public Cartservice: CartService,public productService:ProductService){
  }
  addTocart(product:any):void {
    this.Cartservice.addTocart(product)
    
  }

}
