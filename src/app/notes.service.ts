import { Injectable } from '@angular/core';
import {Notesclass} from '../app/notesclass';
import { forEach } from '@angular/router/src/utils/collection';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private nextId: number;
  constructor() { 
   this.setID();
  }

  private setID():void
  {
    let notes=this.getNotes();
    if(notes.length==0){
      this.nextId=1;
    }
    else{
      let id=notes[notes.length-1].id;
      this.nextId=id+1;
    }
  }

  getNotes() : Notesclass[]{
    return (JSON.parse(localStorage.getItem("notes"))==null?[]:JSON.parse(localStorage.getItem("notes")));
  }

  private setLocalStorage(note: Notesclass[])
  {
    localStorage.setItem("notes",JSON.stringify(note));
  }

  saveNotes(title:string,text:string,date:string): void{
    let note=new Notesclass(this.nextId,title,text,date);
    let localnotes=this.getNotes();
    localnotes.push(note);
    this.nextId++;
    this.setLocalStorage(localnotes);
  }

  deleteNote(note:Notesclass):void{
    let notes=this.getNotes();
    let newnotes=notes.filter(n=>n.id!==note.id);
    this.setLocalStorage(newnotes);
  }

  getParticularNote(id:number): Notesclass
  {
    let newnote;
    let notes=this.getNotes();
    notes.forEach(note => {
      if(note.id==id)
        newnote= note;
      
    });
    return newnote;
  }

}
