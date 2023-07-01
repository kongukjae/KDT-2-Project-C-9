document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 입력된 데이터를 가져옵니다.
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const region = document.getElementById('region').value;

    // 서버로 데이터를 전송합니다.
    const data = { id, password, region };

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // 성공적으로 회원 가입되었을 때 수행할 작업을 여기에 작성합니다.
      })
      .catch((error) => {
        console.error('Error:', error);
        // 회원 가입 실패 시 수행할 작업을 여기에 작성합니다.
      });
  });
});
