import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  Resetform! : FormGroup;
  submitted = false;
  public showPassword: boolean = false;
  token:any;
  constructor(private formbuilder:FormBuilder, private userservice:UserService, private snack:MatSnackBar, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
   // Resetform = new FormGroup({
    this.Resetform = this.formbuilder.group({  
    Password: new FormControl("",[Validators.required, Validators.minLength(9)]),
    ConfirmPassword: new FormControl("",Validators.required)
  })
  this.token =this.activeRoute.snapshot.paramMap.get('token');
  console.log(this.token)
  
}
public itsShowyourPassword(): void{
  this.showPassword = !this.showPassword;
}
  ResetSumbit(){
    this.submitted =true;
    console.log(this.Resetform)
    let data ={
      Password: this.Resetform.value.Password,
      ConfirmPassword: this.Resetform.value.ConfirmPassword
    }
    this.userservice.ResetPassword(data,this.token).subscribe((res:any)=>{
      console.log(res.message);
      this.snack.open('Reset Successfull','',{
        duration:2500,
        verticalPosition:'bottom'
      })
    });
   }
}
