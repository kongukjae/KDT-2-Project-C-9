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
// div 3개
for (let i = 1; i < 4; i++) {
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
let button2 = maker("button", "id", "button2", div1);

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
div1text.textContent = "노래 소개";
div1text.style.color = "white";
div1text.style.fontWeight = "bold";
div1text.style.fontSize = "18px";
div1text.style.textAlign = "center";
div1text.style.margin = "0";

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
div2.style.height = "5%";
div2.style.backgroundColor = "#D9D9D9";
div2.style.display = "flex";
div2.style.flexDirection = "row";

// div2안에 이미지1, text1
let div2div1 = maker("div", "id", "div2_1", div2);
let div2div2 = maker("div", "id", "div2_2", div2);
const div2_1 = document.getElementById("div2_1");
const div2_2 = document.getElementById("div2_2");

// div2_1 스타일
div2_1.style.height = "55%";
div2_1.style.width = "15%";
div2_1.style.marginTop = "2%";
// div2_1.style.marginLeft = "10%";

// fix
//div2_1 이미지
div2_1.style.backgroundImage = "url('/src/img/notice.png')";
div2_1.style.backgroundSize = "contain";
div2_1.style.backgroundRepeat = "no-repeat";

// div2_2 스타일
div2_2.style.height = "100%";
div2_2.style.width = "85%";
div2_2.style.marginTop = "5%";
div2_2.textContent = "노래는 천체(행성, 별 등)와 관련된 노래만 추천 가능!";
div2_2.style.fontSize = "13px";
div2_2.style.margin = "0";
div2_2.style.marginTop = "2.5%";

// ⭐div3 스타일
const div3 = document.getElementById("div3");
div3.style.height = "85%";
div3.style.backgroundColor = "#325489";

// div3에 div를 또 나누기
// div3안에 2개의 div (6개로 나누고 -> 나중에 3개로 나눈다.(이미지와 버튼은 한개이므로))
let div3div1 = maker("div", "id", "div3_1", div3);
let div3div2 = maker("div", "id", "div3_2", div3);
const div3_1 = document.getElementById("div3_1");
const div3_2 = document.getElementById("div3_2");
//추가함
let div3div3 = maker("div", "id", "div3_3", div3);
let div3div4 = maker("div", "id", "div3_4", div3);
const div3_3 = document.getElementById("div3_3");
const div3_4 = document.getElementById("div3_4");

// div3_1 스타일
div3_1.style.height = "20%";
div3_1.style.width = "100%";
div3_1.style.marginTop = "12%";
div3_1.style.display = "flex";
div3_1.style.flexDirection = "row";

// div3_2 스타일
div3_2.style.height = "10%";
div3_2.style.width = "100%";
div3_2.style.marginTop = "5%";
div3_2.style.display = "flex";
div3_2.style.flexDirection = "row";

// div3_3 스타일
div3_3.style.height = "20%";
div3_3.style.width = "100%";
div3_3.style.marginTop = "12%";
div3_3.style.display = "flex";
div3_3.style.flexDirection = "row";

// div3_4 스타일
div3_4.style.height = "10%";
div3_4.style.width = "100%";
div3_4.style.marginTop = "5%";
div3_4.style.display = "flex";
div3_4.style.flexDirection = "row";

// div3안에 있는 노래소개 4개만
let div3c_1 = maker("div", "id", "m1", div3_1);
let div3c_2 = maker("div", "id", "m2", div3_1);
let div3c_3 = maker("div", "id", "m1Content", div3_2);
let div3c_4 = maker("div", "id", "m2Content", div3_2);

// div3c 스타일
const div3music1 = document.getElementById("m1");
div3music1.style.height = "100%";
div3music1.style.width = "40%";
div3music1.style.border = "none";
div3music1.style.marginLeft = "8%";
div3music1.style.textAlign = "center";
div3music1.style.backgroundImage = "url('/src/img/dj.png')";
div3music1.style.backgroundSize = "contain";
div3music1.style.backgroundRepeat = "no-repeat";

const div3music2 = document.getElementById("m2");
div3music2.style.height = "100%";
div3music2.style.width = "40%";
div3music2.style.border = "none";
div3music2.style.marginLeft = "8%";
div3music2.style.textAlign = "center";
div3music2.style.backgroundImage = "url('/src/img/record.png')";
div3music2.style.backgroundSize = "contain";
div3music2.style.backgroundRepeat = "no-repeat";

const div3music1Content = document.getElementById("m1Content");
div3music1Content.style.height = "70%";
div3music1Content.style.width = "40%";
div3music1Content.style.border = "none";
div3music1Content.style.marginLeft = "8%";
div3music1Content.style.textAlign = "center";
div3music1Content.style.backgroundColor = "#9BB5DC";
div3music1Content.style.borderRadius = "30px";
div3music1Content.textContent = "노래 추가";
div3music1Content.style.fontSize = "20px";
div3music1Content.style.color = "white";
div3music1Content.style.display = "flex";
div3music1Content.style.alignItems = "center";
div3music1Content.style.justifyContent = "center";
div3music1Content.style.fontWeight = "bold";

const div3music2Content = document.getElementById("m2Content");
div3music2Content.style.height = "70%";
div3music2Content.style.width = "40%";
div3music2Content.style.border = "none";
div3music2Content.style.marginLeft = "8%";
div3music2Content.style.textAlign = "center";
div3music2Content.style.backgroundColor = "#537DBD";
div3music2Content.style.borderRadius = "30px";
div3music2Content.textContent = "유미-별";
div3music2Content.style.fontSize = "20px";
div3music2Content.style.color = "white";
div3music2Content.style.display = "flex";
div3music2Content.style.alignItems = "center";
div3music2Content.style.justifyContent = "center";
div3music2Content.style.fontWeight = "bold";

//노래추가하면 나오는 것. 임의로 작성
let div3c_5 = maker("div", "id", "m3", div3_3);
let div3c_6 = maker("div", "id", "m3Content", div3_4);

const div3music3 = document.getElementById("m3");
div3music3.style.height = "100%";
div3music3.style.width = "40%";
div3music3.style.border = "none";
div3music3.style.marginLeft = "8%";
div3music3.style.textAlign = "center";
div3music3.style.backgroundImage = "url('/src/img/record.png')";
div3music3.style.backgroundSize = "contain";
div3music3.style.backgroundRepeat = "no-repeat";
div3music3.style.display = "none";

const div3music3Content = document.getElementById("m3Content");
div3music3Content.style.height = "70%";
div3music3Content.style.width = "40%";
div3music3Content.style.border = "none";
div3music3Content.style.marginLeft = "8%";
div3music3Content.style.textAlign = "center";
div3music3Content.style.backgroundColor = "#537DBD";
div3music3Content.style.borderRadius = "30px";
div3music3Content.textContent = "도영-like a star";
div3music3Content.style.fontSize = "20px";
div3music3Content.style.color = "white";
div3music3Content.style.display = "flex";
div3music3Content.style.alignItems = "center";
div3music3Content.style.justifyContent = "center";
div3music3Content.style.fontWeight = "bold";
div3music3Content.style.paddingTop = "2%";
div3music3Content.style.display = "none";

// 카테고리 모달창
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
  modalBack.style.zIndex = "1";

  const modalContent = document.createElement("div");
  modalContent.style.backgroundColor = "#6376A6";
  modalContent.style.padding = "20px";
  modalContent.style.fontSize = "18px";
  modalContent.style.width = "70%";

  modalContent.style.textAlign = "center";

  const modalTitle = document.createElement("p");
  modalTitle.textContent = "노래 추천";
  modalTitle.style.fontWeight = "bold";

  const p1 = document.createElement("p");
  p1.textContent = "가수";
  p1.style.fontSize = "20px";
  p1.style.color = "white";
  p1.style.fontWeight = "bold";

  const p2 = document.createElement("input");
  p2.style.fontSize = "15px";
  p2.style.color = "black";
  p2.style.fontWeight = "bold";

  const p3 = document.createElement("p");
  p3.textContent = "제목";
  p3.style.fontSize = "20px";
  p3.style.color = "white";
  p3.style.fontWeight = "bold";

  const p4 = document.createElement("input");
  p4.style.fontSize = "15px";
  p4.style.color = "black";
  p4.style.fontWeight = "bold";

  const p5 = document.createElement("p");
  p5.textContent = "등록";
  p5.style.fontSize = "15px";
  p5.style.color = "black";
  p5.style.fontWeight = "bold";

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(p1);
  modalContent.appendChild(p2);
  modalContent.appendChild(p3);
  modalContent.appendChild(p4);
  modalContent.appendChild(p5);

  modalBack.appendChild(modalContent);

  document.body.appendChild(modalBack);

  modalBack.addEventListener("click", function (event) {
    if (event.target === modalBack) {
      modalBack.remove();
    }
  });
  p5.addEventListener("click", function (event) {
    if (event.target === p5) {
      modalContent.remove();
      modalBack.remove();
      div3music3.style.display = "block";
      div3music3Content.style.display = "block";
    }
  });
}

div3music1Content.addEventListener("click", showModal);

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
