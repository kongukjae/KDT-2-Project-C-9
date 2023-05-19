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

// 메뉴창
const menuContainer = document.createElement("div");
root.appendChild(menuContainer);
menuContainer.style.position = "fixed";
menuContainer.style.top = "0";
menuContainer.style.right = "-50%";
menuContainer.style.height = "100%";
menuContainer.style.width = "50%";
menuContainer.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; //투명으로 만듦
menuContainer.style.transition = "all 0.3s ease-in-out";

const menuItems = [
  "📋게시판",
  "🎤노래소개",
  "📘우주 사전",
  "😎마이페이지",
  "🔑로그인·회원가입",
];
for (let i = 0; i < menuItems.length; i++) {
  const menuItem = document.createElement("a");
  menuItem.textContent = menuItems[i];

  // 페이지 추가한다면 숫자 늘리면 된다
  if (i === 0) {
    menuItem.href = "board.html";
  } else if (i === 1) {
    menuItem.href = "music.html";
  } else if (i === 2) {
    menuItem.href = "dictionary.html";
  } else if (i === 3) {
    menuItem.href = "mypage.html";
  } else {
    menuItem.href = "sign-in.html";
  }

  menuItem.style.display = "block";
  menuItem.style.padding = "20px";
  menuItem.style.fontSize = "18px";
  menuItem.style.color = "#000";
  menuItem.style.textDecoration = "none";
  menuItem.addEventListener("click", function () {
    menuContainer.style.right = "-50%"; //역방향으로 이동
  });
  menuContainer.appendChild(menuItem);
}

