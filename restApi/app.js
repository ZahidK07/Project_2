let express = require ('express');
let app = express();
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient;
const MongoUrl = "mongodb://localhost:27017";
const dotenv = require('dotenv')
dotenv.config()
let port = process.env.PORT || 7981;
var db;


//get request
app.get('/', (req,rest)=>{
    rest.send('Welcome to express')
})

app.get('/category',(req,res)=>{
    db.collection('category').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(MongoUrl, (err, connection)=>{
    if(err) console.log('Error While Connecting');
    db = connection.db('SupplementData');
    app.listen(port,()=>{
    console.log(`Listing to the port ${port}`)
    })
})










        


