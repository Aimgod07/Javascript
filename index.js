const http = require("http"); 
 
const server=  http.createServer((req, res )=>{
if (req.url==="about"){
    res.end("<h2>About</h2>");}
else if (req.url==="/"){
    res.end("<h1>Home Page</h1>");}
else{
    res.end("Page not found");
}


 });

 server.listen(5000, ()=>{
  console.log("server is working");
 });