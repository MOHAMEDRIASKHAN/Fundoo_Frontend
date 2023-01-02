import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/Services/Notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
    trashlist:any;
  constructor(private noteservice:NotesService) { }

  ngOnInit(): void {
    this.createnotesubmit()
  }
createnotesubmit(){
this.noteservice.getnotes().subscribe((res:any)=>{
  console.log(res)
  this.trashlist =res.data;
  // this.trashlist=this.trashlist.filter((object:any)=>{
  //      return object.trash ==false;
  //    })
})
}
restore(note:any){
let data={
  noteID:note.noteID
}
console.log(data)
this.noteservice.Trashnote(data).subscribe((res:any)=>{
  console.log(res)
  
})
}
}
