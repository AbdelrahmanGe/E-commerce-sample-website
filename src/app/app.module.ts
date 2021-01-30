import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import {ItemService} from '../app/_model/item.services';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
