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
//버튼1 이미지
div1button.style.backgroundImage = "url('/src/img/logo.png')";
div1button.style.backgroundSize = "cover";
div1button.style.backgroundColor = "transparent"; //버튼 색 투명
div1button.style.border = "none"; //테두리 X
div1button.addEventListener("click", function () {
  // 로고 클릭 시 메인페이지 새로고침
  window.location.href = "main.html";
});

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
div2.style.height = "20%";
div2.style.backgroundColor = "#D9D9D9";
div2.style.overflowY = "scroll"; //설명이 길 경우 스크롤할 수 있게 만듦
div2.style.overflowX = "hidden"; //수평 스크롤 비활성화
// div2 텍스트
let div2_1 = maker("p", "id", "title", div2);
let div2_2 = maker("p", "id", "titleA", div2);
let div2_3 = maker("p", "id", "time", div2);
let div2_4 = maker("p", "id", "timeA", div2);
let div2_5 = maker("p", "id", "event", div2);
let div2_6 = maker("p", "id", "eventA", div2);


// 텍스트 스타일
const div2text = document.getElementById("title");
div2text.style.width = "40%";
div2text.style.height = "10%";
div2text.style.margin = "0";
div2text.textContent = "이달의 천문 현상";
div2text.style.fontWeight = "bold";
div2text.style.textAlign = "left"; // 왼쪽 정렬


const div2text2 = document.getElementById("titleA"); //api 텍스트
div2text2.style.width = "100%";
div2text2.style.height = "20%";
div2text2.style.marginTop = "1%";
div2text2.style.textAlign = "left"; // 왼쪽 정렬

const div2text3 = document.getElementById("time");
div2text3.style.width = "60%";
div2text3.style.height = "10%";
div2text3.style.marginTop = "3%";
div2text3.textContent = "관측 할 수 있는 시간과 설명";
div2text3.style.fontWeight = "bold";
div2text3.style.textAlign = "left"; // 왼쪽 정렬


const div2text4 = document.getElementById("timeA"); //api 텍스트
div2text4.style.width = "100%";
div2text4.style.height = "10%";
div2text4.style.margin = "1%";
div2text4.style.textAlign = "left"; // 왼쪽 정렬

// 🍔메뉴창 
const menuContainer = document.createElement("div");
root.appendChild(menuContainer);
menuContainer.style.position = "fixed";
menuContainer.style.top = "0";
menuContainer.style.right = "-50%";
menuContainer.style.height = "100%";
menuContainer.style.width = "50%";
menuContainer.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
menuContainer.style.transition = "all 0.3s ease-in-out";

const menuItems = ["게시판", "노래소개"];
for (let i = 0; i < menuItems.length; i++) {
  const menuItem = document.createElement("a");
  menuItem.textContent = menuItems[i];
  menuItem.href = i === 0 ? "board.html" : "music.html";
  menuItem.style.display = "block";
  menuItem.style.padding = "20px";
  menuItem.style.fontSize = "20px";
  menuItem.style.color = "#000";
  menuItem.style.textDecoration = "none";
  menuItem.addEventListener("click", function() {
    // Hide menu after clicking on a menu item
    menuContainer.style.right = "-50%";
  });
  menuContainer.appendChild(menuItem);
}

div1button2.addEventListener("click", function() {
  
  if (menuContainer.style.right === "-50%") {
    // 보이기
    menuContainer.style.right = "0";
  } else {
    // 숨기기
    menuContainer.style.right = "-50%";
  }
});


// ⭐div3 스타일
const div3 = document.getElementById("div3");
div3.style.height = "8%";
div3.style.display = "flex";
div3.style.alignItems = "flex-end"; //텍스트와 버튼을 하단 배치
div3.style.justifyContent = "space-between";
// div3안에 있는 텍스트와 버튼
let div3_1 = maker("div", "id", "text", div3);
let div3_2 = maker("button", "id", "button3", div3);

// 텍스트 스타일
const div3text = document.getElementById("text");
div3text.style.backgroundColor = "#F9D67A";
div3text.style.height = "60%";
div3text.style.width = "60%";
div3text.style.borderRadius = "30px";
div3text.style.marginBottom = "2%"; //아래 마진
div3text.style.display = "flex";
div3text.style.justifyContent = "center";
div3text.style.alignItems = "center";

// 버튼3 스타일
const div3button = document.getElementById("button3");
div3button.style.height = "60%";
div3button.style.width = "10%";
div3button.style.marginBottom = "2%"; //아래 마진
//버튼3 이미지
div3button.style.backgroundImage = "url('/src/img/glass.png')";
div3button.style.backgroundSize = "cover";
div3button.style.backgroundColor = "transparent"; //버튼 색 투명
div3button.style.border = "none"; //테두리 X

