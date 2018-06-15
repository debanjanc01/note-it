import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { Notesclass } from '../notesclass';

@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.component.html',
  styleUrls: ['./viewnote.component.css']
})
export class ViewnoteComponent implements OnInit {
  note: Notesclass;
  display:boolean;
  constructor(private noteService:NotesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.note=this.noteService.getParticularNote(id);
    if(this.note==null){
      this.router.navigate(['error']);
      this.display=false;
    } else{
      this.display=true;
    }   


}

delete():void{
  this.noteService.deleteNote(this.note);
  this.router.navigate(['']);
}

}
