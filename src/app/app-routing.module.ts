import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';

const routes: Routes = [
{path:'home-page', component:DropdownComponent},
{path:'product/product-list' , component:ProductListComponent},
{path:'home-page/login', component:LoginComponent },
{path:'home-page/login/register' , component:RegisterComponent},
{path:'product/add-product' , component:AddProductComponent},
{path:'product/details/:id' , component:ProductDetailsComponent},
{path:'**' ,component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
