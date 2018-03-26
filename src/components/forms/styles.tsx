import styled from 'styled-components';

// Constants
import { PrimaryButton } from '../../constants/mixins';
import { COLORS, LAYOUT } from '../../constants/styles';

// Utils
import breakpoint from '../../utils/breakpoints';

export const StyledSuccess = styled.div`
  color: ${COLORS.PRIMARY};
  font-size: 32px;
  line-height: 34px;
  margin: 0 auto;
  max-width: 640px;
  text-align: center;
  padding: ${LAYOUT.GUTTER * 2}px ${LAYOUT.GUTTER}px;

  ${breakpoint('tabletMax')`
    font-size: 24px;
    line-height: 26px;
  `}
`;

export const StyledSubmit = PrimaryButton.extend`
  display: block;
  margin: 0 auto;
  max-width: 200px;
  width: 100%;
`;
