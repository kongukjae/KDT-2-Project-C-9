/* div2개 
input3개 text 아이디, password 비번,submit 로그인
버튼 1개 회원가입페이지로 이동한다. 
로그인창과 회원가입창 큰 틀은 비슷하다*/
/* 수정할 부분
1. p태그 안에 들어갈 내용 입력하기
2. input type추가하기
3. 스타일 바꾸기 
4. div2 밑에 버튼 추가하기!!*/

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
div1.style.position = "relative";
div1.style.alignItems = "center"; //가운데
div1.style.position = "relative";
div1.style.justifyContent = "center";

//div1안에 있는 버튼1(logo),텍스트
let button1 = maker("button", "id", "button1", div1);
let text1 = maker("p", "id", "text1", div1);

// 버튼1 스타일
const div1button = document.getElementById("button1");
div1button.style.height = "45%";
div1button.style.width = "25%";
div1button.style.marginTop = "7%";

// 텍스트 스타일
const div1text = document.getElementById("text1");
div1text.style.height = "25%";
div1text.style.width = "25%";
div1text.innerHTML = "로그인";
div1text.style.textAlign = "center";
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
let div2_text2 = maker("p", "pw", "pw", div2);
let div2_2 = maker("input", "id", "pwInput", div2);
let div2_3 = maker("input", "id", "submit", div2);
// div 스타일 바꾸기
const div2text1 = document.getElementById("id");

const div2input1 = document.getElementById("idInput");
div2input1.setAttribute("type", "text"); //ID를 입력받기 때문에 text

const div2text2 = document.getElementById("pw");
const div2input2 = document.getElementById("pwInput");
div2input2.setAttribute("type", "password");

const div2input3 = document.getElementById("submit");
div2input3.setAttribute("type", "submit");
