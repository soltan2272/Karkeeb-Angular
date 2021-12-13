import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/ProductService/product.service';
import { IndexProduct } from 'src/app/ViewModels/index-product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  indexProducts:IndexProduct[]=[];
  constructor(private productServes:ProductService , private rout : Router) { }

  ngOnInit(): void {
    this.productServes.getAllProducts().subscribe(
      (response) => {
        this.indexProducts = response.data;
      },
      (error) => { console.log(error) }
    )
  }

  getproductditails(id : number)
  {
    this.rout.navigate(['/products/productdetails',id]);

  }
}
