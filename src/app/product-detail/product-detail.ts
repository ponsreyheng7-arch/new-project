import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart-service';
import { CurrencyPipe } from "@angular/common";

declare const axios: any;
declare const $: any;

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  constructor(private route: ActivatedRoute) {}
  product:any={};
  ngOnInit(): void {
    const product_id: string | null =
      this.route.snapshot.queryParamMap.get('product_id');
      let ng_this=this;
      $.LoadingOverlay("show");
      axios.get(`https://fakestoreapi.com/products/${product_id}`)
      .then(function(response:any){
        ng_this.product=response.data
        console.log(ng_this.product)
        $.LoadingOverlay("hide");
      })
      .catch(function(error:any){
        console.log('proId:', product_id);
      })
    
  }
}

