import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/_model/item.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public Service:ItemService , public rout:Router) { }

  ngOnInit(): void {
  }



login(form){
this.Service.authProcessLogin(form).subscribe((p)=>{
localStorage.setItem('token',p['token'])
alert("Welcome in your Account");
this.rout.navigate(['../'])
})
}   

}



