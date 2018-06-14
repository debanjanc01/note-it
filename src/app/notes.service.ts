import { Injectable } from '@angular/core';
import {Notesclass} from '../app/notesclass';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private note :Notesclass[];
  constructor() { }

  getNotes(){
    return[
      {"id":1, "title":"first note", "text":"this is random text"},
      {"id":2, "title":"second note", "text":"this is random text"},
      {"id":3, "title":"third note", "text":"this is random text"},
      {"id":4, "title":"fourth note", "text":"this is random text"}
    ];
  }
}
