import styled from 'styled-components';

// Constants
import { COLORS, FONTS } from '../../../constants/styles';

export const StyledTextarea = styled.textarea`
  -webkit-appearence: none;
  border: 2px solid ${(props: { err: boolean; }) => props.err ? COLORS.RED : COLORS.TEXT};
  border-radius: 0px;
  display: block;
  height: 100px;
  line-height: 50px;
  padding: 0 14px;
  width: 100%;
  font-family: ${FONTS.SECONDARY};
  font-size: 18px;
`;

export const StyledLabel = styled.div`
  color: ${(props: { err: boolean }) => props.err ? COLORS.RED : COLORS.TEXT};
`;
