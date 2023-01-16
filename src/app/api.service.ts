import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private router:Router,private http:HttpClient) {}

  registerUser(name: string, email: string, password: string) {
    fetch('http://localhost:3000/register', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }), // body data type must match "Content-Type" header
    }).then((res) => {
      console.log(res);
      alert("Register successfully")
      this.router.navigate(['/login']);
    });
  }
  loginUser(username: string, password: string) {
    console.log(username,password)
    return this.http.post("http://localhost:3000/login",{username:username,password:password})

  }
  addfashion(data:any){
    return this.http.post("http://localhost:3000/addfashion",data,{headers:{"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}})
  }
  addelectronic(data:any){
    console.log(data)
    return this.http.post("http://localhost:3000/addelectronic",data,{headers:{"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}})
  }
  getfashion(){
   return this.http.get("http://localhost:3000/getfashion",{headers:{"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}})
  }
  
  getcart(){
    return this.http.get("http://localhost:3000/getcart",{headers:{"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}})
  }
  addcartfashion(id:any){
    return this.http.get(`http://localhost:3000/fashion/addcart/${id}`,{headers:{"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}})
  }
  addcartelectronic(id:any){
    return this.http.get(`http://localhost:3000/electronic/addcart/${id}`,{headers:{"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}})
  }
  deletecartfashion(id:any){
    return this.http.delete(`http://localhost:3000/fashion/deletecart/${id}`,{headers:{"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}})
  }
  deletecartelectronic(id:any){
    return this.http.delete(`http://localhost:3000/electronic/deletecart/${id}`,{headers:{"Authorization":`Bearer ${sessionStorage.getItem('jwt')}`}})
  }
  getelectronic(){
    return this.http.get("http://localhost:3000/getelectronic",{headers:{"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}})
  }
  
  //admin
  deletefashion(id:any){
    return this.http.delete(`http://localhost:3000/deletefashion/${id}`,{headers:{"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}})
  }
  updatefashion(id:any,body:any){
    console.log(id,body)
    return this.http.put(`http://localhost:3000/updatefashion/${id}`,body,{headers:{"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}})
  }
  getFashion(id:any){
    return this.http.get(`http://localhost:3000/fashion/${id}`,{headers:{"Authorization": `Bearer ${sessionStorage.getItem('jwt')}`}});
  }
  isloggedin(){
    return localStorage.getItem("token")
  }
  
}