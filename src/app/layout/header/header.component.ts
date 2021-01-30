import { Component, DoCheck, OnInit } from '@angular/core';
import { ItemService } from 'src/app/_model/item.services';
import { typeItem } from 'src/app/_model/TypeItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , DoCheck {



num:number=0;
carts:typeItem[]=[];
sum:number=9;
  constructor(public Serive:ItemService) { }

  ngOnInit(): void {

  }

  ngDoCheck(){
    this.num=this.Serive.count
    this.carts=this.Serive.cartItems
this.sum=this.Serive.getTotal();
  }

}
