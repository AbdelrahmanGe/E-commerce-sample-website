import { DataType } from "./dataType"

export interface typeItem{
    imagesUrls?:string[],
    _id:string,
    userID?:string,
    discount?:number,
    price?:number,
    categoryId?:string,
    data:[DataType]
}

/*
{"imagesUrls":
["https://cdn.pixabay.com/photo/2014/05/02/21/47/workstation-336369_960_720.jpg"]
,"_id":"5eacad62cb140945300d6481",
"userID":"5eaca319759c2d34f4663c42",
"discount":20,"price":1000,
"data":[{"lang":{"id":1,"name":"eng"},
"_id":"5eacad62cb140945300d6482",
"name":"Labtop","description":"Macbook labtop"}],

"categoryId":"5eacc0a4ba43cd4b889f3d13",
"createdAt":"2020-05-01T23:14:42.753Z",
"updatedAt":"2020-05-01T23:14:42.753Z",
"__v":0}
*/