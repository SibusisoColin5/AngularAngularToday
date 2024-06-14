import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveDetailsListComponent } from './leave-details-list/leave-details-list.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [

 
  {
    path:"", component:LeaveDetailsComponent
  },
  {
    path: "leave-details-list", component:LeaveDetailsListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
