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
div1text.textContent = "회원가입";
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
let div2_text3 = maker("p", "id", "local", div2);
let div2_3 = maker("select", "id", "localSelect", div2);
let div2_4 = maker("input", "id", "submit", div2);

// div 스타일 바꾸기
// ID
const div2text1 = document.getElementById("id");
div2text1.textContent = "ID";
div2text1.style.fontWeight = "bold";
div2text1.style.marginTop = "30%";
// div2text1.style.marginLeft = "14%"; //화면을 가운데로 맞추기 위해 넣음
div2text1.style.textAlign = "center";

// ID INPUT
const div2input1 = document.getElementById("idInput");
div2input1.setAttribute("type", "text"); //ID를 입력받기 때문에 text
div2input1.style.height = "4%";
div2input1.style.width = "70%";
div2input1.style.marginLeft = "14%"; //화면을 가운데로 맞추기 위해 넣음

// PW
const div2text2 = document.getElementById("pw");
div2text2.textContent = "PW";
div2text2.style.fontWeight = "bold";
// div2text2.style.marginLeft = "14%";
div2text2.style.textAlign = "center";

// PW INPUT
const div2input2 = document.getElementById("pwInput");
div2input2.setAttribute("type", "password");
div2input2.style.height = "4%";
div2input2.style.width = "70%";
div2input2.style.marginLeft = "14%";

// 지역 선택
const div2text3 = document.getElementById("local");
div2text3.textContent = "지역";
div2text3.style.fontWeight = "bold";
// div2text3.style.marginLeft = "14%";
div2text3.style.textAlign = "center";

// 지역 select
const div2input3 = document.getElementById("localSelect");
div2input3.setAttribute("type", "password");
div2input3.style.height = "20%";
div2input3.style.width = "70%";
div2input3.style.marginLeft = "14%";

//for문 사용하여 위의 코드 간단하게 나타냄
var select = document.getElementById("localSelect");
var options = [
  { value: "option1", text: "가거도" },
  { value: "option2", text: "가평" },
  { value: "option3", text: "강릉" },
  { value: "option4", text: "강원고성" },
  { value: "option5", text: "강진" },
  { value: "option6", text: "강화" },
  { value: "option7", text: "거제" },
  { value: "option8", text: "거창" },
  { value: "option9", text: "경산" },
  { value: "option10", text: "경주" },
  { value: "option11", text: "계룡" },
  { value: "option12", text: "고령" },
  { value: "option13", text: "고성" },
  { value: "option14", text: "고양" },
  { value: "option15", text: "대구" },
  { value: "option16", text: "대전" },
  { value: "option17", text: "독도" },
  { value: "option18", text: "부산" },
  { value: "option19", text: "서울" },
  { value: "option20", text: "세종" },
  { value: "option21", text: "인천" },
  { value: "option22", text: "제주" },
  { value: "option23", text: "충주" },
  { value: "option24", text: "포항" },
  { value: "option25", text: "해남" },
];

for (var i = 0; i < options.length; i++) {
  var option = document.createElement("option");
  option.value = options[i].value;
  option.text = options[i].text;
  select.appendChild(option);
}

select.setAttribute("size", options.length);

//가입 INPUT
const submitButton  = document.getElementById("submit");
submitButton .setAttribute("type", "submit");
submitButton .style.height = "5%";
submitButton .style.width = "70%";
submitButton .style.marginTop = "12%";
submitButton .style.marginLeft = "14%";
submitButton .value = "회원가입";

submitButton.addEventListener("click", function () {
  // 입력된 ID, 비밀번호, 지역 정보를 가져옵니다
  const idInput = document.getElementById('idInput').value;
  const pwInput = document.getElementById('pwInput').value;
  const localSelect = document.getElementById('localSelect').value;
  let localSelectText = '';

  // localSelect에서 text(지역)만 저장
  if (options && options.length > 0) {
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === localSelect) {
        localSelectText = options[i].text;
        break;
      }
    }
  }

  // MySQL에 데이터를 삽입하는 쿼리를 작성합니다
  const query = `INSERT INTO users (id, password, location) VALUES ('${idInput}', '${pwInput}', '${localSelectText}')`;

  // 쿼리를 실행하여 MySQL에 데이터를 전송합니다
  connection.query(query, function (err, result) {
    if (err) {
      console.error('MySQL 데이터 전송 실패:', err.message);
      return;
    }
    console.log('MySQL 데이터 전송 성공');
    // 회원가입 완료 -> 메인 페이지로 이동
    window.location.href = "main.html";
  });
});

