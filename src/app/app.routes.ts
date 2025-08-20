import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { ProductDetail } from './product-detail/product-detail'
import { CheckoutProduct } from './checkout-product/checkout-product';
import { ProductPage } from './product-page/product-page';


export const routes: Routes = 
[
    {
        path:"",
        component:Home,   
    },
    {
        path:"cart",
        component:Cart,       
    },
    {
    path: 'contact',
    component: Contact, 
    },
    {
    path: 'product_detail',
    component: ProductDetail, 
    },
    {
    path: 'checkout-product',
    component: CheckoutProduct, 
    },
    {
    path: 'product-page',
    component: ProductPage, 
    }
   
];
