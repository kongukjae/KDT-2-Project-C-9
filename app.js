const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const mysql = require('mysql2');

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
      // 회원 가입 폼 처리
      else if (req.url === '/sign-up.html') {
        const data = await fs.readFile(path.join(__dirname, 'src/html/sign-up.html'));
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        return res.end(data);
      }
    } else if (req.method === 'POST') {
      if (req.url === '/signup') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', () => {
          const formData = JSON.parse(body);
          const connection = mysql.createConnection({
            host: 'host',
            user: 'yujin',
            password: 'pw;',
            database: 'db',
          });

          connection.connect((err) => {
            if (err) {
              console.error('MySQL 연결 오류:', err);
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Internal Server Error');
              return;
            }

            const query = `INSERT INTO users (id, password, region) VALUES ('${formData.id}', '${formData.password}', '${formData.region}')`;

            connection.query(query, (err, results) => {
              if (err) {
                console.error('쿼리 실행 오류:', err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
              }

              console.log('데이터 삽입 성공:', results);

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ message: 'User created successfully' }));
            });
          });
        });
      }
    }

    // 요청에 대한 처리가 없는 경우 404 응답
    res.writeHead(404);
    return res.end('NOT FOUND');
  } catch (err) {
    // 예외 처리
    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(err.message);
  }
});

server.listen(8000, () => {
  console.log('8000번 포트에서 서버 대기 중');
});