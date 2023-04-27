// CommonJs 로 만듦
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type:": "text/html; charset=uf-8" });
  res.write("<h3>안녕</h3>");
  res.end("<p>내용</p>");
});
server.listen(8080);

server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기 중입니다.");
});
server.on("error", (error) => {
  console.error(error);
});
