import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/Notes/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  Archivelist:any;
  constructor(private noteservice:NotesService) { }

  ngOnInit(): void {
    this.createnotesubmit()
  }
  createnotesubmit(){
    this.noteservice.getnotes().subscribe((res:any)=>{
      console.log(res)
      this.Archivelist =res.data;
      this.Archivelist=this.Archivelist.filter((object:any)=>{
        return object.archive == true && object.trash == false;
      })
    })
    }
}
