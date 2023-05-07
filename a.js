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
// div1button.style.backgroundImage = "url('/src/img/logo.png')";
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
div1button2.style.backgroundImage = "url('menu.png')";
div1button2.style.backgroundSize = "cover";
div1button2.style.backgroundColor = "transparent"; //버튼 색 투명
div1button2.style.border = "none"; //테두리 X
//fix
// Create menu container div and add it to the root div 
const menuContainer = document.createElement("div");
root.appendChild(menuContainer);
menuContainer.style.position = "fixed";
menuContainer.style.top = "0";
menuContainer.style.right = "-50%";
menuContainer.style.height = "100%";
menuContainer.style.width = "50%";
menuContainer.style.backgroundColor = "#fff";
menuContainer.style.transition = "all 0.3s ease-in-out";

// Create menu items
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

// Add click event listener to div1button2 to show/hide the menu
div1button2.addEventListener("click", function() {
  if (menuContainer.style.right === "-50%") {
    // Show menu
    menuContainer.style.right = "0";
  } else {
    // Hide menu
    menuContainer.style.right = "-50%";
  }
});


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

//div2_1 이미지
// div2_1.style.backgroundImage = "url('/src/img/notice.png')";
div2_1.style.backgroundSize = "contain";
div2_1.style.backgroundRepeat = "no-repeat";

// div2_2 스타일
div2_2.style.height = "100%";
div2_2.style.width = "85%";


// ⭐div3 스타일
const div3 = document.getElementById("div3");
div3.style.height = "85%";
div3.style.backgroundColor = "#325489";
