import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  message:any;
  @Output() refreshEventFromDisplaytoGetall =new EventEmitter<string>();
  @Input() notelist:any;
  @Output() updateAutoRefresh = new EventEmitter<string>();


   constructor(private dialog:MatDialog) { }

   
   ngOnInit(): void {
  }
  editNoteDialogBox(note:any){
    let dia =this.dialog.open(UpdatenoteComponent,{
      width:"40%",
      height :"auto",
      data: note
    })
    dia.afterClosed().subscribe((res:any)=>{
      console.log(res)
      this.updateAutoRefresh.emit(res)
    })
  }
  
  receivedRefreshEvent($event:any)
  {
    console.log("icon to display"+$event);
    this.message=$event;
    this.refreshEventFromDisplaytoGetall.emit(this.message)
  }
}
