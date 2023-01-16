import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  fashions:any;
  temp:any;
  usertype:any;
constructor(private service: ApiService,private router:Router){
 this.usertype= JSON.parse( localStorage.getItem("token")||"").usertype
  if(this.usertype=="admin"){
    this.service.getfashion().subscribe(data=>{
    this.fashions=data
    
    console.log(data);
  })
  }
  

 
}

deletefashion(id:number){
  this.service.deletefashion(id).subscribe(data=>{
  window.location.reload();
  })
}
updatefashion(id:number){
  this.service.getFashion(id).subscribe(data=>{
    this.temp=data;
  let id=<HTMLInputElement>document.getElementById("id")
  let image= <HTMLInputElement> document.getElementById("image");
  let description= <HTMLInputElement> document.getElementById("description");
  let price= <HTMLInputElement> document.getElementById("price");
  id.value=this.temp[0].id;
  image.value=this.temp[0].image;
  description.value=this.temp[0].description;
  price.value=this.temp[0].price;
  })
  // this.service.updatefashion(id).subscribe(data=>{
  //   window.location.reload();
  // })
}
add(){
  this.router.navigate(['products'])
  
}
savechanges(){
  let id=<HTMLInputElement>document.getElementById("id")
  let image= <HTMLInputElement> document.getElementById("image");
  let description= <HTMLInputElement> document.getElementById("description");
  let price= <HTMLInputElement> document.getElementById("price");
  console.log(image.value,description.value,price.value)
  this.service.updatefashion(id.value,{image:image.value,description:description.value,price:price.value}).subscribe(data => {
    console.log(data);
  })
}

}
