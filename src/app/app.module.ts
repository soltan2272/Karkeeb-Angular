import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/home/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './Components/productDetiales/product/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RatePipePipe } from './filtersPipe/rate-pipe.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ShoppingCartComponent } from './Components/shoppingCart/shopping-cart/shopping-cart.component';
import { CartModule } from './Components/shoppingCart/cart/cart.module';
import { UserModuleModule } from './Components/User/model/user-module/user-module.module';
import { PaymentComponent } from './Components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    RatePipePipe,
    ShoppingCartComponent,
    PaymentComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule ,
    CartModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    LazyLoadImageModule,
    UserModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
