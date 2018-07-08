import { Component, OnInit } from '@angular/core';
import { Heroe } from './heroe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  heroe : Heroe [];
  ngOnInit(){

this.heroe = [ new Heroe(2, 'Bob the Builder')]

  }


}
