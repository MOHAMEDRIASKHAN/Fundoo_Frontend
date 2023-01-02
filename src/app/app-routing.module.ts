import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdGuard } from './Authgaurd/auth-gaurd.guard';
import { ArchiveComponent } from './Components/archive/archive.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetNoteComponent } from './Components/get-note/get-note.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { TrashComponent } from './Components/trash/trash.component';
//import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';


const routes: Routes = [
   {path : 'Demo',component:LoginComponent},
   {path : 'Register',component:RegisterComponent},
   {path : 'Forgot',component:ForgotPasswordComponent},
   {path : 'resetpassword/:token', component:ResetPasswordComponent},
   {path :'Createnote', component:CreateNoteComponent},
   {path : 'displaynote', component:DisplaynotesComponent},
  // {path : 'updatenote', component:UpdatenoteComponent},
   {path : 'Dashboard', component:DashboardComponent,
   canActivate:[AuthGaurdGuard],
   children:[
    {path:'', redirectTo:"/Dashboard/getnote",pathMatch:'full'},
    {path:'getnote', component:GetNoteComponent},
    {path:'Trash', component:TrashComponent},
    {path:'Archive', component:ArchiveComponent}
   ]},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
