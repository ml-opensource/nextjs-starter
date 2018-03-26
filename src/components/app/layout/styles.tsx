import { normalize, readableColor } from 'polished';
import styled, { injectGlobal } from 'styled-components';

// Utils
import breakpoint from '../../../utils/breakpoints';

// Constants
import { COLORS, FONTS, LAYOUT, ORDER } from '../../../constants/styles';

/* tslint:disable:no-unused-expression */
injectGlobal`
  // @ts-ignore
  ${normalize()}
  * {
    box-sizing: border-box;
  }

  html, body, .root, #__next {
    height: 100%;
  }

  body {
    background-color: ${COLORS.BODY};
    color: ${COLORS.TEXT};
    font-family: ${FONTS.PRIMARY};
  }

  input,
  textarea,
  select {
    font-family: ${FONTS.PRIMARY};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  img {
    border: none;
    outline: none;
  }

  // This is for Optimize
  .async-hide {
    opacity: 0 !important;
  }

  /* hides number scroller for chrome and safari  */
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* hides number scroller for mozilla  */
  input[type='number'] {
    -moz-appearance:textfield;
  }
`;

export const StyledLayout = styled.div`
  ${(props: { disableFocus: boolean }) => props.disableFocus ? `
    a, button, input {
      outline: none;
    }
  ` : ''}
`;

export const StyledContent = styled.div`
  background-color: ${COLORS.CONTENT};
  height: ${(props: { loading: boolean }) => props.loading ? '100vh' : 'auto'};
  min-height: 100%;
  > div {
    margin: 0 auto 0;
    padding-top: ${LAYOUT.MOBILE_HEADERHEIGHT}px;

    ${breakpoint('tabletMin') `
      padding-top: ${LAYOUT.HEADERHEIGHT}px;
    `}
  }
`;

export const AccessibilityAid = styled.a`
  position: fixed;
  width: 1px;
  height: 1px;
  margin: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  &:focus {
    background: ${COLORS.HEADER};
    top: 0;
    z-index: ${ORDER.SKIP_TO_CONTENT};
    height: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
    padding: 0 10px;
    clip: auto;
    font-weight: bold;
    line-height: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
    color: ${readableColor(COLORS.HEADER)};
    text-decoration: none;
    width: auto;

    ${breakpoint('tabletMin') `
      height: ${LAYOUT.HEADERHEIGHT}px;
      line-height: ${LAYOUT.HEADERHEIGHT}px;
    `}
  }
`;
