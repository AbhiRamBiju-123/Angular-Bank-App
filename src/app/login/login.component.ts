import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// data="Happy Banking With us"
pdata="Enter your name..."
acno:any=""
pass:any=""

login(a:any,b:any){
  console.log(a.value);
  console.log(b.value);
  
}
acnoChange(event:any){
  console.log(event.target.value);
}
passChange(event:any){
  this.pass=event.target.value;
  console.log(this.acno);
}
}


