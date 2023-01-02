import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
base = "https://localhost:7168/api/";
token:any;

  constructor(private httpservice:HttpService) 
  {
    this.token=localStorage.getItem('token')
  }
Createnote(data:any)
{
let header={
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.token
  })
}
return this.httpservice.PostService(this.base+`Note/CreateNotes`,data,true,header);
}
getnotes(){
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token
    })
  }
  return this.httpservice.GetService(this.base+`Note/GetNotes`,true,header);
}
updatenote(data:any,noteID:any){
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token
    })
  }
  return this.httpservice.PutService(this.base+`Note/UpdateNotes?noteID=`+noteID,data,true,header);
}
Trashnote(data:any){
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token
    })
  }
  return this.httpservice.PutService(this.base+`Note/Trash?noteID=`+data.noteID,{},true,header);
}
Archivenote(data:any){
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token
    })
  }
  return this.httpservice.PutService(this.base+`Note/Archieve?noteID=`+data.noteID,{},true,header);
}
Colornote(data:any){
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token
    })
  }
  return this.httpservice.PostService(this.base+`Note/Color?noteID=`+data.noteID+'&Color='+data.color,{},true,header)
}
}
