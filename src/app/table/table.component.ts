import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input('champions') champs:any;
@Input() price:number;
@Input() src : string;
  constructor() {
    this.price =0;
    this.src="";
   }

  ngOnInit(): void {
  }

}
