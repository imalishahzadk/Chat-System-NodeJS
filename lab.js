// import http from "http"
const http= require("http")
// import EventEmitter from "events"
const events= require("events")


const event= new events()
event.on("click", ()=>{
    console.log("Response has sent!")
})
event.on("click", ()=>{
    console.log("Response has sent!")
})
event.on("click", ()=>{
    console.log("Response has sent!")
})


const myName={name:"Ali Shahzad"}
console.log(myName.name)
const jsonObj= JSON.stringify(myName)
console.log(json)


const server= http.createServer((req, res)=>{
    res.write(myName.name)
    res.write(jsonObj)
    res.write("<h1>Ali Shahzad</h1>")
    res.end()
    event.emit("click")
})



server.listen(8000,"localhost",()=>{
    console.log("listening to port 8000")
})