div1button2.addEventListener("click", function () {
  if (menuContainer.style.right === "-50%") {
    menuContainer.style.right = "0";
    // 메뉴창 제외 다른 것 클릭시 메뉴창이 닫아짐
    const modalBack0 = document.createElement("div");
    modalBack0.style.position = "fixed";
    modalBack0.style.top = "0";
    modalBack0.style.left = "0";
    modalBack0.style.width = "100%";
    modalBack0.style.height = "100%";
    modalBack0.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    modalBack0.style.display = "flex";
    modalBack0.style.justifyContent = "center";
    modalBack0.style.alignItems = "center";
    modalBack0.style.zIndex = "1";

    modalBack0.appendChild(menuContainer);

    document.body.appendChild(modalBack0);

    modalBack0.addEventListener("click", function (event) {
      if (event.target === modalBack0) {
        modalBack0.remove();
      }
    });
  } else {
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
//나사 창 보이기
div3button.addEventListener("click", function () {
  window.location.href = "nasa.html";
});

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
var currentDay = currentDate.getDate();
var date =
  currentYear.toString() +
  padNumber(currentMonth) +
  padNumber(currentDay === 0 ? 7 : currentDay);

//날짜 YYYYMMDD형식으로 보이게 하기
function padNumber(num) {
  return num.toString().padStart(2, "0");
}

//fix
//월령 api달력
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

//fix
function moon(xmlData) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, "application/xml");
  const lunAge = xmlDoc.querySelector("lunAge").textContent.trim();
  return lunAge;
}

const xhr = new XMLHttpRequest();
var url =
  "http://apis.data.go.kr/B090041/openapi/service/LunPhInfoService/getLunPhInfo"; /*URL*/
var queryParams =
  "?" +
  encodeURIComponent("serviceKey") +
  "=" +
  "sLG8GxH%2BnJvDMU0R5HXBeGf0uKnmavrshGmvC%2F6x9JHxF1aAqG2gImPUoAnS0HcwF3u9y7VvXKUm%2B1skVniFcQ%3D%3D"; /*Service Key*/
queryParams +=
  "&" + encodeURIComponent("solYear") + "=" + encodeURIComponent(currentYear);
queryParams +=
  "&" +
  encodeURIComponent("solMonth") +
  "=" +
  encodeURIComponent("0" + currentMonth);
queryParams +=
  "&" +
  encodeURIComponent("solDay") +
  "=" +
  encodeURIComponent(currentDay); //fix 날짜 오류. 수정
xhr.open("GET", url + queryParams);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.response);
    var xmlData = xhr.responseText;
    var lunAge = moon(xmlData);

    const images = {
      a: "/src/img/a.png",
      b: "/src/img/b.png",
      c: "/src/img/c.png",
      d: "/src/img/d.png",
      e: "/src/img/e.png",
    };

    const today = new Date().getDate(); // 오늘 날짜 가져오기

    for (let i = 0; i < 5; i++) {
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

          // 해당하는 날짜에 이미지 보여주기
          if (
            parseInt(currentYear) === new Date().getFullYear() &&
            parseInt(currentMonth) === new Date().getMonth() + 1 &&
            parseInt(cell.innerText) === today
          ) {
            const img = document.createElement("img");
            // img.src = images.e; // 오늘 날짜에는 항상 이미지 e 보여주기??

            img.src = images.e; //❓
            img.style.width = "50px";
            img.style.height = "50px";
            cell.appendChild(img);
          } else {
            let imgSrc = "";
            if (lunAge >= 1 && lunAge <= 6.9) {
              imgSrc = images.f;
            } else if (lunAge > 6.9 && lunAge <= 12.9) {
              imgSrc = images.d;
            } else if (lunAge > 12.9 && lunAge <= 15.9) {
              imgSrc = images.c;
            } else if (lunAge > 15.9 && lunAge <= 22.9) {
              imgSrc = images.b;
            }else if(lunAge > 22.9 && lunAge <= 29.9) {
              imgSrc = images.a;
            } else {
              imgSrc = images.e;
            }

            const img = document.createElement("img");
            img.src = imgSrc;
            img.style.width = "50px";
            img.style.height = "50px";
            cell.appendChild(img);
          }
        }
      }
    }
    // td 스타일
    const tds = document.querySelectorAll("td");
    tds.forEach((td) => {
      td.style.padding = "0";
      td.style.verticalAlign = "top";
    });
  } else {
    console.error("Error:", xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error("Error:", xhr.statusText);
};
xhr.send();

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
var queryParams1 =
  "?" +
  encodeURIComponent("serviceKey") +
  "=" +
  "sLG8GxH%2BnJvDMU0R5HXBeGf0uKnmavrshGmvC%2F6x9JHxF1aAqG2gImPUoAnS0HcwF3u9y7VvXKUm%2B1skVniFcQ%3D%3D";
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
var queryParams2 =
  "?" +
  encodeURIComponent("serviceKey") +
  "=" +
  "sLG8GxH%2BnJvDMU0R5HXBeGf0uKnmavrshGmvC%2F6x9JHxF1aAqG2gImPUoAnS0HcwF3u9y7VvXKUm%2B1skVniFcQ%3D%3D";
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

// 별자리 모달창 🌟
var seasonImage = "";
var seasonDescription = "";
var seasonContent = "";

function showModal() {
  const modalBack = document.createElement("div");
  modalBack.style.position = "fixed";
  modalBack.style.top = "0";
  modalBack.style.left = "0";
  modalBack.style.width = "100%";
  modalBack.style.height = "100%";
  modalBack.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  modalBack.style.display = "flex";
  modalBack.style.justifyContent = "center";
  modalBack.style.alignItems = "center";
  modalBack.style.zIndex = "9999";

  const modalTitle = document.createElement("p");
  modalTitle.textContent = "봄철 별자리";
  modalTitle.style.fontWeight = "bold";

  const modalContent = document.createElement("div");
  modalContent.style.backgroundColor = "#F7F9DF";
  // modalContent.style.padding = "20px";
  modalContent.style.fontSize = "18px";
  modalContent.style.width = "390px";
  modalContent.style.textAlign = "center";

  const img1 = document.createElement("img");
  img1.setAttribute("id", "img1");
  img1.style.width = "20%";
  img1.style.height = "30%";
  img1.src = "/src/img/leo.png";

  const p1 = document.createElement("p");
  p1.textContent =
    "사자자리:황도 12궁에 속하는 별자리이다. 서쪽의 게자리와 동쪽의 처녀자리 사이에 놓여 있다. 봄철 초저녁 하늘에서 찾아볼 수 있는 별자리이다.";
  p1.style.fontSize = "15px";

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(img1);
  modalContent.appendChild(p1);

  modalBack.appendChild(modalContent);

  document.body.appendChild(modalBack);

  modalBack.addEventListener("click", function (event) {
    if (event.target === modalBack) {
      modalBack.remove();
    }
  });
}

div5button.addEventListener("click", showModal);
