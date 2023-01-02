import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Submitted =false;
  public showPassword: boolean = false;
  constructor(private formbuilder:FormBuilder, private userservice:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  Reginform = new FormGroup({
    firstName:new FormControl("",Validators.required),
    lastName: new FormControl("",Validators.required),
    emailID: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required, Validators.minLength(6)])
  })

  public itsShowyourPassword(): void{
    this.showPassword = !this.showPassword;
  }
  ReginSumbit(){
    this.Submitted =true;
    
    console.log(this.Reginform)
    let data ={
      firstName:this.Reginform.value.firstName,
      lastName:this.Reginform.value.lastName,
      emailID:this.Reginform.value.emailID,
      password:this.Reginform.value.password
    }
    this.userservice.Register(data).subscribe((res:any)=>{
      console.log(res.message);
      this.snack.open('Register Successfull','',{
        duration:2500,
        verticalPosition:'bottom'
      })
    })
  }
}
