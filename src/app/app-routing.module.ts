import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
  path:"signup",
  component: SignupComponent
},

{
  path:"login",
  component: LoginComponent
},
{
  path:"",
 component:HomeComponent
},
{
  path:"cart",
  component:CartComponent,canActivate:[AuthGuard]
},
{
  path:"products",
  component:ProductsComponent,canActivate:[AuthGuard]
},
{
  path:"admin",
  component:AdminComponent,canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
