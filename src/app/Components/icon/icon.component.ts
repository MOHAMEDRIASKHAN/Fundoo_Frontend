import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/Services/Notes/notes.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
@Input() noteObject:any
@Output() refreshEvent = new EventEmitter<string>();
constructor(private noteservice:NotesService, private router:Router) { }
inArchive:boolean=false;
ngOnInit(): void {
}
  Delete()
  {
    let data ={
      noteID:this.noteObject.noteID,
    }
    console.log(data)
    this.noteservice.Trashnote(data).subscribe((res:any)=>{
      console.log("Trash Note Sucessfully");
      this.refreshEvent.emit(res);
    })
  }
  Archivedone(){
    let data={
      noteID:this.noteObject.noteID,
    }
  console.log(data)
  this.noteservice.Archivenote(data).subscribe((res:any)=>{
  console.log("Archive Note Successfully");
  this.refreshEvent.emit(res)
})
  }
  colorArray: Array<any> = [
    { code: '#ffffff', name: 'white'},
    { code: '#FF6347', name: 'Tomato'},
    { code: '#FF4500', name: 'OrangeRed'},
    { code: '#FFFF00', name: 'Yellow'},
    { code: '#ADFF2F', name: 'GreenYellow'},
    { code: '#B0C4DE', name: 'LightSteelBlue'},
    { code: '#EEE8AA', name: 'PaleGoldenRed'},
    { code: '#7FFFD4', name: 'Aquamarine'},
    { code: '#FFE4C4', name: 'Bisque'},
    { code: '#C0C0C0', name: 'Silver'},
    { code: '#BC8F8F', name: 'RosyBrown'},
    { code: '#D3D3D3', name: 'Gray'},
  ];
  selectColor(color:any){
    let data={
      color :color.name,
      noteID : this.noteObject.noteID
    }
    this.noteservice.Colornote(data).subscribe((res:any)=>{
      console.log(res)
      this.refreshEvent.emit(res);
    })
  }
}
