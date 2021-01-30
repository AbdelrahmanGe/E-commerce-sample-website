import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../_model/item.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(public rout:Router ,
    public service:ItemService
    ) { }

  ngOnInit(): void {
  }


SendData(data){
this.rout.navigate(['/home-page'])
this.service.SendProduct(data).subscribe((d)=>{
console.log(d);
alert("the process is done ")
})
console.log(data);

  }


}
