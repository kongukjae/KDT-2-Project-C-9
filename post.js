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
div1button.style.height = "55%";
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
div1button2.style.height = "55%";
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

// 버튼3(모달창) 스타일
const div1modal = document.getElementById("guide");
div1modal.style.height = "45%";
div1modal.style.width = "10%";
div1modal.style.marginTop = "4%"; //위 마진
div1modal.style.position = "absolute";
div1modal.style.top = "0";
div1modal.style.right = "0";
//버튼3(모달창) 이미지
div1modal.style.backgroundImage = "url('./img/guide.png')";
div1modal.style.backgroundColor = "transparent"; //버튼 색 투명
div1modal.style.border = "none"; //테두리 X
div1modal.style.backgroundSize = "contain"; //이미지가 다 보이게
div1modal.style.backgroundRepeat = "no-repeat"; //이미지 반복X

// ⭐div3 스타일
const div3 = document.getElementById("div3");
div3.style.height = "8%";
div3.style.backgroundColor = "#D9D9D9";
div3.style.borderBottom = "1px solid  black";

// ⭐div4 스타일
const div4 = document.getElementById("div4");
div4.style.height = "55%";
div4.style.backgroundColor = "#D9D9D9";
div4.style.borderBottom = "1px solid  black";

// fix
// 모달창 만들기
// div id=modal, div id=modalText, button id=modalClose,
/* let a = maker("div", "id", "modal", div4);
const modal = document.getElementById("modal"); */
let b = maker("div", "id", "modalText", div1modal);
const modalText = document.getElementById("modalText");
let c = maker("h3", "id", "h3", modalText);
const modalTitle = document.getElementById("h3");
modalTitle.innerText = "카테고리 설명";
let d = maker("button", "id", "modalClose", modalText);
const modalClose = document.getElementById("modalClose");
modalClose.innerHTML = "&times;";
let e = maker("div", "id", "modalDayOne", div1modal);
const modalDayOne = document.getElementById("modalDayOne");
let f = maker("p", "id", "p1", modalDayOne);
const p1 = document.getElementById("p1");
p1.innerText = "자랑: 자신이 찍은 사진을 올리는 게시글";
let g = maker("p", "id", "p2", modalDayOne);
const p2 = document.getElementById("p2");
p2.innerText = "정보: 자신이 공유하고 싶은 내용을 올리는 게시글";
// 모달 modalBackground만들기
let h = maker("div", "id", "back", div4);
const back = document.getElementById("back");

//모달창 스타일
// 뒤
back.style.position = "fixed";
back.style.top = "0";
back.style.left = "0";
back.style.width = "100%";
back.style.height = "100%";
back.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
back.style.display = "none";
back.style.zIndex = "1";

// back.classList.add("active");
// back.style.display = "block";

// 모달창

//모달창 닫기 버튼

// ⭐div5 스타일
const div5 = document.getElementById("div5");
div5.style.height = "12%";
div5.style.backgroundColor = "#D9D9D9";
//div5안에 있는 input, 미리보기
let input1 = maker("input", "id", "file", div5); //모달창

// input 스타일설정
const div5input = document.getElementById("file");
div5input.setAttribute("type", "file");
// ⭐div6 스타일
const div6 = document.getElementById("div6");
div6.style.height = "10%";
div6.style.backgroundColor = "#325489";

//div6안에 있는  input submit (등록)
let input2 = maker("input", "id", "regis", div6);

const div6input = document.getElementById("regis");
div6input.setAttribute("type", "submit");
div6input.style.height = "100%";
div6input.style.width = "100%";
div6input.value = "등록";
div6input.style.backgroundColor = "transparent"; //버튼 색 투명
div6input.style.border = "none"; //테두리 X