// ⭐div4 스타일
const div4 = document.getElementById("div4");
div4.style.height = "47%";
div4.style.backgroundColor = "white";

// ⭐div5 스타일
const div5 = document.getElementById("div5");
div5.style.height = "10%";
div5.style.display = "flex";
div5.style.justifyContent = "flex-end"; //버튼을 오른쪽에 배치

// div5안에 있는 버튼(나침반 or 별자리)
let div5_1 = maker("button", "id", "button4", div5);
// 버튼 스타일 (앞으로 나오도록 수정)
const div5button = document.getElementById("button4");
div5button.style.width = "15%";
div5button.style.height = "70%";
//버튼5 이미지
div5button.style.backgroundImage = "url('/src/img/star.png')";
div5button.style.backgroundSize = "cover";
div5button.style.backgroundColor = "transparent"; //버튼 색 투명
div5button.style.border = "none"; //테두리 X

// 📆해당하는 날짜에 맞게 api보이게 하기
var currentDate = new Date(); // 현재 날짜 객체 가져오기
var currentMonth = currentDate.getMonth() + 1; // 해당하는 달 가져오기 (0부터 시작하므로 1을 더해줌)
var currentYear = currentDate.getFullYear();
var currentDay = currentDate.getDay();
var date =
  currentYear.toString() + padNumber(currentMonth) + padNumber(currentDay === 0 ? 7 : currentDay);

//날짜 YYYYMMDD형식으로 보이게 하기
function padNumber(num) {
  return num.toString().padStart(2, "0");
}


// 월출, 월몰 api
// 월출 API
function getMoonriseValue(xmlData) {
  // XML 데이터에서 moonrise 값을 가져오는 함수
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, "application/xml");
  const moonrise = xmlDoc.querySelector("moonrise").textContent.trim();
  return moonrise;
}
// 월몰 API
function moonSetAPI(xmlData) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, "application/xml");
  const moonset = xmlDoc.querySelector("moonset").textContent.trim();
  return moonset;
}

var xhr1 = new XMLHttpRequest();
var url1 =
  "http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo";
var queryParams1 = "?" + encodeURIComponent("serviceKey") + "=" + "키값";
queryParams1 +=
  "&" + encodeURIComponent("locdate") + "=" + encodeURIComponent(date); //YYYYMMDD로 보이게 하기
queryParams1 +=
  "&" + encodeURIComponent("location") + "=" + encodeURIComponent("서울");
xhr1.open("GET", url1 + queryParams1);
xhr1.onreadystatechange = function () {
  if (xhr1.readyState === 4 && xhr1.status === 200) {
    var moonriseValue = getMoonriseValue(xhr1.response);
    var moonsetValue = moonSetAPI(xhr1.response);
    const div3text = document.getElementById("text");
    div3text.textContent =
      "월출시각:" + moonriseValue + " ,월몰시각:" + moonsetValue;
  }
};
xhr1.send();

// 천문현상 설명 api
// 천문현상명(날짜 포함) astroTitle  천문현상설명 astroEvent
function getmoonValue(xmlData2) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData2, "application/xml");
  const astroTitle = xmlDoc.querySelector("astroTitle").textContent.trim();
  const astroEvent = xmlDoc.querySelector("astroEvent").textContent.trim();
  return { astroTitle, astroEvent };
}

var xhr2 = new XMLHttpRequest();
var url2 =
  "http://apis.data.go.kr/B090041/openapi/service/AstroEventInfoService/getAstroEventInfo";
var queryParams2 = "?" + encodeURIComponent("serviceKey") + "=" + "키값";
queryParams2 +=
  "&" + encodeURIComponent("solYear") + "=" + encodeURIComponent(currentYear); //해당하는 날짜에 맞게 나오게 함
queryParams2 +=
  "&" +
  encodeURIComponent("solMonth") +
  "=" +
  encodeURIComponent("0" + currentMonth); // 해당하는 달에 맞게 나오게 함. 0을 꼭 써야 하므로 추가함
xhr2.open("GET", url2 + queryParams2);
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4 && xhr2.status === 200) {
    console.log(xhr2.response);
    var xmlData2 = xhr2.responseText;
    var { astroTitle, astroEvent } = getmoonValue(xmlData2);
    div2text2.textContent = astroTitle; //천문현상 날짜+명칭
    div2text4.textContent = astroEvent; //관측할 수 있는 시간+설명
  }
};
xhr2.send("");