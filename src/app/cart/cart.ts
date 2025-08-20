import { Component } from '@angular/core';
import { CommonModule, NgIf, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../service/cart-service';
import { JsonPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  imports: [JsonPipe,CommonModule,FormsModule, RouterLink, NgIf, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public CartService: CartService){


  }
}