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
// div 6개
for (let i = 1; i < 7; i++) {
  maker("div", "id", `div${i}`, root);
}
// ⭐div1 스타일
const div1 = document.getElementById("div1");
div1.style.height = "7.5%";
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.backgroundColor = "#537DBD";
// div1.style.justifyContent = "space-between"; //버튼을 양 끝으로 이동
div1.style.alignItems = "center"; //가운데
div1.style.position = "relative";
// div1.style.justifyContent = "center";

//div1안에 있는 버튼1(이전), 버튼2(메뉴)
let button1 = maker("button", "id", "button1", div1);
let button2 = maker("button", "id", "button2", div1);

// 버튼1 스타일
const div1button = document.getElementById("button1");
div1button.style.height = "25%";
div1button.style.width = "10%";
div1button.style.marginTop = "2%";
div1button.style.position = "absolute";
div1button.style.top = "0";
div1button.style.left = "1%";
// 버튼1 이미지
div1button.style.backgroundImage = "url('./img/previous.png')";
// div1button.style.backgroundSize = "cover";
div1button.style.backgroundColor = "transparent"; //버튼 색 투명
div1button.style.border = "none"; //테두리 X
div1button.style.backgroundSize = "contain"; //이미지가 다 보이게
div1button.style.backgroundRepeat = "no-repeat"; //이미지 반복X

// 버튼2 스타일
const div1button2 = document.getElementById("button2");
div1button2.style.height = "25%";
div1button2.style.width = "10%";
div1button2.style.marginTop = "2%"; //위 마진
div1button2.style.position = "absolute";
div1button2.style.top = "0";
div1button2.style.right = "0";
//버튼2 이미지
div1button2.style.backgroundImage = "url('./img/menu.png')";
div1button2.style.backgroundSize = "cover";
div1button2.style.backgroundColor = "transparent"; //버튼 색 투명
div1button2.style.border = "none"; //테두리 X

// 버튼3(모달창) 스타일
const div1modal = document.getElementById("guide");
div1modal.style.height = "25%";
div1modal.style.width = "10%";
div1modal.style.marginTop = "2%"; //위 마진
//버튼3(모달창) 이미지
div1modal.style.backgroundImage = "url('./img/guide.png')";
div1modal.style.backgroundSize = "cover";
div1modal.style.backgroundColor = "transparent"; //버튼 색 투명
div1modal.style.border = "none"; //테두리 X

// ⭐div2 스타일
const div2 = document.getElementById("div2");
div2.style.height = "7.5%";
div2.style.width = "100%";
div2.style.backgroundColor = "#325489";
div2.style.display = "flex";
div2.style.flexDirection = "column";
div2.style.backgroundColor = "#537DBD";
div2.style.alignItems = "center"; //가운데
div2.style.position = "relative";

//div2안에 있는  텍스트(글작성), 버튼(카테고리 안내창(모달창 나옴))
let text1 = maker("p", "id", "text1", div2);
let button3 = maker("button", "id", "guide", div2); //모달창

// 텍스트 스타일
const div2text = document.getElementById("text1");
div2text.style.height = "5%";
div2text.style.width = "25%";
div2text.textContent = "글작성";
div2text.style.color = "white";
div2text.style.fontWeight = "bold";
div2text.style.fontSize = "18px";
div2text.style.textAlign = "center";
div2text.style.margin = "0";

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
