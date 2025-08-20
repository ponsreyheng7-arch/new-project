import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet ,RouterLink} from '@angular/router';
 //import { Slide } from './slide/slide';
 //import { ProductCard } from './product-card/product-card';
import { Footer } from './footer/footer';
import { TokhrPipe } from './ustokhr/khr-pipe';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { CartService } from './service/cart-service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,Footer,TokhrPipe,Cart,RouterLink,Contact,CurrencyPipe,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  // cart_items: any[] = [];
  //   ngOnInit() {
  //   let cart = localStorage.getItem('cart_items') ?? '[]';
  //   this.cart_items = JSON.parse(cart);
  // }
  constructor(public CartService: CartService){
    
  }

}
