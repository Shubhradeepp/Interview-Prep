/*
Database have their own server system to manage and provide acess to the data they store

First Open cmd with administrator

mongosh --version

Start Service
net start MongoDB

Stop Service
net stop MongoDB

mongosh -> mongodb shell

table == collection
row == document
column == field

// In MONGODB Shell SHOW All Databases

show databases
// TO Create or use any Database
 use dbname

 //See All Collections in the db
 show collections

 // To see all the documents in a present collection
 db.collectionname.find()

 [
   {
     _id: ObjectId('66866f729090c7be5bcc8988'),
     id: 1,
     username: 'ice',
     age: 22
   },
   {
     _id: ObjectId('6686700b9090c7be5bcc8989'),
     id: 2,
     username: 'fire',
     age: 25
   },
   {
     _id: ObjectId('668675d308122ff3d8cc8988'),
     id: 3,
     username: 'song',
     age: 20
   }
 ]

 //Creating a new Collection
 db.createCollection("collectionname")

 // Insert
 db.collectionname.insertOne({name: "Ram", age: 23})
 
 db.collectionname.find()

 //Find with Condition
db.collectionname.find({name: "Ram"})

// $gt : 21
db.collectionname.find({$lt : 20})

//Update
db.collectionname.updateOne({name: "Ram"}, {$set: {name: "Ramesh}});

//Delete
db.collectionname.deleteOne({name: "Ram"})

 mongodb://127.0.0.1:27017/
*/