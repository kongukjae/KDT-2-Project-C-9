/**
 * 주어진 elementId에 해당하는 요소에 스타일과 내용(innerHTML)을 적용하는 함수
 *
 * @param {string} elementId - 스타일과 내용을 적용할 요소의 ID
 * @param {Object} styles - 적용할 스타일을 포함한 객체 (예: {color: 'white', fontSize: '18px'})
 * @param {string} [innerHTML] - 적용할 요소의 내용 (옵션)
 */

module.exports = function styleElement(elementId, styles, innerHTML) {
  //exports 모듈을 내보낸다.
  // #1
  const element = document.getElementById(elementId); //id를 받아옴(ex)text1)
  // #2
  if (typeof styles === "object") {
    //if❕ styles가 객체라면
    for (const style in styles) {
      //for in❕ styles 객체 만큼 반복(문) (ex) element.js-styleExample의 배열 모두 실행된다는 뜻)
      if (styles.hasOwnProperty(style) === true) {
        //hasOwnProperty❕ 객체가 특정 프로퍼티를 갖고 있는지 확인, style을 가지고 있다면 (ex)스타일 안에 있는 height,color 등)
        element.style[style] = styles[style];
      }
    }
  } else {
    console.error(
      //객체가 아닐때 에러메시지
      "두번째 매개변수, 즉 styles 매개변수는 데이터타입이 object여야 합니다."
    );
    return;
  }
  // #3
  if (innerHTML) {
    element.innerHTML = innerHTML; //위에 만든 element에 innerHTML(적용할 요소의 내용)
  }
};
