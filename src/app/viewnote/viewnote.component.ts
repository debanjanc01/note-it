import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../notes.service';
import { Notesclass } from '../notesclass';

@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.component.html',
  styleUrls: ['./viewnote.component.css']
})
export class ViewnoteComponent implements OnInit {
  note: Notesclass;
  constructor(private noteService:NotesService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.note=this.noteService.getParticularNote(id);
    console.log("id in viewnote "+id);
    console.log(this.note);
}


}
