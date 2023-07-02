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
div1.style.backgroundColor = "#000000";
// div1.style.justifyContent = "space-between"; //버튼을 양 끝으로 이동
div1.style.alignItems = "center"; //가운데
div1.style.position = "relative";
// div1.style.justifyContent = "center";

//div1안에 있는 버튼1(logo),텍스트
let button1 = maker("button", "id", "button1", div1);
let text1 = maker("p", "id", "text1", div1);
let button2 = maker("button", "id", "button2", div1);

// 버튼1 스타일
const div1button = document.getElementById("button1");
div1button.style.height = "45%";
div1button.style.width = "25%";
div1button.style.marginTop = "7%";
// 버튼1 이미지
div1button.style.backgroundImage = "url('/src/img/logoD.png')";
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
div1text.textContent = "우주 사전";
div1text.style.color = "white";
div1text.style.fontWeight = "bold";
div1text.style.fontSize = "18px";
div1text.style.textAlign = "center";
div1text.style.margin = "0";

// 버튼2 스타일
const div1button2 = document.getElementById("button2");
div1button2.style.height = "15%";
div1button2.style.width = "10%";
div1button2.style.marginTop = "2%"; //위 마진
div1button2.style.position = "absolute";
div1button2.style.top = "0";
div1button2.style.right = "0";
//버튼2 이미지
div1button2.style.backgroundImage = "url('/src/img/menuD.png')";
div1button2.style.backgroundSize = "cover";
div1button2.style.backgroundColor = "transparent"; //버튼 색 투명
div1button2.style.border = "none"; //테두리 X

// ⭐div2 스타일
const div2 = document.getElementById("div2");
div2.style.height = "85%";
div2.style.backgroundColor = "#D9D9D9";
div2.style.display = "flex";
div2.style.flexDirection = "column";
div2.style.padding = "5%";

function makerChild(tagName, setName, setValue, parent) {
  const element = document.createElement(tagName);
  element.setAttribute(setName, setValue);
  parent.appendChild(element);
}
// div2안에 있는 텍스트(리스트로 바꿀 예정(겹치기 때문에 간단하게 바뀔예정))
let div2c_1 = makerChild("div", "id", "q1", div2);
let div2c_2 = makerChild("div", "id", "q2", div2);
let div2c_3 = makerChild("div", "id", "q3", div2);
let div2c_4 = makerChild("div", "id", "q4", div2);
let div2c_5 = makerChild("div", "id", "q5", div2);
let div2c_6 = makerChild("div", "id", "q6", div2);
let div2c_7 = makerChild("div", "id", "q7", div2);

// 간단하게 작성할 예정
// div2c 텍스트1 스타일
const div2text1 = document.getElementById("q1");
div2text1.style.height = "5%";
div2text1.style.width = "80%";
div2text1.style.backgroundColor = "#F0F0F0";
div2text1.style.border = "none";
div2text1.style.marginLeft = "10%"; //가운데로 옮기기위해서 만든 것
div2text1.style.alignItems = "center";
div2text1.style.borderRadius = "10px";
div2text1.textContent = "👩🏻‍🚀월출·월몰이란?";
div2text1.style.fontSize = "15px";
div2text1.style.color = "black";
div2text1.style.justifyContent = "center";
div2text1.style.display = "flex";

// div2c 텍스트2 스타일
const div2text2 = document.getElementById("q2");
div2text2.style.height = "5%";
div2text2.style.width = "80%";
div2text2.style.backgroundColor = "#F0F0F0";
div2text2.style.border = "none";
div2text2.style.marginLeft = "10%"; //가운데로 옮기기위해서 만든 것
div2text2.style.alignItems = "center";
div2text2.style.borderRadius = "10px";
div2text2.textContent = "👩🏻‍🚀달에 대해서";
div2text2.style.fontSize = "15px";
div2text2.style.color = "black";
div2text2.style.justifyContent = "center";
div2text2.style.display = "flex";
div2text2.style.marginTop = "5%";

