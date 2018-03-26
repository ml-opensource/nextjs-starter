import styled from 'styled-components';

// Constants
import { COLORS, FONTS } from '../../../constants/styles';

export const StyledInput = styled.input`
  border: 2px solid ${(props: { err: boolean; }) => props.err ? COLORS.RED : COLORS.TEXT};
  display: block;
  height: 50px;
  line-height: 50px;
  padding: 0 14px;
  width: 100%;
  font-family: ${FONTS.SECONDARY};
  font-size: 18px;
`;

export const StyledLabel = styled.div`
  color: ${(props: { err: boolean; }) => props.err ? COLORS.RED : COLORS.TEXT};
`;
