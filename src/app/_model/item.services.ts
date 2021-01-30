import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { typeItem } from "./TypeItem";

@Injectable()

export class ItemService{


public count:number=0;
public baseUrl="https://mearn-stack-backend-test.herokuapp.com/";
public cartItems:typeItem[]=[];
constructor(public clint:HttpClient){}



getAllProduct(){
return this.clint.get(this.baseUrl+'product')
}

SendProduct(data){
const token=localStorage.getItem('token');
const header=new HttpHeaders({
Authorization:token
});
console.log(header);
return this.clint.post(this.baseUrl+'product/add',{
    imagesUrls:['https://images.unsplash.com/photo-1590292339487-25ad0d60f3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'],
    discount:data.discount,
    price:data.price,
    data:[{lang:{"id":1,name:"eng"},
    name:data.name,
    description:data.description}],
    categoryId:'5eacc0a4ba43cd4b889f3d13'
},{headers:header}
)
}


GetDetails(id){
return this.clint.get(this.baseUrl+'product/'+id)
}

getTotal():number{
let sum:number=9;    
for(let b = 0 ; b< this.cartItems.length ; b++){
sum+=this.cartItems[b].price;
}
return sum;
}


authProcessRegister(ob){

return this.clint.post(this.baseUrl+'user/register',{
email:ob.email,
password:ob.Password,
repeatedPassword:ob.rePassword
})



}
authProcessLogin(ob){
return this.clint.post(this.baseUrl+'user/login',{
email:ob.email,
password:ob.password
})

}







}