import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from 'src/app/_model/item.services';
import {typeItem} from '../../_model/TypeItem'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {


@Input() product:typeItem;


  constructor(
    public Service:ItemService
  ) {
/*
   this.product={
      imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
      _id:"mdos33dddd",
      userID:"2020ro0300ooo",
      discount:10,
      price:4000,
      categoryId:'200209399399884',
      data:[{
    _id:'39994mmmfflff',
    name:"Camara",
    description:"that is very good laptop"
      }]
    }
    */




   }

  ngOnInit(): void {
  }



AddToCart(){
this.Service.count++;
this.Service.cartItems.push(this.product)
}

}
