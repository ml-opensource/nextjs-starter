import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';

// Style constants
import { COLORS, FONTS, LAYOUT, ORDER } from '../../constants/styles';

// Utils
import breakpoint from '../../utils/breakpoints';

// Animations
const fadeInFromNone = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
`;

export const StyledHeader = styled.header`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: ${COLORS.HEADER};
  box-shadow: 0 0 15px 0 rgba(0,0,0,0.3);
  left: 0;
  padding: 0 ${LAYOUT.GUTTER}px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${ORDER.HEADER};
  > div {
    align-items: center;
    display: flex;
    height: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
    margin: 0 auto;
    max-width: ${LAYOUT.MAXWIDTH}px;
    line-height: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
    padding: 0px;
  }

  ${breakpoint('tabletMin') `
    > div {
      height: ${LAYOUT.HEADERHEIGHT}px;
      line-height: ${LAYOUT.HEADERHEIGHT}px;
    }
  `}
`;

export const StyledLogoLink = styled.a`
  cursor: pointer;
  display: block;
  margin-right: 25px;
  width: 100%;
  max-width: 45px;
  img {
    display: block;
    width: 100%;
    max-width: 45px;
  }

  ${breakpoint('desktopMin') `
    max-width: 65px;
    img {
      max-width: 65px;
    }
  `}
`;

export const StyledLinks = styled.div`
  ${(props: { isMobileNav: boolean }) => props.isMobileNav ? '' : ''}
  display: flex;

  ${breakpoint('tabletMin') `
    align-items: center;
    flex: 1;
  `}

  ${breakpoint('tabletMax') `
    background-color: ${COLORS.HEADER};
    box-shadow: inset 0 0 15px 0 rgba(0,0,0,0.3);
    display: none;
    flex-direction: column;
    height: calc(100% - ${LAYOUT.MOBILE_HEADERHEIGHT}px);
    left: 0;
    padding: 20px 0;
    position: fixed;
    text-align: center;
    top: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
    width: 100%;
    z-index: ${ORDER.MENU};

    // When mobile nav is triggered
    ${(props: { isMobileNav: boolean }) => props.isMobileNav && `
      display: flex;
      animation: ${fadeInFromNone} 0.2s ease-in-out;
    `}
  `}
`;

export const StyledNavLink = styled.span`
  display: block;
  flex: auto;
  font-size: 17px;
  font-weight: 500;
  line-height: normal;
  text-align: center;

  ${breakpoint('desktopMax') `
    font-size: 15px;
  `}

  ${breakpoint('tabletMax') `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  `}

  a {
    transition: all 150ms linear;

    align-items: center;
    color: ${COLORS.WHITE};
    display: flex;
    height: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
    justify-content: center;
    padding: 0 15px;
    text-decoration: none;
    font-size: 18px;
    font-family: ${FONTS.PRIMARY};
    &:hover {
      color: ${darken(0.15, COLORS.WHITE)};
    }

    ${breakpoint('tabletMin') `
      height: ${LAYOUT.HEADERHEIGHT}px;
    `}
  }
`;

export const StyledHamburger = styled.button`
  ${(props: { isMobileNav: boolean }) => props.isMobileNav ? '' : ''}

  display: none;

  ${breakpoint('tabletMax') `
    background: transparent;
    border: none;
    display: block;
    width: 40px;
    height: ${LAYOUT.MOBILE_HEADERHEIGHT}px;
    position: absolute;
    top: 0;
    right: 10px;

    > div {
      text-align: center;
      width: 20px;
      height: 23px;
      margin: 0 auto;
      overflow: hidden;
      transition: 0.3s;
      span {
        float: left;
        width: 20px;
        height: 2px;
        background-color: ${COLORS.WHITE};
        position: relative;
        top: 10px;
        transition: 0.3s;
        &:before{
          content: '';
          width: 20px;
          height: 2px;
          background-color: ${COLORS.WHITE};
          position: absolute;
          top: -6px;
          left: 0;
        }
        &:after {
          content: '';
          width: 20px;
          height: 2px;
          background-color: ${COLORS.WHITE};
          position: absolute;
          bottom: -6px;
          left: 0;
        }
      }

      ${(props: { isMobileNav: boolean }) => props.isMobileNav && `
        transform: rotate(90deg);
        span{
          background-color: transparent;
          &:before{
            top: 0;
            transform: rotate(-45deg);
          }
          &:after{
            bottom: 0;
            transform: rotate(45deg);
          }
        }
      `}
    }
  `}
`;
