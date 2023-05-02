/**
 * 주어진 elementId에 해당하는 요소에 스타일과 내용(innerHTML)을 적용하는 함수
 *
 * @param {string} elementId - 스타일과 내용을 적용할 요소의 ID
 * @param {Object} styles - 적용할 스타일을 포함한 객체 (예: {color: 'white', fontSize: '18px'})
 * @param {string} [innerHTML] - 적용할 요소의 내용 (옵션)
 */

module.exports = function styleElement(elementId, styles, innerHTML) {
  // #1
  const element = document.getElementById(elementId);
  // #2
  if (typeof (styles) === 'object') {
    for (const style in styles) {
      if (styles.hasOwnProperty(style) === true) {
        element.style[style] = styles[style];
      }
    }
  } else {
    console.error('두번째 매개변수, 즉 styles 매개변수는 데이터타입이 object여야 합니다.');
    return;
  }
  // #3
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
}