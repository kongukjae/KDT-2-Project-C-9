/* 수정할 것
1.날짜를 하나만 하는 것이 아니라 오늘 날짜에 맞추어서 바꾸게 하기 */
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
div1button.style.backgroundImage = "url('./img/logo.png')";
// div1button.style.backgroundSize = "contain";
// div1button.style.backgroundRepeat = "no-repeat";
div1button.style.backgroundSize = "cover";
div1button.style.backgroundColor = "transparent"; //버튼 색 투명
div1button.style.border = "none"; //테두리 X

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

// ⭐div2 스타일
const div2 = document.getElementById("div2");
div2.style.height = "20%";
div2.style.backgroundColor = "#D9D9D9";
/* div2.style.display = "flex";
    div2.style.flexDirection = "row";
     */
// div2 텍스트
let div2_1 = maker("p", "id", "title", div2);
let div2_2 = maker("p", "id", "titleA", div2);
let div2_3 = maker("p", "id", "time", div2);
let div2_4 = maker("p", "id", "timeA", div2);
let div2_5 = maker("p", "id", "event", div2);
let div2_6 = maker("p", "id", "eventA", div2);

// 텍스트 스타일
const div2text = document.getElementById("title");
div2text.style.width = "50%";
div2text.style.height = "10%";
div2text.style.margin = "0";
div2text.textContent = "이달의 천문 현상";
div2text.style.fontWeight = "bold";

const div2text2 = document.getElementById("titleA"); //api 텍스트
div2text2.style.width = "100%";
div2text2.style.height = "20%";
div2text2.style.marginTop = "1%";

const div2text3 = document.getElementById("time");
div2text3.style.width = "60%";
div2text3.style.height = "10%";
div2text3.style.marginTop = "3%";
div2text3.textContent = "관측 할 수 있는 시간과 설명";
div2text3.style.fontWeight = "bold";

const div2text4 = document.getElementById("timeA"); //api 텍스트
div2text4.style.width = "100%";
div2text4.style.height = "10%";
div2text4.style.margin = "1%";

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

// 버튼3 스타일
const div3button = document.getElementById("button3");
div3button.style.height = "60%";
div3button.style.width = "10%";
div3button.style.marginBottom = "2%"; //아래 마진
//버튼3 이미지
div3button.style.backgroundImage = "url('./img/glass.png')";
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
div5button.style.backgroundImage = "url('./img/star.png')";
div5button.style.backgroundSize = "cover";
div5button.style.backgroundColor = "transparent"; //버튼 색 투명
div5button.style.border = "none"; //테두리 X

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

// XMLHttpRequest를 통해 XML 데이터를 받아오는 코드
var xhr = new XMLHttpRequest();
var url =
  "http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo";
var queryParams = "?" + encodeURIComponent("serviceKey") + "=" + "키값";
queryParams +=
  "&" + encodeURIComponent("locdate") + "=" + encodeURIComponent("20230501");
queryParams +=
  "&" + encodeURIComponent("location") + "=" + encodeURIComponent("서울");
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var moonriseValue = getMoonriseValue(xhr.response);
    var moonsetValue = moonSetAPI(xhr.response);
    const div3text = document.getElementById("text");

    div3text.textContent =
      "월출시간: " + moonriseValue + " ,월몰시간:" + moonsetValue;
  }
};
xhr.send();

// 천문현상 설명 api
// 천문현상명(날짜 포함) astroTitle  천문현상설명 astroEvent
//div2순서 천문현상명(날짜 포함)->천문현상 설명
// 한번에 나타내기
function getmoonValue(xmlData2) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData2, "application/xml");
  const astroTitle = xmlDoc.querySelector("astroTitle").textContent.trim();
  const astroEvent = xmlDoc.querySelector("astroEvent").textContent.trim();
  return { astroTitle, astroEvent };
}

// var xhr = new XMLHttpRequest();
var url2 =
  "http://apis.data.go.kr/B090041/openapi/service/AstroEventInfoService/getAstroEventInfo";
var queryParams2 = "?" + encodeURIComponent("serviceKey") + "=" + "키값";
queryParams2 +=
  "&" +
  encodeURIComponent("solYear") +
  "=" +
  encodeURIComponent("2023"); /* 날짜 맞춰서 나오게 수정하기 */
queryParams2 +=
  "&" + encodeURIComponent("solMonth") + "=" + encodeURIComponent("06");
xhr.open("GET", url2 + queryParams2);
xhr.onreadystatechange = function () {
  console.log(xhr.response);
  var xmlData2 = xhr.responseText;
  var { astroTitle, astroEvent } = getmoonValue(xmlData2);
  div2text2.textContent = astroTitle; //천문현상 날짜+명칭
  div2text4.textContent = astroEvent; //관측할 수 있는 시간+설명
};

xhr.send("");
