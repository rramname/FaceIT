var http=require('http')
var request = require('request');
const express = require('express');
const cors = require('cors');

const port=process.env.PORT || 3000


const app=express();

const API_KEY= process.env.Sub_KEY
// app.use(cors());
// app.use(express.static("ui"))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
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

app.get("/verify/:faceId",function(req,resp){
    console.log(req.params)
    let rbody={
        "faceId1": "748aa876-a622-4bbf-9907-5f003eddef67",
        "faceId2": req.params.faceId
    }
    var options={
        uri:"https://eastus.api.cognitive.microsoft.com/face/v1.0/verify",
        body:rbody,
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':'c4f4f912aa61409e8794b34afeb42ea9'
        },
        json: true 
    }
    
    request.post(options,(reqs,response)=>{
        console.log(response.body.isIdentical);
       resp.send(JSON.parse(response.body.isIdentical))
    })
    
})

app.listen(port, () => {
	console.log('listening'+port.toString())
})

//app.listen(port,function(){console.log('server started')});

