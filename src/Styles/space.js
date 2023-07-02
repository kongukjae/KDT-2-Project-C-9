document.body.style.margin = "0px";

// root
let rootDiv = document.createElement("div");
document.body.appendChild(rootDiv);
rootDiv.setAttribute("id", "root");
rootDiv.style.backgroundColor = "#325489";
rootDiv.style.height = "844px";
rootDiv.style.width = "390px";

function maker(tagName, setName, setValue, parent) {
  const element = document.createElement(tagName);
  element.setAttribute(setName, setValue);
  parent.appendChild(element);
}
// div 3개
for (let i = 1; i < 4; i++) {
  maker("div", "id", `div${i}`, root);
}
// ⭐div1 스타일
const div1 = document.getElementById("div1");
div1.style.height = "15%";
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.backgroundColor = "#537DBD";
// div1.style.justifyContent = "space-between"; //버튼을 양 끝으로 이동
div1.style.alignItems = "center"; //가운데
div1.style.position = "relative";
// div1.style.justifyContent = "center";

//div1안에 있는 버튼1(logo),텍스트
let button1 = maker("button", "id", "button1", div1);
let text1 = maker("p", "id", "text1", div1);
let button2 = maker("button", "id", "button2", div1);

// 버튼1 스타일
const div1button = document.getElementById("button1");
div1button.style.height = "45%";
div1button.style.width = "25%";
div1button.style.marginTop = "7%";
// 버튼1 이미지
div1button.style.backgroundImage = "url('/src/img/logo.png')";
// div1button.style.backgroundSize = "cover";
div1button.style.backgroundColor = "transparent"; //버튼 색 투명
div1button.style.border = "none"; //테두리 X
div1button.style.backgroundSize = "contain"; //이미지가 다 보이게
div1button.style.backgroundRepeat = "no-repeat"; //이미지 반복X
div1button.addEventListener("click", function () {
  // 로고 클릭 시 메인페이지 새로고침
  window.location.href = "main.html";
});

// 텍스트 스타일
const div1text = document.getElementById("text1");
div1text.style.height = "5%";
div1text.style.width = "35%";
div1text.textContent = "우주 이것저것";
div1text.style.color = "white";
div1text.style.fontWeight = "bold";
div1text.style.fontSize = "18px";
div1text.style.textAlign = "center";
div1text.style.margin = "0";

// 버튼2 스타일
const div1button2 = document.getElementById("button2");
div1button2.style.height = "25%";
div1button2.style.width = "10%";
div1button2.style.marginTop = "2%"; 
div1button2.style.position = "absolute";
div1button2.style.top = "0";
div1button2.style.right = "0";
//버튼2 이미지
div1button2.style.backgroundImage = "url('/src/img/menu.png')";
div1button2.style.backgroundSize = "cover";
div1button2.style.backgroundColor = "transparent"; //버튼 색 투명
div1button2.style.border = "none"; //테두리 X

// ⭐div2 스타일
const div2 = document.getElementById("div2");
div2.style.height = "50%";
div2.style.backgroundColor = "#D9D9D9";
div2.style.display = "flex";
div2.style.flexDirection = "row";

//수정
// div2에 표시될 이미지 파일명 배열
const images = ['a.png', 'b.png', 'c.png'];
let currentImageIndex = 0; // 현재 표시되는 이미지 인덱스

// div2에 이미지를 표시하는 함수
function showImage() {
  const div2 = document.getElementById('div2');
  div2.style.backgroundImage = `url('/src/img/${images[currentImageIndex]}')`;
  div2.style.backgroundSize = 'contain';
  div2.style.backgroundRepeat = 'no-repeat';
}

// 이미지 전환을 위한 타이머 설정
let timer = setInterval(() => {
  // 다음 이미지로 인덱스 증가
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage();
}, 3000); // 3초마다 이미지 전환

// c.png가 마지막 이미지일 때 다시 a.png로 돌아가는 함수
function resetImage() {
  clearInterval(timer); // 기존 타이머 제거
  currentImageIndex = 0; // a.png로 인덱스 초기화
  showImage(); // a.png 표시

  // 새로운 타이머 설정 (c.png가 마지막 이미지에서 다시 시작)
  timer = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
  }, 3000); // 3초마다 이미지 전환
}

// 페이지 로드 시 첫 번째 이미지 표시
showImage();
//수정

