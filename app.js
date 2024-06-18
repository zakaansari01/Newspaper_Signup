const express=require('express');
const bodyParser=require('body-parser');
const https=require('https');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",(req,res)=>{
    var firstName=req.body.fName;
    var lastName=req.body.lName;
    var email=req.body.email;
    console.log(firstName, lastName, email);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

//e91abf675f1162e05a6f699a76581050-us21