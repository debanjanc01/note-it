import { Injectable } from '@angular/core';
import {Notesclass} from '../app/notesclass';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private note : Notesclass[];
  private nextId: number;
  constructor() { 
    let note1=new Notesclass(1,"first","random text for first note","today");
    let note2=new Notesclass(2,"second","random text for first note","today");
    this.note=[note1,note2];
    this.nextId=3;
    localStorage.setItem("notes",JSON.stringify(this.note));
  }

  getNotes() : Notesclass[]{
    return JSON.parse(localStorage.getItem("notes"));
  }

  private setLocalStorage(note: Notesclass[])
  {
    localStorage.setItem("notes",JSON.stringify(note));
  }

  saveNotes(title:string,text:string): void{
    let note=new Notesclass(this.nextId,title,text,"bla");
    this.note.push(note);
    console.log(this.note);
    this.setLocalStorage(this.note);

  }
}
