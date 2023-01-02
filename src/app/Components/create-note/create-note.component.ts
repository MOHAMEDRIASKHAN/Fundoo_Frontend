import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/Services/Notes/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  @Output() refreshEventCreate = new EventEmitter<string>();
  CreatenoteForm !:FormGroup
  notes:boolean =true;
  submitted = false;
  token:any
  constructor(private formBuilder : FormBuilder, private noteservices:NotesService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.CreatenoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  ClickSerachbar(){
    this.notes=false;
  }
  CreatenoteSumbit() {
    this.submitted=true;
    if(this.CreatenoteForm.valid){
    console.log(this.CreatenoteForm)
    let data={
      title: this.CreatenoteForm.value.title,
      body: this.CreatenoteForm.value.body
    }
    this.noteservices.Createnote(data).subscribe((res:any)=>{
      console.log(res.message);
      this.refreshEventCreate.emit(res)
    });
    this.notes = true;
  }
}
}