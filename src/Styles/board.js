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
// div 4개
for (let i = 1; i < 5; i++) {
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
div1text.style.width = "25%";
div1text.textContent = "게시판";
div1text.style.color = "white";
div1text.style.fontWeight = "bold";
div1text.style.fontSize = "18px";
div1text.style.textAlign = "center";
div1text.style.margin = "0";

// 버튼2 스타일
const div1button2 = document.getElementById("button2");
div1button2.style.height = "25%";
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
div2.style.height = "7%";
div2.style.backgroundColor = "#325489";
div2.style.display = "flex";
div2.style.justifyContent = "flex-end"; //버튼을 오른쪽에 배치
div2.style.alignItems = "flex-end"; //텍스트와 버튼을 하단 배치
//div2안에 있는 버튼3(카테고리), 버튼4(쓰기)
let div2_1 = maker("button", "id", "button3", div2);
let div2_2 = maker("button", "id", "button4", div2);

// 버튼3 스타일
const div2button = document.getElementById("button3");
div2button.style.height = "55%";
div2button.style.width = "10%";
div2button.style.marginBottom = "1%";
//버튼3 이미지
div2button.style.backgroundImage = "url('/src/img/tag.png')";
div2button.style.backgroundColor = "transparent"; //버튼 색 투명
div2button.style.border = "none"; //테두리 X
div2button.style.backgroundSize = "contain"; //이미지가 다 보이게
div2button.style.backgroundRepeat = "no-repeat"; //이미지 반복X

// 버튼4 스타일
const div2button2 = document.getElementById("button4");
div2button2.style.height = "55%";
div2button2.style.width = "10%";
div2button2.style.marginBottom = "1%";
div2button2.addEventListener("click", function () {
  // 글쓰기 버튼 클릭시 게시글 작성으로 이동
  window.location.href = "post.html";
});

//버튼4 이미지
div2button2.style.backgroundImage = "url('/src/img/writing.png')";
div2button2.style.backgroundColor = "transparent"; //버튼 색 투명
div2button2.style.border = "none"; //테두리 X
div2button2.style.backgroundSize = "contain"; //이미지가 다 보이게
div2button2.style.backgroundRepeat = "no-repeat"; //이미지 반복X

// ⭐div3 스타일
const div3 = document.getElementById("div3");
div3.style.height = "68%";
div3.style.backgroundColor = "#325489";
// ❗게시글 추가 if문 사용으로 게시글이 늘어나게 바꿔야함
let div3_1 = maker("div", "id", "board", div3);
const div3board = document.getElementById("board");
div3board.style.backgroundColor = "#F9D67A";
div3board.style.height = "8%";
div3board.style.width = "100%";
div3board.style.display = "flex";
div3board.style.alignItems = "center";

div3board.style.backgroundColor = "#537DBD";
div3board.addEventListener("click", function () {
  // 버튼 클릭 시 게시글 이동
  window.location.href = "postRead.html";
});
//게시글1
let div3c_1 = maker("div", "id", "c1", div3board);
const div3_a = document.getElementById("c1");

div3_a.textContent = "자랑";
div3_a.style.color = "#EEF49F";
div3_a.style.fontWeight = "bold";
div3_a.style.fontSize = "18px";
div3_a.style.marginLeft = "2%";

let div3c_2 = maker("div", "id", "c2", div3board);
const div3_b = document.getElementById("c2");
div3_b.textContent = "슈퍼문 찍었어요!";
div3_b.style.color = "white";
div3_b.style.fontSize = "18px";
div3_b.style.marginLeft = "5%";


// 일단 작성한 게시글들, 원래는 게시글을 써야 보인다.
let div3_2 = maker("div", "id", "board2", div3);
const div3board2 = document.getElementById("board2");
div3board2.style.backgroundColor = "#F9D67A";
div3board2.style.height = "8%";
div3board2.style.width = "100%";
div3board2.style.backgroundColor = "#537DBD";
div3board2.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
div3board2.style.display = "flex";
div3board2.style.alignItems = "center";

//게시글2
let div3c_2a = maker("div", "id", "c2a", div3board2);
const div3_2a = document.getElementById("c2a");

div3_2a.textContent = "정보";
div3_2a.style.color = "#E473F6";
div3_2a.style.fontWeight = "bold";
div3_2a.style.fontSize = "18px";
div3_2a.style.marginLeft = "2%";


let div3c_2b = maker("div", "id", "c2b", div3board2);
const div3_2b = document.getElementById("c2b");
div3_2b.textContent = "5월 반영월식에 대해";
div3_2b.style.color = "white";
div3_2b.style.fontSize = "18px";
div3_2b.style.marginLeft = "5%";

let div3_3 = maker("div", "id", "board3", div3);
const div3board3 = document.getElementById("board3");
div3board3.style.backgroundColor = "#F9D67A";
div3board3.style.height = "8%";
div3board3.style.width = "100%";
div3board3.style.backgroundColor = "#537DBD";
div3board3.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
div3board3.style.display = "flex";
div3board3.style.alignItems = "center";

//게시글3
let div3c_3a = maker("div", "id", "c3a", div3board3);
const div3_3a = document.getElementById("c3a");

div3_3a.textContent = "궁금";
div3_3a.style.color = "blue";
div3_3a.style.fontWeight = "bold";
div3_3a.style.fontSize = "18px";
div3_3a.style.marginLeft = "2%";

let div3c_3b = maker("div", "id", "c3b", div3board3);
const div3_3b = document.getElementById("c3b");
div3_3b.textContent = "강원도에서 달이 잘 보이는 곳은?";
div3_3b.style.color = "white";
div3_3b.style.fontSize = "18px";
div3_3b.style.marginLeft = "5%";

let div3_4 = maker("div", "id", "board4", div3);
const div3board4 = document.getElementById("board4");
div3board4.style.backgroundColor = "#F9D67A";
div3board4.style.height = "8%";
div3board4.style.width = "100%";
div3board4.style.backgroundColor = "#537DBD";
div3board4.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
div3board4.style.display = "flex";
div3board4.style.alignItems = "center";

//게시글4
let div3c_4a = maker("div", "id", "c4a", div3board4);
const div3_4a = document.getElementById("c4a");

div3_4a.textContent = "기타";
div3_4a.style.color = "#B00DBE";
div3_4a.style.fontWeight = "bold";
div3_4a.style.fontSize = "18px";
div3_4a.style.marginLeft = "2%";

let div3c_4b = maker("div", "id", "c4b", div3board4);
const div3_4b = document.getElementById("c4b");
div3_4b.textContent = "내일 비온다던데";
div3_4b.style.color = "white";
div3_4b.style.fontSize = "18px";
div3_4b.style.marginLeft = "5%";

let div3_5 = maker("div", "id", "board5", div3);
const div3board5 = document.getElementById("board5");
div3board5.style.backgroundColor = "#F9D67A";
div3board5.style.height = "8%";
div3board5.style.width = "100%";
div3board5.style.backgroundColor = "#537DBD";
div3board5.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
div3board5.style.display = "flex";
div3board5.style.alignItems = "center";


//게시글5
let div3c_5a = maker("div", "id", "c5a", div3board5);
const div3_5a = document.getElementById("c5a");

div3_5a.textContent = "자랑";
div3_5a.style.color = "#EEF49F";
div3_5a.style.fontWeight = "bold";
div3_5a.style.fontSize = "18px";
div3_5a.style.marginLeft = "2%";

let div3c_5b = maker("div", "id", "c5b", div3board5);
const div3_5b = document.getElementById("c5b");
div3_5b.textContent = "북두칠성 사진";
div3_5b.style.color = "white";
div3_5b.style.fontSize = "18px";
div3_5b.style.marginLeft = "5%";
let div3_6 = maker("div", "id", "board6", div3);


const div3board6 = document.getElementById("board6");
div3board6.style.backgroundColor = "#F9D67A";
div3board6.style.height = "8%";
div3board6.style.width = "100%";
div3board6.style.backgroundColor = "#537DBD";
div3board6.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
let div3_7 = maker("div", "id", "board7", div3);
const div3board7 = document.getElementById("board7");
div3board7.style.backgroundColor = "#F9D67A";
div3board7.style.height = "8%";
div3board7.style.width = "100%";
div3board7.style.backgroundColor = "#537DBD";
div3board7.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
let div3_8 = maker("div", "id", "board8", div3);
const div3board8 = document.getElementById("board8");
div3board8.style.backgroundColor = "#F9D67A";
div3board8.style.height = "8%";
div3board8.style.width = "100%";
div3board8.style.backgroundColor = "#537DBD";
div3board8.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
let div3_9 = maker("div", "id", "board9", div3);
const div3board9 = document.getElementById("board9");
div3board9.style.backgroundColor = "#F9D67A";
div3board9.style.height = "8%";
div3board9.style.width = "100%";
div3board9.style.backgroundColor = "#537DBD";
div3board9.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
// ⭐div4 스타일
const div4 = document.getElementById("div4");
div4.style.height = "10%";
div4.style.backgroundColor = "#325489";
div4.style.display = "flex";
div4.style.alignItems = "center";
div4.style.justifyContent = "center";

//div4안에 있는 버튼5(이전), 버튼6(다음)
let div4_1 = maker("button", "id", "button5", div4);
let div4_2 = maker("button", "id", "button6", div4);
// 버튼5 스타일
const div4button = document.getElementById("button5");
div4button.style.height = "45%";
div4button.style.width = "15%";
div4button.textContent = "이전";
// div4button.style.fontSize = "";
div4button.style.backgroundColor = "transparent";
div4button.style.border = "none"; //테두리 X
div4button.style.color = "white";

// 버튼6 스타일
const div4button2 = document.getElementById("button6");
div4button2.style.height = "45%";
div4button2.style.width = "15%";
div4button2.textContent = "다음";
div4button2.style.backgroundColor = "transparent";
div4button2.style.border = "none";
div4button2.style.color = "white";


// 카테고리 모달창
function showModal() {
  const modalBack = document.createElement("div");
  modalBack.style.position = "fixed";
  modalBack.style.top = "0";
  modalBack.style.left = "0";
  modalBack.style.width = "100%";
  modalBack.style.height = "100%";
  modalBack.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  modalBack.style.display = "flex";
  modalBack.style.justifyContent = "center";
  modalBack.style.alignItems = "center";
  modalBack.style.zIndex = "1";

  const modalContent = document.createElement("div");
  modalContent.style.backgroundColor = "#6376A6";
  modalContent.style.padding = "20px";
  modalContent.style.fontSize = "18px";
  modalContent.style.width = "70%";

  modalContent.style.textAlign = "center";

  const modalTitle = document.createElement("p");
  modalTitle.textContent = "카테고리";
  modalTitle.style.fontWeight = "bold";

  const p1 = document.createElement("p");
  p1.textContent = "자랑";
  p1.style.fontSize = "25px";
  p1.style.color = "#EEF49F";
  p1.style.fontWeight = "bold";

  const p2 = document.createElement("p");
  p2.textContent = "정보";
  p2.style.fontSize = "25px";
  p2.style.color = "#E473F6";
  p2.style.fontWeight = "bold";

  const p3 = document.createElement("p");
  p3.textContent = "궁금";
  p3.style.fontSize = "25px";
  p3.style.color = "blue";
  p3.style.fontWeight = "bold";

  const p4 = document.createElement("p");
  p4.textContent = "기타";
  p4.style.fontSize = "25px";
  p4.style.color = "#B00DBE";
  p4.style.fontWeight = "bold";

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(p1);
  modalContent.appendChild(p2);
  modalContent.appendChild(p3);
  modalContent.appendChild(p4);

  modalBack.appendChild(modalContent);

  document.body.appendChild(modalBack);

  modalBack.addEventListener("click", function (event) {
    if (event.target === modalBack) {
      modalBack.remove();
    }
  });
}

div2button.addEventListener("click", showModal);

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
