import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllnotesComponent } from './allnotes/allnotes.component';
import { ViewnoteComponent } from './viewnote/viewnote.component';
import { CreatenoteComponent } from './createnote/createnote.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [
    AppComponent,
    AllnotesComponent,
    ViewnoteComponent,
    CreatenoteComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
