var http=require('http')
var request = require('request');
const express = require('express');
const cors = require('cors');

const port=process.env.PORT || 3000


const app=express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const API_KEY= process.env.Sub_KEY
// app.use(cors());
// app.use(express.static("ui"))
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
  });
  
app.get("/",function(req,resp){
    resp.send("Hello")
})
app.post("/getFaceData",function(req,resp){
    
    var options={
        uri:"https://eastus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=age,glasses,emotion",
        body:req,
        method:'POST',
        headers:{
            'Content-Type':'application/octet-stream',
            'Ocp-Apim-Subscription-Key':API_KEY
        }
    }
    request.post(options,(req,response)=>{
        
       resp.send(JSON.parse(response.body))
    })
    
})

app.post("/verify",function(req,resp){
    console.log(req.body.faceId)
    //resp.send("hello")
    let rbody={
        "faceId1": "748aa876-a622-4bbf-9907-5f003eddef67",
        "faceId2": req.body.faceId
    }
    var options={
        uri:"https://eastus.api.cognitive.microsoft.com/face/v1.0/verify",
        body:rbody,
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':API_KEY
        },
        json: true 
    }
    
    request.post(options,(reqs,response)=>{
        //console.log(response.body.isIdentical);
       resp.send(JSON.parse(JSON.stringify(response.body)))
    })
    
})

app.listen(port, () => {
	console.log('listening'+port.toString())
})

//app.listen(port,function(){console.log('server started')});

