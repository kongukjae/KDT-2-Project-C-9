// 📆해당하는 날짜에 맞게 api보이게 하기
// 년, 월, 일
var currentDate = new Date(); // 현재 날짜 객체 가져오기
var currentMonth = currentDate.getMonth() + 1; // 해당하는 달 가져오기 (0부터 시작하므로 1을 더해줌)
var currentYear = currentDate.getFullYear();
var currentDay = currentDate.getDay();
/* var date =
  currentYear.toString() + padNumber(currentMonth) + padNumber(currentDay); */

// 월령 API
var xhr = new XMLHttpRequest();
var url =
  "http://apis.data.go.kr/B090041/openapi/service/LunPhInfoService/getLunPhInfo"; /*URL*/
var queryParams =
  "?" +
  encodeURIComponent("serviceKey") +
  "=" +
  "sLG8GxH%2BnJvDMU0R5HXBeGf0uKnmavrshGmvC%2F6x9JHxF1aAqG2gImPUoAnS0HcwF3u9y7VvXKUm%2B1skVniFcQ%3D%3D"; /*Service Key*/
queryParams +=
  "&" + encodeURIComponent("solYear") + "=" + encodeURIComponent("2023");
queryParams +=
  "&" + encodeURIComponent("solMonth") + "=" + encodeURIComponent("05");
queryParams +=
  "&" + encodeURIComponent("solDay") + "=" + encodeURIComponent("04");
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    console.log(xhr.response);
    /*     alert(
      "Status: " +
        this.status +
        "nHeaders: " +
        JSON.stringify(this.getAllResponseHeaders()) +
        "nBody: " +
        this.responseText
    ); */
  }
};

xhr.send("");

// 참고할 것
/*     var xhr2 = new XMLHttpRequest();
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
xhr2.send(""); */
