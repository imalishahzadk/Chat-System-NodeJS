/////////////////////(a)/////////////////////
const fs=require("fs")
const url=require("url")
const http=require("http")
const server= http.createServer((req, res)=>{
    res.end("Response generated!")
    var data=url.parse(req.url,true)
    const msg=data.query
    //console.log(msg.message)
    fs.appendFileSync("chatBox.txt", msg.message+"\n");
})
server.listen(8080,"10.141.216.167",()=>{
    console.log("listening to port 8080")
})
/////////////////////(b)////////////////