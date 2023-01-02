import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder:FormBuilder, private userservice:UserService, private router:Router, private snack:MatSnackBar) {}

  ngOnInit(): void {
  }
  loginform = new FormGroup({
    email:new FormControl("", [Validators.required, Validators.email]),
    password:new FormControl("", Validators.required)
  })

  loginSubmit(){
    console.log(this.loginform)
    let data={
      email:this.loginform.value.email,
      password: this.loginform.value.password
    }
    this.userservice.Login(data).subscribe((res:any)=>{
      console.log(res.message);
      localStorage.setItem('token',res.token)
      this.router.navigateByUrl("/Dashboard/getnote")
      this.snack.open('Login Successfull','',{
        duration:2500,
        verticalPosition:'bottom'
      })
    });
  }
}
