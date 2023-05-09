/* 수정할 것
1. 메뉴 클릭시 메뉴 이동
2. 버튼에 맞는 링크 연결 */

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
div2text2.textContent = "👩🏻‍🚀달에 대해 더 알고싶어요";
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
div2text3.textContent = "👩🏻‍🚀우주";
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
div2text4.textContent = "👩🏻‍🚀우주";
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
div2text5.textContent = "👩🏻‍🚀우주";
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
div2text6.textContent = "👩🏻‍🚀우주";
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
div2text7.textContent = "👩🏻‍🚀우주";
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
    menuItem.href = "mypage.html";
  } else if (i === 3) {
    menuItem.href = "dictionary.html";
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
