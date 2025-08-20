import { Component,EventEmitter,Input ,Output} from '@angular/core';
import { JsonPipe,CurrencyPipe } from '@angular/common';
import { TokhrPipe } from '../ustokhr/khr-pipe';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [JsonPipe,CurrencyPipe,TokhrPipe, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product:any;

  @Output() onAddTocart: any=new EventEmitter<any>();

  addTocart(product: any){
    this.onAddTocart.emit(product);
    
  }
}
