import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
base = 'https://localhost:7168/api/';
token:any
  constructor(private httpservice:HttpService) 
  {
    this.token = localStorage.getItem('token')
  }

  Login(data:any){
    let header={
      Headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.PostService(this.base+`User/Login/${data.email}/${data.password}`,data, false,header)
  }
  Register(data:any){
    let header={
      Headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.PostService(this.base+`User/register`,data,false,header)
  }
  ForgotPassword(data:any){
    let header={
      Headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.PostService(this.base+`User/ForgetPassword?email=`+data.email,{},false,header)
  }
  ResetPassword(data:any, token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      })
    }
    return this.httpservice.PutService(this.base+`User/UpdatePassword?Password=`+data.Password+'&ConfirmPassword='+data.ConfirmPassword,{},true,header)
  }
}
