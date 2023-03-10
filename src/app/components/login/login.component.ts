import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm!: FormGroup;
 
serverResponse:any;
 constructor(private service: ApiService,private router: Router){
this.loginForm=new FormGroup({
  username:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required]),
})
 }
 submit(){
  this.service.loginUser(this.loginForm.value.username, this.loginForm.value.password).subscribe(data=>{
    console.log(data);
    this.serverResponse=data;
    if(this.serverResponse.invalid){
      alert(this.serverResponse.message);
    }
    else{
      localStorage.setItem("token",JSON.stringify(this.serverResponse));
      if(this.serverResponse.usertype=="admin"){
      this.router.navigate(['./admin']);

    }
    else{
      this.router.navigate([""])
    }
  }
  })
 }
 showPassword: boolean = false;

togglePassword() {
    this.showPassword = !this.showPassword;
    if(this.showPassword) {
      document.getElementById("password")!.setAttribute('type', 'text');
    } else {
      document.getElementById("password")!.setAttribute('type', 'password');
    }
  }

}
