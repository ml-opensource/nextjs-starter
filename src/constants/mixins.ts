import { darken } from 'polished';
import styled from 'styled-components';

// Constants
import { COLORS, FONTS, LAYOUT } from './styles';

// Utils
import breakpoint from '../utils/breakpoints';

// Module mixin that provides max-width constraints and basic font resets
export const GenericSlot = styled.div`
  margin: 0 auto;
  max-width: ${LAYOUT.MAXWIDTH}px;
  padding: ${LAYOUT.GUTTER}px;

  h1, h2, h3, h4, p, ul, li {
    color: ${COLORS.TEXT};
    font-family: ${FONTS.PRIMARY};
    font-weight: normal;
  }
`;

export const PrimaryButton = styled.button`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 150ms linear;

  background: ${COLORS.PRIMARY};
  border: 2px solid transparent;
  color: ${COLORS.WHITE};
  cursor: pointer;
  display: inline-block;
  font-family: ${FONTS.PRIMARY};
  font-size: 18px;
  height: auto;
  letter-spacing: 2px;
  line-height: 20px;
  padding: ${LAYOUT.GUTTER * 0.75}px ${LAYOUT.GUTTER * 1.5}px;
  text-align: center;

  // Hover State
  &:hover {
    background: ${darken(0.05, COLORS.PRIMARY)};
  }

  ${breakpoint('desktopMax')`
    font-size: 13px;
    letter-spacing: 1px;
    padding: 10px 15px 8px;
  `}
`;