document.body.style.margin = "0px";

// root
let rootDiv = document.createElement("div");
document.body.appendChild(rootDiv);
rootDiv.setAttribute("id", "root");
rootDiv.style.backgroundColor = "#537DBD";
rootDiv.style.height = "844px";
rootDiv.style.width = "390px";

function maker(tagName, setName, setValue, parent) {
  const element = document.createElement(tagName);
  element.setAttribute(setName, setValue);
  parent.appendChild(element);
}
// div 5개
for (let i = 1; i < 6; i++) {
  maker("div", "id", `div${i}`, root);
}
// ⭐div1 스타일
const div1 = document.getElementById("div1");
div1.style.height = "15%";
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.backgroundColor = "#537DBD";
div1.style.alignItems = "center"; //가운데
div1.style.position = "relative";

//div1안에 있는 버튼1(이전), 버튼2(메뉴)
let button1 = maker("button", "id", "button1", div1);
let button2 = maker("button", "id", "button2", div1);

// 버튼1 스타일
const div1button = document.getElementById("button1");
div1button.style.height = "55%";
div1button.style.width = "10%";
div1button.style.marginTop = "2%";
div1button.style.position = "absolute";
div1button.style.top = "0";
div1button.style.left = "1%";
div1button.addEventListener("click", function () {
  //이전버튼 클릭시 게시판으로 이동
  window.location.href = "board.html";
});
// 버튼1 이미지
div1button.style.backgroundImage = "url('/src/img/previous.png')";
div1button.style.backgroundColor = "transparent"; //버튼 색 투명
div1button.style.border = "none"; //테두리 X
div1button.style.backgroundSize = "contain"; //이미지가 다 보이게
div1button.style.backgroundRepeat = "no-repeat"; //이미지 반복X

// 버튼2 스타일
const div1button2 = document.getElementById("button2");
div1button2.style.height = "30%";
div1button2.style.width = "10%";
div1button2.style.marginTop = "2%"; //위 마진
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
div2.style.height = "5%";
div2.style.width = "100%";
div2.style.backgroundColor = "#D9D9D9";
div2.style.display = "flex";
div2.style.flexDirection = "row";
div2.style.alignItems = "center";
div2.style.justifyContent = "start";
div2.style.paddingBottom = "5%";

//div2안에 있는 텍스트1
let text1 = maker("div", "id", "text1", div2);
let text2 = maker("div", "id", "text2", div2);

const div2text1 = document.getElementById("text1");
// div2text1.textContent = "카테고리";
div2text1.textContent = "자랑"; //임시로 넣은 카테고리명
div2text1.style.color = "#EEF49F";
div2text1.style.fontWeight = "bold";

div2text1.style.width = "25%";
div2text1.style.height = "100%";
div2text1.style.backgroundColor = "#9BAAC2";
div2text1.style.alignItems = "center";
div2text1.style.justifyContent = "center";
div2text1.style.display = "flex";

const div2text2 = document.getElementById("text2");
// div2text2.textContent = "제목";
div2text2.textContent = "슈퍼문 찍었어요!🌕"; //임시로 넣은 제목
div2text2.style.width = "75%";
div2text2.style.height = "100%";
div2text2.style.alignItems = "center";
div2text2.style.justifyContent = "center";
div2text2.style.display = "flex";

// ⭐div3 스타일
const div3 = document.getElementById("div3");
div3.style.height = "45%";
div3.style.backgroundColor = "#D9D9D9";

// div3안에 있는 이미지와 내용
let div3_1 = maker("img", "id", "img", div3); //게시글에 이미지가 있는지 확인하는 것 만들기
let div3_2 = maker("div", "id", "content", div3);

// 이미지
const div3img = document.getElementById("img");
div3img.style.width = "70%";
div3img.style.height = "50%";
// div3img.style.backgroundColor = "#D9D9D9";
div3img.style.backgroundImage = "url('/src/img/moonEx.jpg')"; //임의로 넣은 사진
div3img.style.backgroundSize = "cover";
div3img.style.backgroundColor = "transparent"; //버튼 색 투명
div3img.style.border = "none"; //테두리 X

// 게시글 내용
const div3text = document.getElementById("content");
div3text.style.width = "100%";
div3text.style.height = "50%";
div3text.style.overflowY = "scroll"; //게시글 내용이 길어지면 스크롤
div3text.style.display = "flex"; //왼쪽으로 하기위해 추가
div3text.style.justifyContent = "start"; //왼쪽~.
div3text.textContent = "사진 잘 찍었나요?"; //임시로 넣은 글 내용

// ⭐div4 스타일
const div4 = document.getElementById("div4");
div4.style.height = "5%";
div4.style.width = "100%";
div4.style.backgroundColor = "#D9D9D9";
// div4.style.display = "flex";

//div4에 버튼, p태그 1(누적값), div1(안내문구)
// 버튼
let button3 = maker("button", "id", "best", div4);
const div4button = document.getElementById("best");
// div4button.style.backgroundImage = "url('/src/img/recommended.png')";
// div4button.style.backgroundSize = "cover";
div4button.style.backgroundColor = "transparent"; //버튼 색 투명
div4button.style.border = "none"; //테두리 X
div4button.style.height = "100%";
div4button.style.width = "10%";
div4button.textContent = "👍🏻";
div4button.style.fontSize = "30px";

// 누적값
let sum = maker("span", "id", "counter", div4);
const div4span = document.getElementById("counter");
div4span.style.width = "20%";
div4span.style.height = "100%";

// 추천 안내문구
let text3 = maker("div", "id", "w", div4);
const div4text = document.getElementById("w");
div4text.textContent = "⚠추천은 한 번만 가능합니다.";
div4text.style.display = "none";
div4text.style.height = "100%";

// 버튼 클릭하면 증가
// 누적값을 저장할 변수
let counter = 0;
// 이미지를 클릭했는지 체크할 변수
let clicked = false;

// 이미지를 클릭할 때 호출되는 함수
function incrementCounter() {
  if (!clicked) {
    // 이미 클릭한 경우 중복 클릭 방지
    counter++; // 누적값 증가
    document.getElementById("counter").innerText = counter; // 누적값을 화면에 표시
    clicked = true; // 클릭 상태를 true로 변경
  } else {
    div4text.style.display = "block"; // 2번 이상 클릭시 나오는 안내창
  }
}

// 이미지 요소에 클릭 이벤트 리스너 등록
document.getElementById("best").addEventListener("click", incrementCounter);

// ⭐div5 스타일
const div5 = document.getElementById("div5");
div5.style.height = "30%";
div5.style.width = "100%";
div5.style.backgroundColor = "#D9D9D9";
div5.style.borderTop = "1px solid  black";

// div5에 댓글 추가 버튼
let button4 = maker("button", "id", "textbtn", div5);
const div5button = document.getElementById("textbtn");
div5button.style.width = "20%";
div5button.style.height = "10%";
div5button.style.display = "flex"; //왼쪽으로 하기위해 추가
// div5button.style.justifyContent = "start"; //왼쪽~.
div5button.textContent = "댓글 쓰기";
div5button.style.fontSize = "15px";
div5button.style.padding = "2px";
div5button.style.backgroundColor = "#9BAAC2";
div5button.style.border = "none";
div5button.style.borderRadius = "5px";

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