// div2c 텍스트3 스타일
const div2text3 = document.getElementById("q3");
div2text3.style.height = "5%";
div2text3.style.width = "80%";
div2text3.style.backgroundColor = "#F0F0F0";
div2text3.style.border = "none";
div2text3.style.marginLeft = "10%"; //가운데로 옮기기위해서 만든 것
div2text3.style.alignItems = "center";
div2text3.style.borderRadius = "10px";
div2text3.textContent = "👩🏻‍🚀천문학자";
div2text3.style.fontSize = "15px";
div2text3.style.color = "black";
div2text3.style.justifyContent = "center";
div2text3.style.display = "flex";
div2text3.style.marginTop = "5%";

// div2c 텍스트4 스타일
const div2text4 = document.getElementById("q4");
div2text4.style.height = "5%";
div2text4.style.width = "80%";
div2text4.style.backgroundColor = "#F0F0F0";
div2text4.style.border = "none";
div2text4.style.marginLeft = "10%"; //가운데로 옮기기위해서 만든 것
div2text4.style.alignItems = "center";
div2text4.style.borderRadius = "10px";
div2text4.textContent = "👩🏻‍🚀적색 왜성";
div2text4.style.fontSize = "15px";
div2text4.style.color = "black";
div2text4.style.justifyContent = "center";
div2text4.style.display = "flex";
div2text4.style.marginTop = "5%";

// div2c 텍스트5 스타일
const div2text5 = document.getElementById("q5");
div2text5.style.height = "5%";
div2text5.style.width = "80%";
div2text5.style.backgroundColor = "#F0F0F0";
div2text5.style.border = "none";
div2text5.style.marginLeft = "10%"; //가운데로 옮기기위해서 만든 것
div2text5.style.alignItems = "center";
div2text5.style.borderRadius = "10px";
div2text5.textContent = "👩🏻‍🚀블랙홀";
div2text5.style.fontSize = "15px";
div2text5.style.color = "black";
div2text5.style.justifyContent = "center";
div2text5.style.display = "flex";
div2text5.style.marginTop = "5%";

// div2c 텍스트6 스타일
const div2text6 = document.getElementById("q6");
div2text6.style.height = "5%";
div2text6.style.width = "80%";
div2text6.style.backgroundColor = "#F0F0F0";
div2text6.style.border = "none";
div2text6.style.marginLeft = "10%"; //가운데로 옮기기위해서 만든 것
div2text6.style.alignItems = "center";
div2text6.style.borderRadius = "10px";
div2text6.textContent = "👩🏻‍🚀행성의 종류는?";
div2text6.style.fontSize = "15px";
div2text6.style.color = "black";
div2text6.style.justifyContent = "center";
div2text6.style.display = "flex";
div2text6.style.marginTop = "5%";

// div2c 텍스트7 스타일
const div2text7 = document.getElementById("q7");
div2text7.style.height = "5%";
div2text7.style.width = "80%";
div2text7.style.backgroundColor = "#F0F0F0";
div2text7.style.border = "none";
div2text7.style.marginLeft = "10%"; //가운데로 옮기기위해서 만든 것
div2text7.style.alignItems = "center";
div2text7.style.borderRadius = "10px";
div2text7.textContent = "👩🏻‍🚀천체 분광학은 뭘까?";
div2text7.style.fontSize = "15px";
div2text7.style.color = "black";
div2text7.style.justifyContent = "center";
div2text7.style.display = "flex";
div2text7.style.marginTop = "5%";

