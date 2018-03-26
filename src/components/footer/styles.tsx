import styled from 'styled-components';

// Style constants
import { COLORS, FONTS, LAYOUT } from '../../constants/styles';

// Utils
import breakpoint from '../../utils/breakpoints';

export const StyledFooter = styled.footer`
  margin: 0 auto;
  max-width: ${LAYOUT.MAXWIDTH}px;
  padding: ${LAYOUT.GUTTER * 2}px ${LAYOUT.GUTTER}px;
`;

export const StyledCopyright = styled.p`
  color: ${COLORS.LIGHTGRAY};
  font-size: 12px;
  line-height: 15px;
  margin: 0;
  text-align: right;
  font-family: ${FONTS.SECONDARY};

  a {
    color: ${COLORS.PRIMARY};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ${breakpoint('tabletMax') `
    text-align: center;
  `}
`;
