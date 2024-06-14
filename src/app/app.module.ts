import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { LeaveService } from './leave.service';
import { LeaveDetailsListComponent } from './leave-details-list/leave-details-list.component';
import { RouterLink } from '@angular/router';
import { ComponentManageComponent } from './component-manage/component-manage.component';
import { UpdateStatusComponent } from './update-status/update-status.component';


@NgModule({
  declarations: [
    AppComponent,
    LeaveDetailsComponent,
    LeaveDetailsListComponent,
    ComponentManageComponent,
    UpdateStatusComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioButton,
    HttpClientModule,
    HttpClientXsrfModule,
    RouterLink,
   
    BrowserAnimationsModule
  ],
  providers: [LeaveService,
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
