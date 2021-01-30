import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/_model/item.services';
import { typeItem } from 'src/app/_model/TypeItem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
/*
product:typeItem[]=[
  {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  },
  {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  },
  {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  }, {
    imagesUrls:['../../../assets/img/smartphone-corporate-14-1.png'],
    _id:"mdos33dddd",
    userID:"2020ro0300ooo",
    discount:10,
    price:4000,
    categoryId:'200209399399884',
    data:[{
  _id:'39994mmmfflff',
  name:"LapTOP2030",
  description:"that is very good laptop"
    }]
  },


]
*/
numOfSort=""
pageSize:number=9;
current:number=0;
searchValue:string='';
public product:any[]=[];
  constructor(public Service:ItemService) { }

  ngOnInit(): void {

this.Service.getAllProduct().subscribe((DataApi)=>{
  this.product=DataApi['product']
})

  }


getLength():number[]{
let PageLenght:number[]=[];
for(let y=0 ; y<this.product.length/this.pageSize; y++){
PageLenght.push(y+1);
}
return PageLenght;
}



Pagenation():typeItem[]{
let start=this.current*this.pageSize;
let end=(this.pageSize*this.current)+this.pageSize
 return this.sorting().slice(start , end)
}


Searchval(val:string){
this.searchValue=val.toLowerCase();
}

ResultSearch():typeItem[]{
let search=this.product.filter((d)=>{
return d.data[0].name.toLowerCase().includes(this.searchValue);
})
return search
}


sort(v){
this.numOfSort=v;  
}


sorting():typeItem[]{
let s :typeItem[]=[];
if(this.numOfSort==='2'){
s= this.ResultSearch().sort((a:typeItem,b:typeItem)=>{
return a.price-b.price
})
}else if (this.numOfSort==='3'){

s=this.ResultSearch().sort((a:typeItem,b:typeItem)=>{
  return b.price-a.price
})
}else{
s=this.ResultSearch();
}

return s;

}





}
