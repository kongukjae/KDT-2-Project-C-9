// 날짜 출력 연습
let text = "";
let date = new Date();
let days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); //마지막 날짜 구하기 위해서 다음달의 0번째 날짜를 구한 것

let month = date.getFullYear() + "년" + (date.getMonth() + 1) + "월";
console.log(month);

for (let i = 1; i <= days; i++) {
  text += "" + i;
  if (i % 7 == 0) {
    //일주일로 나눠서 보여줌
    text += "/n";
  }
}
console.log(text);
/* console.log(new Date());라고 쓰면
결과: 2023-04-25T01:38:21.187Z */
/* console.log(new Date(0)); 라고 쓰면
결과: 1970-01-01T00:00:00.000Z 
*/
