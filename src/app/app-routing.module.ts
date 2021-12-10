import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductModule } from './Components/productDetiales/product/product.module';

const routes: Routes = [
  {path:"" , redirectTo : '/home', pathMatch : 'full'},
  {path:"home" , component:HomeComponent},
  {path:"products" , 
  loadChildren : ()=> import ('src/app/Components/productDetiales/product/product.module').then(m=> m.ProductModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
