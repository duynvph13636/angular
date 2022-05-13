import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-avarta',
  templateUrl: './table-avarta.component.html',
  styleUrls: ['./table-avarta.component.css']
})
export class TableAvartaComponent implements OnInit {
@Input () price:number;
@Input () src:string;

  constructor() { 
    this.price=0;
    this.src=""
  }

  ngOnInit(): void {
  }

}
