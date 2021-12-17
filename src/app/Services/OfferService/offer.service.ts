import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ioffer } from 'src/app/ViewModels/ioffer/ioffer';
import { ResultViewModel } from 'src/app/ViewModels/result-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http:HttpClient) { }

  GetAllOffer():Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}product/Alloffer`)
  }

  GetProdOffer(id:number):Observable<ResultViewModel>{
    return this.http.get<ResultViewModel>(`${environment.ApiUrl}product/GetProdOffer/`+id)
   }

   EditOffer(offer:Ioffer) :Observable<any>
  {
    const httpOptions={
      headers : new HttpHeaders({
        'content-type':'application/JSON'
      })
    }
    return this.http.put(`${environment.ApiUrl}Product/editoffer`,JSON.stringify(offer),httpOptions);
  }

  // AddOffertoproduct(offid:number , proid:number):Observable<ResultViewModel>
  // {
  //   const httpOptions={
  //     headers : new HttpHeaders({
  //       'content-type':'application/JSON'
  //     })
  //   }
  //   return this.http.post<>(`${environment.ApiUrl}AddOffertoproduct/{offid}/{proid}`,JSON.stringify(offid , ),httpOptions);
  // }

   AddOffer():Observable<ResultViewModel>
   {
     return this.http.get<ResultViewModel>(`${environment.ApiUrl}product/addoffer`)
   }

   DeleteOffer(id:number):Observable<number>
  {
    // debugger
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete<number>(`${environment.ApiUrl}Product/deleteoffer/`+id,httpOptions);
   
  }
}
