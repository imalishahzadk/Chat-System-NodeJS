const http=require("http")
const fs= require("fs")


const server= http.createServer((req, res)=>{
    //res.end("Response generated!")
    if(req.url=="/home")
    {
        fs.readFile("home.html","utf-8",(err, data)=>{
            res.end(data)
        })
    }
    else if(req.url=="/signin")
    {
        fs.readFile("signin.html","utf-8",(err, data)=>{
            res.end(data)
        })
    }
    else if(req.url=="/signup")
    {
        fs.readFile("signup.html","utf-8",(err, data)=>{
            res.end(data)
        })
    }
    else if(req.url=="/about")
    {
        fs.readFile("about.html","utf-8",(err, data)=>{
            res.end(data)
        })
    }
    else if(req.url=="/contact")
    {
        fs.readFile("contact.html","utf-8",(err, data)=>{
            res.end(data)
        })
    }
    else
    res.end("error 404! page not found!")
})
server.listen(8000,"localhost",()=>{
    console.log("listening to port 8000")

})