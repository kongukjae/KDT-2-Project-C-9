// 서버사이드에서만 require 메서드를 사용할 수 있다.
// 간단한 예시
const elementStyler = require('./dom-element-styler.js');

let styleExample = {
  height: "5%",
  width: "25%",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  textAlign: "center",
  margin: "0"
}

elementStyler("text1", styleExample, "마이페이지");