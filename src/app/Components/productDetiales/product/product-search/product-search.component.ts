import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSearchService } from 'src/app/Services/productSearchService/product-search.service';
import { IndexProduct } from 'src/app/ViewModels/index-product';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  searchname: string | undefined;
  resultsearch: IndexProduct[] = [];
  searchcategory!: number;
  name!: string;

  constructor(private activerouter: ActivatedRoute,
    private searchservice: ProductSearchService,
    private router: Router) { }

  ngOnInit(): void {


    this.activerouter.paramMap.subscribe(param => {
      this.searchcategory = Number(param.get('category'));
      this.name = String(param.get('name'));
      if (this.searchcategory != 0) {

      this.searchservice.filterCategoryName(this.searchcategory, this.name).subscribe( res => {

          this.resultsearch = res.data;
          if (this.resultsearch.length == 0) {
            this.router.navigate(['/products/notresult', this.name]);
          }

        })}
        
     else {
            this.searchservice.filterSearchName(this.name).subscribe(res => {
              

                 this.resultsearch = res.data;
                 debugger

                   if (this.resultsearch.length == 0) {
                    this.router.navigate(['/products/notresult', this.name]);
          }
        })


      }
    })

  }



  getproductditails(id: number) {
    this.router.navigate(['/products/productdetails', id]);

  }

}
