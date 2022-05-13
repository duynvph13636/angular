import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-dame',
  templateUrl: './table-dame.component.html',
  styleUrls: ['./table-dame.component.css']
})
export class TableDameComponent implements OnInit {
@Input() tableDame:any
  constructor() { }

  ngOnInit(): void {
  }

}
