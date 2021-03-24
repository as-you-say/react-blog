import { css, FlattenSimpleInterpolation } from "styled-components";

interface Font {
  fontFace: {
    fontFamily: string;
    url: string;
  };
  h1: FlattenSimpleInterpolation;
  h2: FlattenSimpleInterpolation;
  h3: FlattenSimpleInterpolation;
  p: FlattenSimpleInterpolation;
}

export const Noto_Sans_KR : Font = {
  fontFace: {
    fontFamily: 'Noto Sans KR',
    url: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap',
  },
  h1 : css`
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -0.75px;
  `,
  h2 : css`
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -0.75px;
  `,
  h3 : css`
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -0.75px;
  `,
  p : css`
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -0.75px;
  `
}
