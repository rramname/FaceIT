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
 app.use(cors());
 app.use(express.static("ui"))

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

app.post("/verify",cors(),function(req,resp){
    console.log(req.body.faceIds)
   
    let rbody={
        "personGroupId":"wardbell",
        "faceIds":[req.body.faceIds]
    }
    var options={
        uri:"https://eastus.api.cognitive.microsoft.com/face/v1.0/identify",
        body:rbody,
        method:'POST',
        headers:{
            'Ocp-Apim-Subscription-Key':API_KEY
        },
        json:true
    }
    
    request.post(options,(reqs,response)=>{
        resp.send(JSON.parse(JSON.stringify(response)))
       //resp.send(false)
    })
    
})

app.listen(port, () => {
	console.log('listening'+port.toString())
})

//app.listen(port,function(){console.log('server started')});

