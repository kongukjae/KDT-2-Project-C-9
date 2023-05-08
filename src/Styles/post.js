document.body.style.margin = "0px";

// root
let rootDiv = document.createElement("div");
document.body.appendChild(rootDiv);
rootDiv.setAttribute("id", "root");
rootDiv.style.backgroundColor = "#537DBD";
rootDiv.style.height = "844px";
rootDiv.style.width = "390px";

function maker(tagName, setName, setValue, parent) {
  const element = document.createElement(tagName);
  element.setAttribute(setName, setValue);
  parent.appendChild(element);
}
// div 6개
for (let i = 1; i < 7; i++) {
  maker("div", "id", `div${i}`, root);
}
// ⭐div1 스타일
const div1 = document.getElementById("div1");
div1.style.height = "7.5%";
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.backgroundColor = "#537DBD";
// div1.style.justifyContent = "space-between"; //버튼을 양 끝으로 이동
div1.style.alignItems = "center"; //가운데
div1.style.position = "relative";
// div1.style.justifyContent = "center";

//div1안에 있는 버튼1(이전), 버튼2(메뉴)
let button1 = maker("button", "id", "button1", div1);
let button2 = maker("button", "id", "button2", div1);

// 버튼1 스타일
const div1button = document.getElementById("button1");
div1button.style.height = "55%";
div1button.style.width = "10%";
div1button.style.marginTop = "2%";
div1button.style.position = "absolute";
div1button.style.top = "0";
div1button.style.left = "1%";
div1button.addEventListener("click", function () {
  //이전버튼 클릭시 게시판으로 이동
  window.location.href = "board.html";
});
// 버튼1 이미지
div1button.style.backgroundImage = "url('/src/img/previous.png')";
// div1button.style.backgroundSize = "cover";
div1button.style.backgroundColor = "transparent"; //버튼 색 투명
div1button.style.border = "none"; //테두리 X
div1button.style.backgroundSize = "contain"; //이미지가 다 보이게
div1button.style.backgroundRepeat = "no-repeat"; //이미지 반복X

// 버튼2 스타일
const div1button2 = document.getElementById("button2");
div1button2.style.height = "55%";
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
div2.style.height = "7.5%";
div2.style.width = "100%";
div2.style.backgroundColor = "#325489";
div2.style.display = "flex";
div2.style.flexDirection = "column";
div2.style.backgroundColor = "#537DBD";
div2.style.alignItems = "center"; //가운데
div2.style.position = "relative";

//div2안에 있는  텍스트(글작성), 버튼(카테고리 안내창(모달창 나옴))
let text1 = maker("p", "id", "text1", div2);
let button3 = maker("button", "id", "guide", div2); //모달창

// 텍스트 스타일
const div2text = document.getElementById("text1");
div2text.style.height = "5%";
div2text.style.width = "25%";
div2text.textContent = "글작성";
div2text.style.color = "white";
div2text.style.fontWeight = "bold";
div2text.style.fontSize = "18px";
div2text.style.textAlign = "center";
div2text.style.margin = "0";

// 버튼3(모달창) 스타일
const div1modal = document.getElementById("guide");
div1modal.style.height = "45%";
div1modal.style.width = "10%";
div1modal.style.marginTop = "4%"; //위 마진
div1modal.style.position = "absolute";
div1modal.style.top = "0";
div1modal.style.right = "0";
//버튼3(모달창) 이미지
div1modal.style.backgroundImage = "url('/src/img/guide.png')";
div1modal.style.backgroundColor = "transparent"; //버튼 색 투명
div1modal.style.border = "none"; //테두리 X
div1modal.style.backgroundSize = "contain"; //이미지가 다 보이게
div1modal.style.backgroundRepeat = "no-repeat"; //이미지 반복X

