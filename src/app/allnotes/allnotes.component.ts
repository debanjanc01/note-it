import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.css']
})
export class AllnotesComponent implements OnInit {

  notes=[];
  constructor(private _notesService: NotesService) { }

  ngOnInit() {
    this.notes=this._notesService.getNotes();
    localStorage.setItem("1","bat");
    
  }



}
