import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { Routes } from '@angular/router';
import { AddofferComponent } from '../addoffer/addoffer.component';

const routs:Routes=[
 
  {path:"offers" , component:OfferComponent},
  {path:"addoffer" , component:AddofferComponent}
]


@NgModule({
  declarations: [
    OfferComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OfferModule { }
