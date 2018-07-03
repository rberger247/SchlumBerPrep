import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSvcService  } from "./data-svc.service";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import { CollectionView } from "wijmo/wijmo";
import { FormBuilder } from '@angular/forms';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Declarations
  protected dataSvc: DataSvcService;
  data: wjcCore.CollectionView;
  sampleForm: FormGroup;
  
  constructor(
    @Inject(DataSvcService) dataSvc: DataSvcService,
    private fb: FormBuilder
  ){
    this.dataSvc = dataSvc;
    this.data = new wjcCore.CollectionView(this.dataSvc.getData(10)); 
    this.CreateForm();
  }
   //  Reactive form example
  CreateForm(){
         this.sampleForm =this.fb.group({
         name:['', Validators.required]
 
        })
  }
}
