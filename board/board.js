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
div1.style.justifyContent = "space-between"; //버튼을 양 끝으로 이동
//div1안에 있는 버튼1(logo), 버튼2(menu)
let button1 = maker("button", "id", "button1", div1);
let button2 = maker("button", "id", "button2", div1);
// 버튼1 스타일
const div1button = document.getElementById("button1");
div1button.style.height = "45%";
div1button.style.width = "25%";
div1button.style.margin = "auto"; //버튼을 가운데로 이동

// 버튼2 스타일
const div2button = document.getElementById("button2");
div2button.style.height = "25%";
div2button.style.width = "10%";
div2button.style.marginTop = "2%"; //위 마진

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
const div3button = document.getElementById("button3");
div3button.style.height = "55%";
div3button.style.width = "10%";
// 버튼4 스타일
const div4button = document.getElementById("button4");
div4button.style.height = "55%";
div4button.style.width = "10%";

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
const div5button = document.getElementById("button5");
div5button.style.height = "45%";
div5button.style.width = "15%";
// 버튼6 스타일
const div6button = document.getElementById("button6");
div6button.style.height = "45%";
div6button.style.width = "15%";
