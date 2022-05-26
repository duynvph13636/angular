import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {
      id: 1,
      name: 'duynvph13636',
      age: 20,
      phone: 84,
      email: 'duynvph@gmail.com',
    },
  ];
  onCreateUser(newUser:any){
console.log(newUser);

  }
}
