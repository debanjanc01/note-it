import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  saveText(title,text){
    let date=new Date().toLocaleString();
    this.notesService.saveNotes(title,text,date);

  }
}
