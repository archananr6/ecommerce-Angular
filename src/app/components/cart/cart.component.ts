import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 fashions:any;
 constructor(private api:ApiService){
  this.api.getcart().subscribe(data=>{
    this.fashions=data;
    console.log(data)
  })
 }
deleteitemFashion(id:number){
  this.api.deletecartfashion(id).subscribe(data=>{
      window.location.reload();
  });
}
deleteitemElectronic(id:number){
  this.api.deletecartelectronic(id).subscribe(data=>{
    window.location.reload();
  })
}
}

