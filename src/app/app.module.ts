import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LeaveRequestComponentComponent } from './leave-request-component/leave-request-component.component';
import { LeaveRequestComponent } from './leave-request-component/leave-request-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    LeaveRequestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioButton
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
