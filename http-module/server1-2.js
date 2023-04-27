// CommonJs 로 만듦
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h3>첫번째</h3>");
    res.end("<p>내용</p>");
  })
  .listen(8080, () => {
    console.log("8080번 포트에서 대기중");
  });

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h3>두번째</h3>");
    res.end("<p>내용</p>");
  })
  .listen(8081, () => {
    console.log("8081번 포트에서 대기중");
  });
