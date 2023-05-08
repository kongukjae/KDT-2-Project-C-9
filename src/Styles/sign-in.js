/* 수정할 것
1. 로고 클릭시 메인페이지 이동 */

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
// div 2개
for (let i = 1; i < 3; i++) {
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
div1text.textContent = "로그인";
div1text.style.color = "white";
div1text.style.fontWeight = "bold";
div1text.style.fontSize = "18px";
div1text.style.textAlign = "center";
div1text.style.margin = "0";

// div1text.style.marginBottom = "5%";

// ⭐div2 스타일
const div2 = document.getElementById("div2");
div2.style.height = "85%";
div2.style.backgroundColor = "#325489";
div2.style.display = "flex";
div2.style.flexDirection = "column";

// div2안에 있는 p2개(ID,PW), input3개(ID, PW,로그인),버튼(회원가입)
let div2_text = maker("p", "id", "id", div2);
let div2_1 = maker("input", "id", "idInput", div2);
let div2_text2 = maker("p", "id", "pw", div2);
let div2_2 = maker("input", "id", "pwInput", div2);
let div2_3 = maker("input", "id", "submit", div2);
let div2_4 = maker("button", "id", "loginButton", div2); //회원가입 이동 버튼

// div 스타일 바꾸기
// ID
const div2text1 = document.getElementById("id");
div2text1.textContent = "ID";
div2text1.style.fontWeight = "bold";
div2text1.style.marginTop = "30%";
div2text1.style.textAlign = "center";

// ID INPUT
const div2input1 = document.getElementById("idInput");
div2input1.setAttribute("type", "text"); //ID를 입력받기 때문에 text
div2input1.style.height = "4%";
div2input1.style.width = "70%";
div2input1.style.marginLeft = "14%"; //화면을 가운데로 맞추기 위해 넣음
// div2input1.style.textAlign = "center";

// PW
const div2text2 = document.getElementById("pw");
div2text2.textContent = "PW";
div2text2.style.fontWeight = "bold";
div2text2.style.textAlign = "center";
// PW INPUT
const div2input2 = document.getElementById("pwInput");
div2input2.setAttribute("type", "password");
div2input2.style.height = "4%";
div2input2.style.width = "70%";
div2input2.style.marginLeft = "14%";

//로그인 INPUT
const div2input3 = document.getElementById("submit");
div2input3.setAttribute("type", "submit");
div2input3.style.height = "5%";
div2input3.style.width = "70%";
div2input3.style.marginTop = "12%";
div2input3.style.marginLeft = "14%";
div2input3.value = "로그인";

// 회원가입 이동 버튼
const div2button1 = document.getElementById("loginButton");
div2button1.style.height = "5%";
div2button1.style.width = "70%";
div2button1.style.marginTop = "32%";
div2button1.textContent = "회원가입";
div2button1.style.fontSize = "20px";
div2button1.style.fontWeight = "bold";
div2button1.style.marginLeft = "14%";

div2button1.style.backgroundColor = "transparent"; //버튼 색 투명
div2button1.style.border = "none"; //테두리 X
div2button1.addEventListener("click", function () {
  // 회원가입 클릭 시 회원가입 페이지로 이동
  window.location.href = "sign-up.html";
});
