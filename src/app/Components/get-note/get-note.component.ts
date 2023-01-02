import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/Notes/notes.service';

@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.scss']
})
export class GetNoteComponent implements OnInit {
  noteArray:any;
  constructor(private noteservice:NotesService) { }

  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    this.noteservice.getnotes().subscribe((responce: any)=>{
      console.log(responce);
      this.noteArray = responce.data;
      console.log("Stored to Array Variable")
      console.log(this.noteArray)
      this.noteArray=this.noteArray.filter((object:any)=>{
        return object.trash ==false;
      })
      this.noteArray=this.noteArray.filter((object:any)=>{
        return object.archieve ==false;
    })
    this.noteArray.reverse()
  })
  }
  receivedRefreshEventFromDisplaytoGetall($event:any){
    console.log("display to getallnote"+$event);
    this.onSubmit();
   }
  receiverRefreshEventCreate($event:any){
    console.log("createnote to getallnote"+$event);
    this.onSubmit();
  }
}
