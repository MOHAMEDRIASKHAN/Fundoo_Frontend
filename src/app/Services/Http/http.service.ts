import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  PostService(url:string, payload:any, token:boolean=false, httpOptions:any={}){
    return this.http.post(url, payload, token && httpOptions)
  }
  PutService(url:string, payload:any, token:boolean=true, httpOptions:any={}){
    return this.http.put(url, payload, token && httpOptions)
}
GetService(url:any, token:boolean=true, httpOptions:any){
  return this.http.get(url,token && httpOptions)
}
DeleteService(url:any, token:boolean=true, httpOptions:any){
  return this.http.delete(url,token && httpOptions)
}
}
