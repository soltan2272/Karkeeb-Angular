import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthModel } from 'src/app/ViewModels/User/auth-model';
import { LoginModel } from 'src/app/ViewModels/User/login-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserlogged:BehaviorSubject<boolean>
  constructor(private httpservice:HttpClient) {
  this.isUserlogged=new BehaviorSubject<boolean>(false);
   }

  login(loginModel:LoginModel):Observable<AuthModel>
  {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    this.httpservice
             .post<AuthModel>(`${environment.ApiUrl}user/login`,JSON.stringify(loginModel),httpOptions)
             .subscribe({
               next:(res)=>{
                this.isUserlogged.next(res.isAuthenticated);
                console.log(this.isUserlogged.value);
               }
             })

   console.log(loginModel);
  return this.httpservice
             .post<AuthModel>(`${environment.ApiUrl}user/login`,JSON.stringify(loginModel),httpOptions);
  }
}
