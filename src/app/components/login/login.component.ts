import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 username: string ="";
 password:string ="";
  serverResponse:any;
 constructor(private service: ApiService,private router: Router){

 }
 submit(){
  this.service.loginUser(this.username, this.password).subscribe(data=>{
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
