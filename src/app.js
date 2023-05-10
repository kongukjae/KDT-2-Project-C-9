const http = require("http");
const fs = require("fs").promises;
const path = require("path");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  })
  //서버 연결 8080
  .listen(8080, () => {
    console.log("8080번 서버 대기 중");
  });
