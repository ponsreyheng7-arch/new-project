import { Component } from '@angular/core';
import { Slide } from '../slide/slide';
import { ProductCard } from '../product-card/product-card';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';

@Component({
  selector: 'app-home',
  imports: [Slide,ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  constructor(public Cartservice: CartService,public productService:ProductService){

  }
  
  
  
  addTocart(product:any):void {
    this.Cartservice.addTocart(product)
    
  }





}
