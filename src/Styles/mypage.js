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
div1text.textContent = "마이페이지";
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
div2.style.height = "85%";
div2.style.backgroundColor = "#D9D9D9";
div2.style.display = "flex";
div2.style.flexDirection = "column";

// div2안에 2개의 div
let div2div1 = maker("div", "id", "div2_1", div2);
let div2div2 = maker("div", "id", "div2_2", div2);
const div2_1 = document.getElementById("div2_1");
const div2_2 = document.getElementById("div2_2");

// div2_1 스타일
div2_1.style.height = "20%";
div2_1.style.width = "100%";
div2_1.style.marginTop = "12%";
// div2_1.style.marginLeft = "10%";

// div2_2 스타일
div2_2.style.height = "30%";
div2_2.style.width = "100%";
div2_2.style.marginTop = "5%";

function makerChild(tagName, setName, setValue, parent) {
  const element = document.createElement(tagName);
  element.setAttribute(setName, setValue);
  parent.appendChild(element);
}
// div2안에 있는 페이지로 이동, 탈퇴 할 수 있는 버튼 4개
let div2c_1 = makerChild("button", "id", "user", div2_1);
let div2c_2 = makerChild("button", "id", "writing", div2_1);
let div2c_3 = makerChild("button", "id", "logout", div2_2);
let div2c_4 = makerChild("button", "id", "withdrawal", div2_2);

// div2c 버튼1 스타일
const div2cButton1 = document.getElementById("user");
div2cButton1.style.height = "60%";
div2cButton1.style.width = "40%";
div2cButton1.style.backgroundColor = "#537DBD";
div2cButton1.style.border = "none";
// div2cButton1.style.marginLeft = "8%";
div2cButton1.style.textAlign = "center";

div2cButton1.style.borderRadius = "30px";
div2cButton1.textContent = "회원정보";
div2cButton1.style.fontSize = "20px";
div2cButton1.style.color = "white";
div2cButton1.addEventListener("click", function () {
  // 회원정보 페이지 이동
  window.location.href = "profile.html";
});

// div2c 버튼2 스타일
const div2cButton2 = document.getElementById("writing");
div2cButton2.style.height = "60%";
div2cButton2.style.width = "40%";
div2cButton2.style.backgroundColor = "#537DBD";
div2cButton2.style.border = "none";
div2cButton2.style.marginLeft = "5%";
div2cButton2.style.borderRadius = "30px";
div2cButton2.textContent = "글관리";
div2cButton2.style.fontSize = "20px";
div2cButton2.style.color = "white";

// div2c 버튼3 스타일
const div2cButton3 = document.getElementById("logout");
div2cButton3.style.height = "40%";
div2cButton3.style.width = "40%";
div2cButton3.style.backgroundColor = "#537DBD";
div2cButton3.style.border = "none";
// div2cButton3.style.marginLeft = "8%";
div2cButton3.style.textAlign = "center";
div2cButton3.style.borderRadius = "30px";
div2cButton3.textContent = "로그아웃";
div2cButton3.style.fontSize = "20px";
div2cButton3.style.color = "white";

// 로그아웃 클릭시 나타나는 모달
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
  modalContent.style.backgroundColor = "#7DA8DC";
  modalContent.style.padding = "20px";
  modalContent.style.fontSize = "18px";
  modalContent.style.textAlign = "center";
  modalContent.style.width = "23%";
  modalContent.style.borderRadius = "30px";

  const modalTitle = document.createElement("p");
  modalTitle.textContent = "로그아웃 하시겠습니까?";
  modalTitle.style.fontWeight = "bold";

  const p1 = document.createElement("p");
  p1.textContent = "취소     🤷🏻‍♀️     확인";
  p1.style.fontSize = "30px";
  p1.style.color = "#0108C0";
  p1.style.fontWeight = "bold";

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(p1);

  modalBack.appendChild(modalContent);

  document.body.appendChild(modalBack);

  modalBack.addEventListener("click", function (event) {
    if (event.target === modalBack) {
      modalBack.remove();
    }
  });
  p1.addEventListener("click", function (event) {
    if (event.target === p1) {
      modalContent.remove();
      modalBack.remove();
    }
  });
}
div2cButton3.addEventListener("click", showModal);

// div2c 버튼4 스타일
const div2cButton4 = document.getElementById("withdrawal");
div2cButton4.style.height = "40%";
div2cButton4.style.width = "40%";
div2cButton4.style.backgroundColor = "#537DBD";
div2cButton4.style.border = "none";
div2cButton4.style.marginLeft = "5%";
div2cButton4.style.borderRadius = "30px";
div2cButton4.textContent = "탈퇴";
div2cButton4.style.fontSize = "20px";
div2cButton4.style.color = "white";
// 탈퇴  클릭시 나타나는 모달
function showModal2() {
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
  modalContent.style.backgroundColor = "#7DA8DC";
  modalContent.style.padding = "20px";
  modalContent.style.fontSize = "18px";
  modalContent.style.textAlign = "center";
  modalContent.style.width = "23%";
  modalContent.style.borderRadius = "30px";

  const modalTitle = document.createElement("p");
  modalTitle.textContent = "탈퇴 하시겠습니까?";
  modalTitle.style.fontWeight = "bold";

  const p1 = document.createElement("p");
  p1.textContent = "취소     🤷🏻‍♂️     확인";
  p1.style.fontSize = "30px";
  p1.style.color = "#0108C0";
  p1.style.fontWeight = "bold";

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(p1);

  modalBack.appendChild(modalContent);

  document.body.appendChild(modalBack);

  modalBack.addEventListener("click", function (event) {
    if (event.target === modalBack) {
      modalBack.remove();
    }
  });
  p1.addEventListener("click", function (event) {
    if (event.target === p1) {
      modalContent.remove();
      modalBack.remove();
    }
  });
}
div2cButton4.addEventListener("click", showModal2);
// 🍔메뉴창
const menuContainer = document.createElement("div");
root.appendChild(menuContainer);
menuContainer.style.position = "fixed";
menuContainer.style.top = "0";
menuContainer.style.right = "-50%";
menuContainer.style.marginRight = "570px";//수정
menuContainer.style.height = "100%";
menuContainer.style.width = "15%";//수정
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
