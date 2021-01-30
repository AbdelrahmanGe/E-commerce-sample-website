import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/_model/item.services';
import { typeItem } from 'src/app/_model/TypeItem';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {



producT:any={
discount:20,
price:80,
imagesUrls:['dddddd'],
data:[{name: "pen", description: "pen an dpaper"}]
}


suggestItem:typeItem[]=[];




  constructor(public Active:ActivatedRoute,
    public Service:ItemService
    ) { }

  ngOnInit(): void {

const t= this.Active.snapshot.params.id;
console.log(t);
this.Service.GetDetails(t).subscribe((h)=>{
this.producT=h;
},
(err)=>{
  console.log(err)
}
)

let items:typeItem[]=[];
this.Service.getAllProduct().subscribe((g)=>{
items=g['product'].slice(3,12)
this.suggestItem=items;
})

}



ADDING(){
this.Service.count++;
this.Service.cartItems.push(this.producT);
}







}
