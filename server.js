var http=require('http')
var request = require('request');
const express = require('express');
const cors = require('cors');

const port=process.env.PORT || 3000


const app=express();

const API_KEY=process.env.Sub_KEY
app.use(cors());
app.use(express.static("ui"))

app.get("/iisnode/server/home",function(req,resp){
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
    console.log(req.params.faceId);
    let rbody={
        "faceId1": "c8471146-acea-48a3-8d07-b09620fff1fe",
        "faceId2": req.params.faceId
    }
    var options={
        uri:"https://eastus.api.cognitive.microsoft.com/face/v1.0/verify",
        body:rbody,
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':API_KEY
        }
    }
    request.post(options,(req,response)=>{
        
       resp.send(JSON.parse(response.body))
    })
    
})

app.listen(process.env.PORT, () => {
	console.log('listening')
})

//app.listen(port,function(){console.log('server started')});

