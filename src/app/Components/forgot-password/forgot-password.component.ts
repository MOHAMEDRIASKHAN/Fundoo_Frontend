import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private formbuilder:FormBuilder, private userservice:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  ForgotForm = new FormGroup({
    email:new FormControl("",  Validators.email),
})
ForgotSubmit(){
  console.log(this.ForgotForm)
  let data={ 
    email:this.ForgotForm.value.email
  }
  this.userservice.ForgotPassword(data).subscribe((res:any)=>{
    console.log(res.message);
    this.snack.open('Forgot email successfull','',{
      duration:2500,
      verticalPosition:'bottom'
    })
  })
 }
}
