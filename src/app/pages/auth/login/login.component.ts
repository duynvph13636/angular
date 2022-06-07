import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
  constructor(private authService:AuthService) { 
    this.loginForm=new FormGroup({
      email:new FormControl('',Validators.email),
      password : new FormControl('')
    })
  }

  ngOnInit(): void {
  }
onSubmit(){
  // 1.nhận dữ liệu từ form và call api login
  console.log(this.loginForm.value);
  this.authService.login(this.loginForm.value).subscribe(data=>{
    // console.log(data);
    //2.Lưu thông tin vào localStorage setItem(Teen key lưu vào ls , dữ liệu string)
    localStorage.setItem('loggedInUser',JSON.stringify(data))
    // localStorage.getItem('loggedInUser')
    
  })
}
}
