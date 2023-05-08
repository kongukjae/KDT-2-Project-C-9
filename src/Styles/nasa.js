//body
document.body.style.margin = "0px";

// root
let rootDiv = document.createElement("div");
document.body.appendChild(rootDiv);
rootDiv.setAttribute("id", "root");
rootDiv.style.backgroundColor = "#EDEDED";
rootDiv.style.height = "844px";
rootDiv.style.width = "390px";

// root안에 나사 페이지 만들어야함

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
div1.style.height = "75%";
div1.style.width = "100%";
div1.style.display = "flex";
div1.style.justifyContent = "center";
// div1.style.flexDirection = "column";
div1.style.position = "relative";
// div1 이미지
let img1 = maker("img", "id", "apod-image", div1);
const div1_img = document.getElementById("apod-image");
div1_img.style.height = "100%";
div1_img.style.width = "100%";

div1_img.addEventListener("click", function () {
  // 사진 클릭 시 메인페이지로 이동
  window.location.href = "main.html";
});

// ⭐div2 스타일
const div2 = document.getElementById("div2");
div2.style.height = "5%";
// div2.style.backgroundColor = "#999999";
div2.style.backgroundColor = "#000000";
div2.style.color = "#FFFFFF";
div2.style.fontSize = "20px"; //사이즈
div2.style.overflowX = "scroll"; //설명이 길 경우 스크롤할 수 있게 만듦

// ⭐div3 스타일
const div3 = document.getElementById("div3");
div3.style.height = "20%";
div3.style.display = "flex";
div3.style.backgroundColor = "#BFBDBD";
div3.style.overflowY = "scroll"; //설명이 길 경우 스크롤할 수 있게 만듦

// 나사 API
const apiKey = "UUodkOYfvl1Sjbaa8vlJ051fxfGfr8QiSZhVef1i"; // 나사 api 키 값 넣기
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // API에서 받아온 데이터 처리
    console.log(data);
    const apodImage = data.url;
    const apodTitle = data.title;
    const apodExplanation = data.explanation;

    const imageElement = document.getElementById("apod-image");
    const titleElement = document.getElementById("div2");
    const explanationElement = document.getElementById("div3");

    imageElement.src = apodImage;
    titleElement.textContent = apodTitle;
    explanationElement.textContent = apodExplanation;
  })
  .catch((error) => {
    // API 요청 실패 시 처리
    console.error(error);
  });
