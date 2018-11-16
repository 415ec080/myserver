var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200);
    res.write("hai");
    res.end();
}).listen(process.env.PORT||8081,function(){
    console.log("8081");
});