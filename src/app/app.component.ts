import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  name = 'duynvph13636';
  class = 'we16301';
  sv = [
    {
      id: '1',
      name: 'duynvph',
      status: 0,
    },
    {
      id: '2',
      name: 'duynvph13636',
      status: 1,
    },
    {
      id: '3',
      name: 'duynvph13637',
      status: 1,
    },
  ];
  champs = [
    {
      name: 'duy',
      dame: 15,
      defend: 50,
      speed: 20,
      price: 1000,
      avatar: 'https://picsum.photos/100/100',
    },
    {
      name: 'duy',
      dame: 600,
      defend: 50,
      speed: 20,
      price: 1000,
      avatar: 'https://picsum.photos/100/100',
    },
    {
      name: 'duy',
      dame: 600,
      defend: 50,
      speed: 20,
      price: 4000,
      avatar: 'https://picsum.photos/100/100',
    },
  ];
  studentName = 'duynvph';
  mssv = 13636;
  // sự kiện
  // lưu trạng thái hiện thị bảng
  showStatus = true;
  onClickBtn() {
    console.log('click');
    this.showStatus = !this.showStatus;
  }
  inputValue = {
    name: '',
    avatar: '',
    dame: '',
    defend: '',
    speed: '',
    price: '',
  };
  onInput(
    event: any,
    key: 'name' | 'avatar' | 'price' | 'dame' | 'defend' | 'speed'
  ) {
    this.inputValue[key] = event.target.value;
  }

  // inputName = '';
  // onInputName(event:any){
  // this.inputValue.name=event.target.value;
  // }
  // inputAvatar = '';
  // onInputAvatar(event:any){
  // this.inputValue.avatar=event.target.value;
  // }
  onsubmit() {
    console.log(this.inputValue);
    this.champs.push({
      ...this.inputValue,
      dame: +this.inputValue.dame,
      price: +this.inputValue.price,
      speed: +this.inputValue.speed,
      defend: +this.inputValue.defend,
    });
     this.inputValue={
      name: '',
      avatar: '',
      dame: '',
      defend: '',
      speed: '',
      price: '',
  }
  }
 
}
