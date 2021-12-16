import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { HomeComponent } from './Components/home/home.component';

import { PaymentComponent } from './Components/payment/payment.component';
import { PaypalComponent } from './Components/paypal/paypal.component';

import { ProductSerComponent } from './Components/product-ser/product-ser.component';

import { ProductModule } from './Components/productDetiales/product/product.module';
import { ShopComponent } from './Components/productDetiales/product/shop/shop.component';

const routes: Routes = [
  {path:"" , redirectTo : '/home', pathMatch : 'full'},

  {path:"home" , component:HomeComponent},
  {path:"payment" , component:PaypalComponent},
  {path:"home" , component:ProductSerComponent},
  {path:"addProduct" , component:AddProductComponent},
  {path:"editProduct" , component:EditProductComponent},

  {path:"products" , 
  loadChildren : ()=> import ('src/app/Components/productDetiales/product/product.module').then(m=> m.ProductModule)},
  {path:"user" , 
  loadChildren : ()=> import ('src/app/Components/User/model/user-module/user-module.module').then(m=>m.UserModuleModule )},
  {path:"shoppingcart" , 
  loadChildren : ()=> import ('src/app/Components/shoppingCart/cart/cart.module').then(m=> m.CartModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
