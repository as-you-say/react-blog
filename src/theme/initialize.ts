import { createGlobalStyle } from 'styled-components';

export const initialize = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  dl,ul,li,ol,menu {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /*  < Phark Method >
      이미지로 대체할 엘리먼트에 배경이미지를 설정하고 
      글자는 text-indent를 이용하여 화면 바깥으로(-9999px만큼 내어 쓰기) 
      빼내어 보이지 않게 하는 방법 */
  .ir-pm {
    display:  block;
    overflow:  hidden;
    font-size:  0;
    line-height:  0;
    text-indent:  -9999px;
  }

  /*  < WA IR > 
      이미지로 대체할 엘리먼트에 배경이미지를 설정하고 글자는 span 태그로 감싼 후
      z-index:-1을 이용하여 화면에 안보이게 처리
  */
  .ir-wa {
    display:  block;
    overflow:  hidden;
    position:  relative;
    z-index:  -1;
    width:  100%;
    height:  100%;
  }

  /*  < Block Formatting Context > 
      대체 텍스트가 아니라 접근성을 위한 숨김 텍스트를 제공할 때 - 블록 요소
  */
  .ir-text-bfc {
    overflow:  hidden;
    border:  0;
    margin:  -1px;
    width:  1px;
    height:  1px;
    clip:  rect(1px, 1px, 1px, 1px);
    clip-path:  inset(50%);
  }

  /*  < Inline Formatting Context > 
      대체 텍스트가 아니라 접근성을 위한 숨김 텍스트를 제공할 때 - 인라인 요소
  */
  .ir-text-ifc {
    overflow:  hidden;
    border:  0;
    position:  absolute;
    width:  1px;
    height:  1px;
    clip:  rect(1px, 1px, 1px, 1px);
    clip-path:  inset(50%);
  }

  /* 폰트 초기화 */
  body, input, textarea, select, button, table {
    font-family: 'Nanum Gothic', 'Malgun Gothic', '맑은 고딕', dotum, '돋움', sans-serif;
    color: #222;
    font-size: 13px;
    line-height: 1.5;
  }

  /* 이미지 공간뜨임 초기화 */
  img {
    display: inline-block;
    vertical-align: top;
  }
`