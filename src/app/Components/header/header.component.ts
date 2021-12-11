import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import { ICategory } from 'src/app/ViewModels/Category/i-category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
categorylist:ICategory[]=[];
  constructor(private router:Router,
              private category:CategoryService) { }

  ngOnInit(): void {
    this.category.getcateory().subscribe(response=>
      {
        this.categorylist=response.data;
      })

  }
  

  searchproduct(search:any,category:any){
     search as ElementRef;
    if(search.value!="")
      this.router.navigate(['/products/search/',search.value,category]);

     
    search.value="";
  }
 
  gocategory(id:number){
    this.router.navigate(['/products/searchcategory',id]);

  }
}