// 🍔메뉴창
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
  "🌠우주 이것저것",
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
    menuItem.href = "space.html";
  } else if (i === 4) {
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

//설명창


let div2c_a = makerChild("div", "id", "ca", div2);

const dropdownContent1 = document.getElementById("ca");
dropdownContent1.style.height = "10%";
dropdownContent1.style.width = "80%";
1
dropdownContent1.style.backgroundColor = "#849ABA";
dropdownContent1.style.border = "none";
dropdownContent1.style.marginLeft = "10%"; 
dropdownContent1.style.alignItems = "center";
dropdownContent1.style.borderRadius = "10px";
dropdownContent1.textContent = "월출: 달이 지평선 위로 떠오르는 것을 의미, 월몰: 달이 지평선으로 사라지는 것";
dropdownContent1.style.fontSize = "15px";
dropdownContent1.style.color = "black";
dropdownContent1.style.justifyContent = "center";
dropdownContent1.style.display = "none";
dropdownContent1.style.marginTop = "10%";


div2text1.addEventListener("click", function() {
  if (dropdownContent1.style.display === "none") {
    dropdownContent1.style.display = "block";
  } else {
    dropdownContent1.style.display = "none";
  }
});

div2.insertBefore(dropdownContent1, div2text2);


let div2c_b = makerChild("div", "id", "cb", div2);

const dropdownContent2 = document.getElementById("cb");
dropdownContent2.style.height = "15%";
dropdownContent2.style.width = "80%";
dropdownContent2.style.paddingTop = "5%";

dropdownContent2.style.backgroundColor = "#849ABA";
dropdownContent2.style.border = "none";
dropdownContent2.style.marginLeft = "10%"; 
dropdownContent2.style.alignItems = "center";
dropdownContent2.style.borderRadius = "10px";
dropdownContent2.textContent = "달의 반지름은 지구 반지름의 약 4분의 1이며, 질량은 지구 질량의 1/81.3이고, 달과 지구의 공통 중심은 지구 내부에 있다. 달 궤도의 반지름은 38만 4,400km이다.";
dropdownContent2.style.fontSize = "15px";
dropdownContent2.style.color = "black";
dropdownContent2.style.justifyContent = "center";
dropdownContent2.style.display = "none";
dropdownContent2.style.marginTop = "10%";

div2text2.addEventListener("click", function() {
  if (dropdownContent2.style.display === "none") {
    dropdownContent2.style.display = "block";
  } else {
    dropdownContent2.style.display = "none";
  }
});

div2.insertBefore(dropdownContent2, div2text3);


let div2c_c = makerChild("div", "id", "cc", div2);

const dropdownContent3 = document.getElementById("cc");
dropdownContent3.style.height = "20%";
dropdownContent3.style.width = "80%";
dropdownContent3.style.paddingTop = "5%";
dropdownContent3.style.backgroundColor = "#849ABA";
dropdownContent3.style.border = "none";
dropdownContent3.style.marginLeft = "10%"; 
dropdownContent3.style.alignItems = "center";
dropdownContent3.style.borderRadius = "10px";
dropdownContent3.textContent = "니콜라우스 코페르니쿠스:니콜라우스 코페르니쿠스는 당시 진리처럼 믿어온 지구중심설의 오류를 지적하고 태양중심설을 주장하여 근대 자연과학의 획기적인 전환, 이른바 '코페르니쿠스의 전환'을 가져온 폴란드의 천문학자이다.";
dropdownContent3.style.fontSize = "15px";
dropdownContent3.style.color = "black";
dropdownContent3.style.justifyContent = "center";
dropdownContent3.style.display = "none";
dropdownContent3.style.marginTop = "10%";

div2text3.addEventListener("click", function() {
  if (dropdownContent3.style.display === "none") {
    dropdownContent3.style.display = "block";
  } else {
    dropdownContent3.style.display = "none";
  }
});

div2.insertBefore(dropdownContent3, div2text4);


let div2c_d = makerChild("div", "id", "cd", div2);

const dropdownContent4 = document.getElementById("cd");
dropdownContent4.style.height = "15%";
dropdownContent4.style.width = "80%";
dropdownContent4.style.paddingTop = "5%";4
dropdownContent4.style.backgroundColor = "#849ABA";
dropdownContent4.style.border = "none";
dropdownContent4.style.marginLeft = "10%"; 
dropdownContent4.style.alignItems = "center";
dropdownContent4.style.borderRadius = "10px";
dropdownContent4.textContent = "적성왜성은 작고 상대적으로 차가우며 태양의 0.081-0.5배 정도의 질량을 지닌 주계열성을 부르는 말이다.";
dropdownContent4.style.fontSize = "15px";
dropdownContent4.style.color = "black";
dropdownContent4.style.justifyContent = "center";
dropdownContent4.style.display = "none";
dropdownContent4.style.marginTop = "10%";

div2text4.addEventListener("click", function() {
  if (dropdownContent4.style.display === "none") {
    dropdownContent4.style.display = "block";
  } else {
    dropdownContent4.style.display = "none";
  }
});

div2.insertBefore(dropdownContent4, div2text5);


let div2c_e = makerChild("div", "id", "ce", div2);

const dropdownContent5 = document.getElementById("ce");
dropdownContent5.style.height = "15%";
dropdownContent5.style.width = "80%";
dropdownContent5.style.paddingTop = "5%";
dropdownContent5.style.backgroundColor = "#849ABA";
dropdownContent5.style.border = "none";
dropdownContent5.style.marginLeft = "10%"; 
dropdownContent5.style.alignItems = "center";
dropdownContent5.style.borderRadius = "10px";
dropdownContent5.textContent = "블랙홀이란 핵융합 연료를 소진한 거대한 별이 마지막에 중력붕괴하면서 만들어지는 초고밀도 천체이다.";
dropdownContent5.style.fontSize = "15px";
dropdownContent5.style.color = "black";
dropdownContent5.style.justifyContent = "center";
dropdownContent5.style.display = "none";
dropdownContent5.style.marginTop = "10%";

div2text5.addEventListener("click", function() {
  if (dropdownContent5.style.display === "none") {
    dropdownContent5.style.display = "block";
  } else {
    dropdownContent5.style.display = "none";
  }
});

div2.insertBefore(dropdownContent5, div2text6);


let div2c_f = makerChild("div", "id", "cf", div2);

const dropdownContent6 = document.getElementById("cf");
dropdownContent6.style.height = "20%";
dropdownContent6.style.width = "80%";
dropdownContent6.style.paddingTop = "5%";
dropdownContent6.style.backgroundColor = "#849ABA";
dropdownContent6.style.border = "none";
dropdownContent6.style.marginLeft = "10%"; 
dropdownContent6.style.alignItems = "center";
dropdownContent6.style.borderRadius = "10px";
dropdownContent6.textContent = "우리가 살고 있는 지구와 같이 태양을 중심으로 돌고 있는 행성들이 모여 있는 곳을 태양계라고 하는데, 태양에서 가까운 순서대로 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 나열되어 총 8개의 행성이 존재한다.";
dropdownContent6.style.fontSize = "15px";
dropdownContent6.style.color = "black";
dropdownContent6.style.justifyContent = "center";
dropdownContent6.style.display = "none";
dropdownContent6.style.marginTop = "10%";

div2text6.addEventListener("click", function() {
  if (dropdownContent6.style.display === "none") {
    dropdownContent6.style.display = "block";
  } else {
    dropdownContent6.style.display = "none";
  }
});

div2.insertBefore(dropdownContent6, div2text7);


let div2c_g = makerChild("div", "id", "cg", div2);

const dropdownContent7 = document.getElementById("cg");
dropdownContent7.style.height = "20%";
dropdownContent7.style.width = "80%";
dropdownContent7.style.paddingTop = "5%";
dropdownContent7.style.backgroundColor = "#849ABA";
dropdownContent7.style.border = "none";
dropdownContent7.style.marginLeft = "10%"; 
dropdownContent7.style.alignItems = "center";
dropdownContent7.style.borderRadius = "10px";
dropdownContent7.textContent = "천문 분광학은 별 및 기타 천체에서 방출되는 가시광선, 자외선, X선, 적외선 및 전파를 포함한 전자기 복사의 스펙트럼을 측정하기 위해 분광학 기술을 사용하여 천문학을 연구하는 학문이다.";
dropdownContent7.style.fontSize = "15px";
dropdownContent7.style.color = "black";
dropdownContent7.style.justifyContent = "center";
dropdownContent7.style.display = "none";
dropdownContent7.style.marginTop = "10%";

div2text7.addEventListener("click", function() {
  if (dropdownContent7.style.display === "none") {
    dropdownContent7.style.display = "block";
  } else {
    dropdownContent7.style.display = "none";
  }
});

div2.appendChild(dropdownContent7);