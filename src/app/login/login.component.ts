import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data="Happy Banking With us"
pdata="Enter your name..."

login(){
  alert("Login clicked")
}
}


