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
div3board.style.backgroundColor = "#537DBD";
// 일단 작성한 게시글들, 원래는 게시글을 써야 보인다.
let div3_2 = maker("div", "id", "board2", div3);
const div3board2 = document.getElementById("board2");
div3board2.style.backgroundColor = "#F9D67A";
div3board2.style.height = "8%";
div3board2.style.width = "100%";
div3board2.style.backgroundColor = "#537DBD";
div3board2.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
let div3_3 = maker("div", "id", "board3", div3);
const div3board3 = document.getElementById("board3");
div3board3.style.backgroundColor = "#F9D67A";
div3board3.style.height = "8%";
div3board3.style.width = "100%";
div3board3.style.backgroundColor = "#537DBD";
div3board3.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
let div3_4 = maker("div", "id", "board4", div3);
const div3board4 = document.getElementById("board4");
div3board4.style.backgroundColor = "#F9D67A";
div3board4.style.height = "8%";
div3board4.style.width = "100%";
div3board4.style.backgroundColor = "#537DBD";
div3board4.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
let div3_5 = maker("div", "id", "board5", div3);
const div3board5 = document.getElementById("board5");
div3board5.style.backgroundColor = "#F9D67A";
div3board5.style.height = "8%";
div3board5.style.width = "100%";
div3board5.style.backgroundColor = "#537DBD";
div3board5.style.marginTop = "5%"; //게시글은 서로 띄어져있다.
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