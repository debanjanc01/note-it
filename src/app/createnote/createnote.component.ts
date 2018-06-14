import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent implements OnInit {
  emptyTitle=false;
  emptyText=false;
  constructor(private notesService: NotesService,private router: Router) { }

  ngOnInit() {
  
  }

  saveText(title,text){
    if(!/\S/.test(title))
    {
        this.emptyTitle=true;
    }
    else{
      this.emptyTitle=false;
    }
    if(!/\S/.test(text))
    {
      this.emptyText=true;
    }
    else{
      this.emptyText=false;
    }
    if((!this.emptyTitle)&&(!this.emptyText))
    {
      let date=new Date().toLocaleString();
      this.notesService.saveNotes(title,text,date);
      this.router.navigate[''];
    }
  }
}
