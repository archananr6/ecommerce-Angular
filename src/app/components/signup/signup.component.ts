import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm!: FormGroup;
  constructor(private service:ApiService){
    this.registerForm= new FormGroup({
      name: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('', Validators.required)
      
    }); 
  }

  submit(){
    if(this.registerForm.invalid ){
      alert("Please enter a valid registration");
    }else{
      this.service.registerUser(this.registerForm.value.name,this.registerForm.value.email,this.registerForm.value.confirmPassword);

    }
    // console.log(this.registerForm.value.name,this.registerForm.value.email,this.registerForm.value.confirmPassword);
    
  }
  
}