// ⭐div3 스타일
const div3 = document.getElementById("div3");
div3.style.height = "50%";
div3.style.backgroundColor = "white";
div3.style.display = "flex";
div3.style.flexDirection = "row";
// div3에 버튼 추가
const buttonElement = document.createElement('button');
buttonElement.setAttribute('id', 'dateButton');
buttonElement.textContent = '날짜 선택';
div3.appendChild(buttonElement);

buttonElement.style.display = 'flex';
buttonElement.style.alignItems = 'center';
buttonElement.style.justifyContent = 'center';
buttonElement.style.height = '20%';
buttonElement.style.width = '100%';
buttonElement.style.backgroundColor = '#537DBD';
buttonElement.style.color = 'white';
buttonElement.style.border = 'none';
buttonElement.style.cursor = 'pointer';


// div3 이미지
const inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('id', 'dateInput');
inputElement.style.display = 'none'; // 초기에는 숨김 처리
div3.appendChild(inputElement);
inputElement.style.height = '20%';
// div3에 이미지를 표시할 img 요소 생성
const imageElement = document.createElement('img');
imageElement.setAttribute('id', 'imageElement');
div3.appendChild(imageElement);


// 버튼 클릭 시 입력란 표시
const dateButton = document.getElementById('dateButton');
dateButton.addEventListener('click', function () {
  const inputElement = document.getElementById('dateInput');
  inputElement.style.display = 'inline'; 
  inputElement.placeholder = 'YYYY-MM-DD'; 
});

// 나사 API
const apiKey = "UUodkOYfvl1Sjbaa8vlJ051fxfGfr8QiSZhVef1i"; 
const dateInput = document.getElementById('dateInput');
dateInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    const selectedDate = dateInput.value;
    fetchImage(selectedDate);
    dateInput.style.display = 'none'; //숨김
    dateInput.value = ''; //초기화
  }
});

function fetchImage(date) {
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // API에서 받아온 데이터 처리
      console.log(data);
      const apodImage = data.url;

      const imageElement = document.getElementById('imageElement');
      imageElement.src = apodImage;
    })
    .catch((error) => {
      // API 요청 실패 시 처리
      console.error(error);
    });
}

// 🍔메뉴창
const menuContainer = document.createElement("div");
root.appendChild(menuContainer);
menuContainer.style.position = "fixed";
menuContainer.style.top = "0";
menuContainer.style.right = "-50%";
menuContainer.style.height = "100%";
menuContainer.style.width = "50%";
menuContainer.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; //투명으로 만듦
menuContainer.style.transition = "all 0.3s ease-in-out";

const menuItems = [
  "📋게시판",
  "🎤노래소개",
  "📘우주 사전",
  "🌠우주 이것저것",
  "😎마이페이지",
  "🔑로그인·회원가입",
];
for (let i = 0; i < menuItems.length; i++) {
  const menuItem = document.createElement("a");
  menuItem.textContent = menuItems[i];

  // 페이지 추가한다면 숫자 늘리면 된다
  if (i === 0) {
    menuItem.href = "board.html";
  } else if (i === 1) {
    menuItem.href = "music.html";
  } else if (i === 2) {
    menuItem.href = "dictionary.html";
  } else if (i === 3) {
    menuItem.href = "space.html";
  } else if (i === 4) {
    menuItem.href = "mypage.html";
  } else {
    menuItem.href = "sign-in.html";
  }

  menuItem.style.display = "block";
  menuItem.style.padding = "20px";
  menuItem.style.fontSize = "18px";
  menuItem.style.color = "#000";
  menuItem.style.textDecoration = "none";
  menuItem.addEventListener("click", function () {
    menuContainer.style.right = "-50%"; //역방향으로 이동
  });
  menuContainer.appendChild(menuItem);
}
div1button2.addEventListener("click", function () {
  if (menuContainer.style.right === "-50%") {
    menuContainer.style.right = "0";
    // 메뉴창 제외 다른 것 클릭시 메뉴창이 닫아짐
    const modalBack0 = document.createElement("div");
    modalBack0.style.position = "fixed";
    modalBack0.style.top = "0";
    modalBack0.style.left = "0";
    modalBack0.style.width = "100%";
    modalBack0.style.height = "100%";
    modalBack0.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    modalBack0.style.display = "flex";
    modalBack0.style.justifyContent = "center";
    modalBack0.style.alignItems = "center";
    modalBack0.style.zIndex = "1";

    modalBack0.appendChild(menuContainer);

    document.body.appendChild(modalBack0);

    modalBack0.addEventListener("click", function (event) {
      if (event.target === modalBack0) {
        modalBack0.remove();
      }
    });
  } else {
    menuContainer.style.right = "-50%";
  }
});