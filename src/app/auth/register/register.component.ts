import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/_model/item.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public Service:ItemService , public rout:Router) { }

  ngOnInit(): void {
  }



onsubmit(form){
this.Service.authProcessRegister(form).subscribe((b)=>{
console.log(b);
alert("Now , you  are registered")
this.rout.navigate(['/home-page'])
})

}

}
