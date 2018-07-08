import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSvcService } from './data-svc.service';

import { NotFoundComponent } from './not-found.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { TestPipePipe } from './pipes/test-pipe.pipe';
import { PipePracticeComponent } from './pipes/pipe-practice/pipe-practice.component';
import { CoolFeatureModule } from './coolFeature/cool-feature/cool-feature.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SignInComponent,
    TestPipePipe,
    PipePracticeComponent,
    FormComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoolFeatureModule,
    ReactiveFormsModule,
    FormsModule,
    WjGridModule,
    WjInputModule
  ],
  providers: [DataSvcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
