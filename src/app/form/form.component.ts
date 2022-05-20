import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  users = [
    {
      id: 1,
      name: 'duynvph13636',
      age: 20,
      phone: 84,
      email: 'duynvph@gmail.com',
    },
  ];
  inputValue = {
    id: 0,
    name: '',
    age: 0,
    phone: 0,
    email: '',
  };
  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    if (this.inputValue.id) {
      this.users = this.users.map((user: any) =>
        user.id === this.inputValue.id ? this.inputValue : user
      );
      userForm.resetForm({ name: '', age: 0, email: '', phone: 0 });
    } else {
      const newUserIds = this.users
        .map((user) => user.id)
        .sort((a: number, b: number) => b - a);
      const maxId = newUserIds[0];
      this.users.push({ ...userForm.value, id: maxId + 1 });
      userForm.resetForm({ name: '', age: 0, email: '', phone: 0 });
    }
  }
  buttonDelete(id: number) {
    this.users = this.users.filter((item) => item.id !== id);
  }
  buttonEdit(id: number) {
    const updateId = this.users.find((user: any) => user.id === id);
    this.inputValue={
      id:updateId?.id,
      name:updateId?.name,
      age:updateId?.age,
      phone:updateId?.phone,
      email:updateId?.email
    }
   
  }
}
