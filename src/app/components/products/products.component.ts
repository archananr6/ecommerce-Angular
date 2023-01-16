import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  image:string='';
  description:string ='';
  price:string='';
  category:string='';
  constructor(private service:ApiService,private router:Router){

  }
  addproduct(){
   console.log(this.description,this.price,this.category);

   let user = sessionStorage.getItem("userId");

   if(this.category=="fashion"){
    this.service.addfashion({image:this.image,description:this.description,price:this.price}).subscribe(res=>{
      this.router.navigate(['admin'])
    })
    
    }
    else{
      this.service.addelectronic({description:this.description,price:this.price}).subscribe(res=>{
        this.router.navigate(['admin'])
      })
    }
   }
  }

