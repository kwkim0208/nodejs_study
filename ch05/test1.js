var http=require('http');
/*서버를 생성합니다.*/
var server=http.createServer();
var port=3000;
var host='192.168.1.20';
/*생성한 서버를 대기시킵니다.  */

server.listen(port,host,function (){
    console.log('웹서버가 시작되었습니다. %s:%d',host,port);
    //console.log(calc.add(2,3));
});
server.on('connection',function (socket){
    var addr=socket.address();
    console.log("클라이언트가 접속했습니다. %s:%d",addr.address,addr.port);
});
server.on('request',function (req,res){
    console.log('클라이언트 요청이 들어왔습니다.');
    console.dir(req);
    res.writeHead(200,{
        "Content-Type":"text/html; charset=UTF-8"
    });
    res.write("<DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>응답페이지</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>노드제이에스 응답페이지</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();


})
server.on('close',function (){
    console.log('서버가 종료됩니다.');
})


