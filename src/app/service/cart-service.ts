import { Injectable } from '@angular/core';
declare const Swal: any;

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
    let cart = localStorage.getItem('cart_items') ?? '[]';
    this.cart_items = JSON.parse(cart);
  }
  private cart_items: any[] = [];

  addTocart(product: any) {
    let dpl_index: number = this.cart_items.findIndex(
      (x) => x.id == product.id
    );
    if (dpl_index > -1) {
      this.cart_items[dpl_index].qty++;
    } else {
      product.qty = 1;
      product.is_select = true;
      this.cart_items.push(product);
    }

    localStorage.setItem('cart_items', JSON.stringify(this.cart_items));
  }

  getCartItem() {
    return this.cart_items;
  }

  trackById(index: number, item: any): any {
    return item.id;
  }

  increaseQty(item: any) {
    let index = this.cart_items.findIndex((x) => x.id == item.id);
    this.cart_items[index].qty++;
    localStorage.setItem('cart_item', JSON.stringify(this.cart_items));
  }

  decreaseQty(item: any) {
    if (item.qty > 1) {
      let index: number = this.cart_items.findIndex((x) => x.id == item.id);
      this.cart_items[index].qty--;
      localStorage.setItem('cart_item', JSON.stringify(this.cart_items));
    }
  }

  removeCartItem(item: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Removed it!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        let index = this.cart_items.findIndex((x) => (x.id = item.id));
        this.cart_items.splice(index, 1);
        localStorage.setItem('cart_items', JSON.stringify(this.cart_items));
      }
    });
  }

  getCartTotal() {
    let total: number = 0;
    this.cart_items.forEach((x) => {
      if (x.is_select) {
        total += x.price * x.qty;
      }
    });
    return total;
  }

  selectCartItem(item: any) {
    let index = this.cart_items.findIndex((x) => x.id == item.id);
    console.log(this.cart_items[index]);
    this.cart_items[index].is_select = !this.cart_items[index].is_select;
    localStorage.setItem('cart_item', JSON.stringify(this.cart_items));
  }
}
