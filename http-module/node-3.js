const http = require("http");
const fs = require("fs"); //fs: FileSystem(파일처리와 관련된 기능을 하는 js라이브러리)
function serveStaticFile(response, path, contentType, responseCode) {
  fs.readFile(path, function (err, data) {
    //readFile 파일을 읽는데 사용되는 내장 메서드(비동기)
    if (err) {
      response.writeHead(500, { "Content-Type": "text/plain" }); //text/plain:읽을 수 있는 자료(그림X)의 문자열 데이터
      /* writeHead (상태코드, 헤더 정보)
      500, 인터넷 서버 에러(내부적 서버 에러) */
      response.end("500-Internal Error ");
    } else {
      response.writeHead(responseCode, { "Content-Type": contentType });
      response.end(data);
    }
  });
}

const server = http.createServer((request, response) => {
  //createServer:서버 객체 생성
  const url = request.url.toLowerCase(); //toLowerCase:문자열을 소문자로 변환

  switch (
    url //조건문이 다양하거나 복잡할 때는 switch문 사용
  ) {
    case "/":
      serveStaticFile(response, "./http-module/index.html", "text/html", 200);
      break;
    case "/about":
      serveStaticFile(response, "./http-module/about.html", "text/html", 200);
      break;
    case "/contact":
      serveStaticFile(response, "./contact.html", "text/html", 200);
      break;
    case "/style.css":
      serveStaticFile(response, "./style.html", "text/html", 200);
      break;
    case "/script.js":
      serveStaticFile(response, "./script.html", "text/html", 200);
      break;
    default:
      serveStaticFile(response, "./404.html", "text/html", 404);
  }
});

server.listen(2080, () => {
  console.log("2080번 포트");
});
