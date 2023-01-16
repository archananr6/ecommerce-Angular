import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fashions:any;
  electronics:any;
  isLoggedIn!:any;
constructor(private api:ApiService){
this.api.getfashion().subscribe(data=>{
  this.fashions=data;
  this.isLoggedIn=localStorage.getItem('token')
})
this.api.getelectronic().subscribe(data=>{
  this.electronics=data;
})
}
cartFashion(id:any){
  this.api.addcartfashion(id).subscribe(data=>{
    console.log(data);
  });
}
cartElectronic(id:any){
  this.api.addcartelectronic(id).subscribe(data=>{
    console.log(data);
  })
}
logOut(){
  localStorage.clear();
  location.reload();
}
}
