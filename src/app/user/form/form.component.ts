import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnInit {
@Output() handleSubmit:EventEmitter<any>
  constructor() { 
    this.handleSubmit=new EventEmitter();
  }

  ngOnInit(): void {

  }
  inputValue = {
    id: 0,
    name: '',
    age: 0,
    phone: 0,
    email: '',
  };

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    this.handleSubmit.emit(userForm.value);
    // if (this.inputValue.id) {
    //   this.users = this.users.map((user: any) =>
    //     user.id === this.inputValue.id ? this.inputValue : user
    //   );
    //   userForm.resetForm({ name: '', age: 0, email: '', phone: 0 });
    // } else {
    //   const newUserIds = this.users
    //     .map((user) => user.id)
    //     .sort((a: number, b: number) => b - a);
    //   const maxId = newUserIds[0];
    //   this.users.push({ ...userForm.value, id: maxId + 1 });
    //   userForm.resetForm({ name: '', age: 0, email: '', phone: 0 });
    // }
  }
}
