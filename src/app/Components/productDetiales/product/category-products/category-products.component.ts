import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSearchService } from 'src/app/Services/productSearchService/product-search.service';
import { IndexProduct } from 'src/app/ViewModels/index-product';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {
  searchcategory!:number;
  name!:string;
  resultsearch:IndexProduct[]=[];
  constructor(private searchservice:ProductSearchService,
              private activerouter:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.activerouter.paramMap.subscribe(param =>{
      this.searchcategory = Number(param.get('catid'));
      this.searchservice.filterCategorysearchName(this.searchcategory).subscribe(res =>
        {
          this.resultsearch = res.data;
        })
    })

   
  }
  getproductditails(id: number) {
    this.router.navigate(['/products/productdetails', id]);

  }

}
