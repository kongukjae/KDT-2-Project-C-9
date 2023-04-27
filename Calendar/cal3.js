// 날짜 출력 연습
let text = "";
let date = new Date();
let toYear = date.getFullYear();
let toMonth = date.getMonth();
firstDay = new Date(toYear, toMonth, 1).getDay();
lastDate = new Date(toYear, toMonth + 1, 0).getDate(); //마지막 날짜

// let days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); //마지막 날짜 구하기 위해서 다음달의 0번째 날짜를 구한 것

let month = toYear + "년" + (toMonth + 1) + "월";
console.log(month);

// 첫째주에 빈칸 표시[]
for (let zero = 0; zero < firstDay; zero++) {
  text += "[]";
}

for (let i = 1; i <= lastDate; i++) {
  getday = new Date(toYear, toMonth, i).getDay(); //요일을 얻어낸다(일요일 0, 토요일 6)
  if (getday == 0) {
    //일주일로 나눠서 보여줌
    text += "/n";
  }
  text += "" + i;
}
console.log(text);
