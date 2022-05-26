import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() users:any;
  constructor() { }

  ngOnInit(): void {
  }
  inputValue = {
    id: 0,
    name: '',
    age: 0,
    phone: 0,
    email: '',
  };
 
  // buttonDelete(id: number) {
  //   this.users = this.users.filter((item) => item.id !== id);
  // }
  buttonEdit(user:any,id: number) {
    // const updateId = this.users.find((user: any) => user.id === id);
    this.inputValue= user.find((item:any)=>item.id===id)
   
   
  }
}
