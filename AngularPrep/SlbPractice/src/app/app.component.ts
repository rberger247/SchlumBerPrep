import { Component, Inject } from '@angular/core';
import { DataSvcService  } from "./data-svc.service";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import { CollectionView } from "wijmo/wijmo";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected dataSvc: DataSvcService;
  data: wjcCore.CollectionView;

  constructor(@Inject(DataSvcService) dataSvc: DataSvcService
  ){
    this.dataSvc = dataSvc;
    this.data = new wjcCore.CollectionView(this.dataSvc.getData(100));


  }
  title = 'app';
}