// ⭐div3 스타일
const div3 = document.getElementById("div3");
div3.style.height = "8%";
div3.style.backgroundColor = "#D9D9D9";
div3.style.borderBottom = "1px solid  black";
// div3안에 있는 input창을 넣는 곳과 제목 input
let div3_1 = maker("div", "id", "category", div3);
let div3_2 = maker("textarea", "id", "title", div3);

// 카테고리(라디오 버튼)
const category = document.getElementById("category");
category.style.width = "100%";
category.style.height = "50%";
// 제목
const title = document.getElementById("title");
title.style.width = "100%";
title.style.height = "50%";
title.style.backgroundColor = "#D9D9D9";
title.placeholder = "제목을 입력하세요.(글자수 20글자 제한)";
title.maxLength = 20; //글자수 제한
// ⭐div4 스타일
const div4 = document.getElementById("div4");
div4.style.height = "55%";
div4.style.width = "100%";
div4.style.backgroundColor = "#D9D9D9";
div4.style.borderBottom = "1px solid  black";

// 내용  입력
let div4text = maker("textarea", "id", "text", div4);
const content = document.getElementById("text");
content.style.width = "100%";
content.style.height = "98%";
content.style.backgroundColor = "#D9D9D9";
content.placeholder = "내용을 입력하세요.";

// 카테고리 안내창
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

  const modalContent = document.createElement("div");
  modalContent.style.backgroundColor = "#C0DFF0";
  modalContent.style.padding = "20px";
  modalContent.style.fontSize = "18px";
  modalContent.style.textAlign = "center";

  const modalTitle = document.createElement("p");
  modalTitle.textContent = "카테고리 설명";
  modalTitle.style.fontWeight = "bold";

  const p1 = document.createElement("p");
  p1.textContent = "자랑: 자신이 찍은 사진을 올리는 게시글";
  p1.style.fontSize = "15px";
  const p2 = document.createElement("p");
  p2.textContent = "정보: 자신이 공유하고 싶은 내용을 올리는 게시글";
  p2.style.fontSize = "15px";
  const p3 = document.createElement("p");
  p3.textContent = "궁금: 우주와 관련된 궁금한 점을 묻는 게시글";
  p3.style.fontSize = "15px";
  const p4 = document.createElement("p");
  p4.textContent = "기타: 그외 게시글";
  p4.style.fontSize = "15px";

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(p1);
  modalContent.appendChild(p2);
  modalContent.appendChild(p3);
  modalContent.appendChild(p4);

  modalBack.appendChild(modalContent);

  document.body.appendChild(modalBack);

  modalBack.addEventListener("click", function (event) {
    if (event.target === modalBack) {
      modalBack.remove();
    }
  });
}

div1modal.addEventListener("click", showModal);

// ⭐div5 스타일
const div5 = document.getElementById("div5");
div5.style.height = "12%";
div5.style.backgroundColor = "#D9D9D9";
//div5안에 있는 input, 미리보기
let input1 = maker("input", "id", "file", div5); //모달창

// input 스타일설정
const div5input = document.getElementById("file");
div5input.setAttribute("type", "file");
// ⭐div6 스타일
const div6 = document.getElementById("div6");
div6.style.height = "10%";
div6.style.backgroundColor = "#325489";

//div6안에 있는  input submit (등록)
let input2 = maker("input", "id", "regis", div6);

const div6input = document.getElementById("regis");
div6input.setAttribute("type", "submit");
div6input.style.height = "100%";
div6input.style.width = "100%";
div6input.value = "등록";
div6input.style.backgroundColor = "transparent"; //버튼 색 투명
div6input.style.border = "none"; //테두리 X
div6input.addEventListener("click", function () {
  //등록버튼 클릭시 게시판으로 이동
  window.location.href = "board.html";
});

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

const menuItems = ["게시판", "노래소개", "마이페이지", "로그인/회원가입"];
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
  } else {
    menuItem.href = "sign-in.html";
  }

  menuItem.style.display = "block";
  menuItem.style.padding = "20px";
  menuItem.style.fontSize = "20px";
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
