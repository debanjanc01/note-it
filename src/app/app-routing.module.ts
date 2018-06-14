import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllnotesComponent } from './allnotes/allnotes.component';
import { ViewnoteComponent } from './viewnote/viewnote.component';
import { CreatenoteComponent } from './createnote/createnote.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:'',
    component: AllnotesComponent
  },
  {
    path:'create',
    component: CreatenoteComponent
  },
  {
    path:'view/:id',
    component: ViewnoteComponent
  },
  {
    path:'**',
    component: NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
