import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.css']
})
export class AllnotesComponent implements OnInit {

  notes=[];
  constructor(private _notesService: NotesService, private router: Router) { }

  ngOnInit() {
    this.notes=this._notesService.getNotes();
  }

  viewNote(id)
  {
    this.router.navigate(['/view',id]);    
  }



}
