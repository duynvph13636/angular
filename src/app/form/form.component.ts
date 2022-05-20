import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  user = [
    {
      id:1,
      name: 'duynvph13636',
      age: 20,
      phone: 84,
      email: '',
    },
  ];
  inputValue = {
    id:0,
    name: '',
    age: 0,
    phone:0,
    email:''
  };
  onSubmit(formData: {
    name: string;
    age: number;
    phone: number;
    email: string;
  }) {
    // console.log(formData);
    const newUserIds = this.user.map(user=>user.id).sort((a:number,b:number)=>b-a);
    const maxId=newUserIds[0];
    this.user.push({...formData,id:maxId+1});
    this.inputValue = {
      id:0,
      name: '',
      age: 0,
      phone:0,
      email:''
    };
    
  }
  buttonDelete(id:number){
    this.user=this.user.filter((item)=>item.id!==id)
  }
  buttonEdit(id:number){
    const updateId = this.user.find((user:any)=>user.id===id);
    this.inputValue={
      id:updateId.id,
      name:updateId.name,
      age:updateId.age,
      phone:updateId.phone,
      email:updateId.email
    }
  }
}
