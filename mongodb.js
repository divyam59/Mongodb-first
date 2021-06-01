// ALL CRUD operation in this file using mongo client

// All these statement can be destrucuterd
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId
 
//Like this

const {MongoClient,ObjectId, ObjectID}=require('mongodb')
const chalk  =require('chalk')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


//to connect to server, takes 2 arguement url + callback function
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error)
    {
        return console.log('Unable to connect to database ');
    }
    
    //creation of data

    //create database instance
    const db = client.db(databaseName)
    // //users is the name of collection
    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Amit',
    //     age:23
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to add user');
    //     }
    //     console.log(result.ops);
    // })
//     db.collection('users').insertMany([
//         {
//             name:'Divyam',
//             age:22
// ,        },{
//             name:'Yash',
//             age:23

//             }
//     ],(error,result)=>{
//         if(error)
//         {
//             return console.log('Unable to add data');
//         }
//         console.log(result.ops);
//     })
    // db.collection('tasks').insertMany([
    //     {
    //         task : 'Clean room',
    //         status:true
    //     },{
    //         task : 'Bring eggs',
    //         status:false
    //     },
    //     {
    //         task : 'Take bath',
    //         status:true
    //     }
    // ],(error,result)=>{
    //     if(error)
    //     return console.log('Unable to add data');
    //     console.log(result.ops);
    // })

    //reading of data from data base on condition, here we will use find and findOne
// db.collection('users').findOne({_id:new ObjectId("60a227e77ef04946240ec001")},(error,user)=>{
//     if(error)
//     return console.log('Unable to fetch data');
//     console.log(user);
    
// })

// db.collection('users').find({age:22}).toArray((error,user)=>{
//     console.log(user);
// })
// db.collection('users').find({age:22}).count((error,user)=>{
//     console.log(user);
// })

//callback type but updteone/many also return promise
// db.collection('users').updateOne({_id:new ObjectID("60a225e55f15b715804bff33")},{
//     $set:{
//         name:'Nishu',
//         age:18
//     }
// },(error,status)=>{
//     if(error)
//      return console.log('Unable to update data');
//      console.log(status);

// })

//Promise type
db.collection('tasks').updateMany({status:true},
    {$set:{
        status:false}
    }).then((result)=>{console.log(result)
    }).catch((e)=>{
        console.log('Error: ',error)
    })

// Delete
// db.collection('users').deleteOne({_id:new ObjectId("60a227e77ef04946240ec000")},(error,stat)=>{
//     if(error)
//     return console.log('Not able to delete')
//      console.log(stat);})
// })

// db.collection('users').deleteMany({age:23},(error,stat)=>{
//     if(error)
//     return console.log('Not able to delete')
//      console.log(stat);})
})
