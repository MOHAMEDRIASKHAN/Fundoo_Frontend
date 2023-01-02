import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/Notes/notes.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  title:any;
  body:any;
  noteid:any;
  constructor( @Inject(MAT_DIALOG_DATA) public data:any,
  public dialog:MatDialogRef<UpdatenoteComponent>,
  private noteservice:NotesService) {
    this.title = data.title,
    this.body = data.body,
    this.noteid = data.noteID
   }

  ngOnInit(): void {
  }
  closedialog(){
    let data = {
      title:this.title,
      body:this.body,
    }
    this.noteservice.updatenote(data,this.noteid).subscribe((res:any)=>{
      console.log(res);
      this.dialog.close
    })
  }
}
