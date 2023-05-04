// 📆해당하는 날짜에 맞게 api보이게 하기
// 년, 월, 일
var currentDate = new Date(); // 현재 날짜 객체 가져오기
var currentMonth = currentDate.getMonth() + 1; // 해당하는 달 가져오기 (0부터 시작하므로 1을 더해줌)
var currentYear = currentDate.getFullYear();
var currentDay = currentDate.getDay();

// 월령 API
var xhr = new XMLHttpRequest();
var url =
  "http://apis.data.go.kr/B090041/openapi/service/LunPhInfoService/getLunPhInfo"; /*URL*/
var queryParams =
  "?" + encodeURIComponent("serviceKey") + "=" + "키값"; /*Service Key*/
queryParams +=
  "&" + encodeURIComponent("solYear") + "=" + encodeURIComponent(currentYear);
queryParams +=
  "&" +
  encodeURIComponent("solMonth") +
  "=" +
  encodeURIComponent("0" + currentMonth); //달만 쓰면 안되고 앞에 0을 써야한다.
//아래(며칠)를 안쓰면 여러개가 보임
queryParams +=
  "&" +
  encodeURIComponent("solDay") +
  "=" +
  encodeURIComponent("0" + currentDay);
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    console.log(xhr.response);
  }
};

xhr.send("");
