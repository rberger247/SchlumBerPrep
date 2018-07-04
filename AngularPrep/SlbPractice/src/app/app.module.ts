import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSvcService } from './data-svc.service';

import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    WjGridModule,
    WjInputModule
  ],
  providers: [DataSvcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
