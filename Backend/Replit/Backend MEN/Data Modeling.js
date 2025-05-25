// New Schema file  -> Person.js


let a=5
let b=6
let c= a+b
console.log(c);
let api=fetch(" https://api.github.com/user")
console.log(api);


// E- Commerce
user.model.js

import mongoose from "mongoose"


const userSchema = new mongoose.Schema(
{
username:
{
type:string,
required:true,
unique:true,
lowercase:true
},
email :
{
type:string,
required:true,
unique:true,
lowercase:true
},

password:
{
type:string,
required:true,
},



},{timestamp:true})

export const User=mongoose.model("User",userSchema)


catagory.model.js


import mongoose from "mongoose"


const catagorySchema = new mongoose.Schema(
{
username:
{
type:string,
required:true,
},
},{timestamp:true})

export const Catagory=mongoose.model("Catagory",catagorySchema)



product.model.js

import mongoose from "mongoose"


const productSchema = new mongoose.Schema(
{
description:
{
type:string,
required:true,
},
name:
{
type:string,
required:true,
},
productImg :
{
type:string
},
price :
{
type:Number,
default:10
},
stock{
type:Number,
default:0

},
catagory:{
type: mongoose.Schema.Types.ObjectId,
ref:"Catagory",
required:true
},
owner{
type:mongoose.Schema.Types.ObjectId
ref:"User"
},
},{timestamp:true})

export const Product=mongoose.model("Product",productSchema)



order.model.js


import mongoose from "mongoose"

const orderitemSchema = new mongoose.Schema({
productId:
{type: mongoose.Schema.Types.OrderId,
ref:"Product"
},
quantity:
{
type: Number,
required:true},
})


const orderSchema = new mongoose.Schema(
{
Orderprice:
{
type:Number,
required:true,
},
customer{
type: mongoose.Schema.Types.OrderId,
ref:"User"
},
OrderItems{
type:[orderitemSchema]
},
address{
type:String,
required:true
},
Status:{
type:String,
enum:["PENDING","CANCELLED","DELIVERED"],
required:true}

},{timestamp:true})

export const Order = mongoose.model("Order",orderSchema)








//HOSPITAL MANAGEMENT


doctor.model.js


import mongoose from "mongoose"


const doctorSchema = new mongoose.Schema(
{
name:
{
type:string,
required:true,
},
email :
{
type:string,
required:true,
unique:true,
lowercase:true
},

salary:
{
type:Number,
required:true,
},
qualifications:
{
type:string,
required:true,
},
experiences:
{
type:Number,
default:0
},

worksInHospital:[
{type: mongoose.Schema.Types.OrderId,
ref:"Hospital"},
],

},{timestamp:true})

export const Doctor=mongoose.model("Doctor",doctorSchema)






patient.model.js


import mongoose from "mongoose"


const patientSchema = new mongoose.Schema(
{
name:
{
type:String,
required:true
},
email :
{
type:string,
required:true,
unique:true,
lowercase:true
},
address:
{
type:String,
required:true
},
diagonseWith:
{
type:String,
required:true
},
age:
{
type:Number,
required:true
},
bloodgroup:{
type:String,
required:true},
gender:{
type:String,
enum:["MALE", "FEMALE", "OTHERS"],
required:true},

admittedIn:{
type: mongoose.Schema.Types.OrderId,
ref:"Hospital"

}


},{timestamp:true})

export const Patient=mongoose.model("Patient",patientSchema)






hospital.model.js


import mongoose from "mongoose"


const hospitalSchema = new mongoose.Schema(
{
name:
{
type:string,
required:true,
},
adressl1 :
{
type:string,
required:true,
},
adressl2 :
{
type:string
},

city:
{
type:string,
required:true,
},
pincode:
{
type:string,
required:true,
},
specilizedIn:[
{
type:String
}],




},{timestamp:true})

export const Hospital=mongoose.model("Hospital",hospitalSchema)






medicalRecord.model.js

import mongoose from "mongoose"


const userSchema = new mongoose.Schema(
{
username:
{
type:string,
required:true,
unique:true,
lowercase:true
},
email :
{
type:string,
required:true,
unique:true,
lowercase:true
},

password:
{
type:string,
required:true,
},



},{timestamp:true})

export const User=mongoose.model("User",userSchema)





