//body
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
// div 5개
for (let i = 1; i < 6; i++) {
  maker("div", "id", `div${i}`, root);
}

// ⭐div1 스타일
const div1 = document.getElementById("div1");
div1.style.height = "15%";
div1.style.display = "flex";
div1.style.justifyContent = "center";
div1.style.flexDirection = "column";
div1.style.position = "relative";

//div1안에 있는 버튼1(logo), 버튼2(menu)
let button1 = maker("button", "id", "button1", div1);
let button2 = maker("button", "id", "button2", div1);
// 버튼1 스타일
const div1button = document.getElementById("button1");
div1button.style.height = "45%";
div1button.style.width = "25%";
div1button.style.margin = "auto"; //버튼을 가운데로 이동

// 버튼2 스타일
const div1button2 = document.getElementById("button2");
div1button2.style.height = "25%";
div1button2.style.width = "10%";
div1button2.style.marginTop = "2%"; //위 마진
div1button2.style.position = "absolute";
div1button2.style.top = "0";
div1button2.style.right = "0";

// ⭐div2 스타일
const div2 = document.getElementById("div2");
div2.style.height = "20%";
div2.style.backgroundColor = "#D9D9D9";
div2.style.overflowY = "scroll"; //설명이 길 경우 스크롤할 수 있게 만듦
div2.style.overflowX = "hidden"; //수평 스크롤 비활성화

// ⭐div3 스타일
const div3 = document.getElementById("div3");
div3.style.height = "8%";
div3.style.display = "flex";
div3.style.alignItems = "flex-end"; //텍스트와 버튼을 하단 배치
div3.style.justifyContent = "space-between";
// div3안에 있는 텍스트와 버튼
let div3_1 = maker("div", "id", "text", div3);
let div3_2 = maker("button", "id", "button3", div3);

// 버튼3 스타일
const div3button = document.getElementById("button3");
div3button.style.height = "60%";
div3button.style.width = "10%";
div3button.style.marginBottom = "2%"; //아래 마진

// ⭐div4 스타일
const div4 = document.getElementById("div4");
div4.style.height = "47%";
div4.style.backgroundColor = "white";

// ⭐div5 스타일
const div5 = document.getElementById("div5");
div5.style.height = "10%";
div5.style.display = "flex";
div5.style.justifyContent = "flex-end"; //버튼을 오른쪽에 배치

// 📆해당하는 날짜에 맞게 api보이게 하기
var currentDate = new Date(); // 현재 날짜 객체 가져오기
var currentMonth = currentDate.getMonth() + 1; // 해당하는 달 가져오기 (0부터 시작하므로 1을 더해줌)
var currentYear = currentDate.getFullYear();
var currentDay = currentDate.getDay();
var date =
  currentYear.toString() +
  padNumber(currentMonth) +
  padNumber(currentDay === 0 ? 7 : currentDay);

//날짜 YYYYMMDD형식으로 보이게 하기
function padNumber(num) {
  return num.toString().padStart(2, "0");
}
// div4에 날짜를 보여줄 영역을 만듦
const dateContainer = document.createElement("div");
dateContainer.style.height = "10%";
dateContainer.style.width = "100%";
dateContainer.style.display = "flex";
dateContainer.style.justifyContent = "center";
dateContainer.style.alignItems = "center";

// 날짜를 보여줄 텍스트 엘리먼트를 만들어서 dateContainer에 추가함
const dateText = document.createElement("h2");
dateText.innerText = `${currentYear}년 ${currentMonth}월`;
dateText.style.fontSize = "24px";
dateText.style.margin = "0";
dateContainer.appendChild(dateText);

const calendarTable = document.createElement("table");
div4.appendChild(calendarTable);
calendarTable.style.height = "90%";
calendarTable.style.width = "100%";

const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
const firstDayOfMonth = new Date(`${currentMonth}/01/${currentYear}`).getDay();
const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();

let a = 1;
let lastMonthDate = daysInLastMonth - firstDayOfMonth + 1;

for (let i = 0; i < 6; i++) {
  const row = document.createElement("tr");
  calendarTable.appendChild(row);

  for (let j = 0; j < 7; j++) {
    const cell = document.createElement("td");
    row.appendChild(cell);

    if (i === 0 && j < firstDayOfMonth) {
      cell.innerText = lastMonthDate;
      cell.style.color = "grey";
      lastMonthDate++;
    } else if (a > daysInMonth) {
      cell.innerText = a - daysInMonth;
      cell.style.color = "grey";
      a++;
    } else {
      cell.innerText = a;
      a++;
    }
  }
}
// td 요소에 대한 스타일 추가
const tds = document.querySelectorAll("td");
tds.forEach((td) => {
  td.style.padding = "0";
  td.style.verticalAlign = "top";
});
