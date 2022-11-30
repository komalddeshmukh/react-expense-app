const mongoose=require('mongoose')

const connect = mongoose.connect('mongodb+srv://Komal_money:Komal%407840@cluster0.16xjfbq.mongodb.net/test',{useNewUrlParser:true, useUnifiedTopology: true})
// we just check the connection by using below code
const connection= mongoose.connection
connection.on('error', err=> console.log(err))

connection.on('connecte',()=> console.log("MongoDB connection is successful!!"))