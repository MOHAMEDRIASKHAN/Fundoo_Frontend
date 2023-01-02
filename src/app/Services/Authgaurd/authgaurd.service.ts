import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  constructor() { }
  access(){
    return !!localStorage.getItem("token");
  }
}
