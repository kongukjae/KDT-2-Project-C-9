const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const mysql = require('mysql2');
// MySQL 연결 정보를 설정합니다
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'yujin324',
  port:3306,
  database: 'sign',
  insecureAuth : true


});


// MySQL에 연결합니다
connection.connect(function(err) {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
  }
  console.log('MySQL 연결 성공');
});

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      if (req.url === '/') {
        const absolutePath = path.resolve(__dirname, 'src/html/main.html');
        const data = await fs.readFile(absolutePath);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      } else if (req.url === '/nasa.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/nasa.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }else if (req.url === '/main.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/main.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }else if (req.url === '/dictionary.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/dictionary.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }else if (req.url === '/music.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/music.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }else if (req.url === '/board.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/board.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }else if (req.url === '/mypage.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/mypage.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }else if (req.url === '/post.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/post.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }else if (req.url === '/postRead.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/postRead.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }else if (req.url === '/profile.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/profile.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }else if (req.url === '/sign-in.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/sign-in.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }else if (req.url === '/sign-up.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/sign-up.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }
      try {
        const data = await fs.readFile(path.join(__dirname, req.url));
        return res.end(data);
      } catch (err) {
      }
    }
    res.writeHead(404);
    return res.end('NOT FOUND');
  } catch (err) {
    res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(err.message);
  }
});

server.listen(8000, () => {
  console.log('8000번 포트에서 서버 대기 중');
});
