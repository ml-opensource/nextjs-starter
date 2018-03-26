import styled from 'styled-components';
import { COLORS, FONTS } from '../../constants/styles';

export const Error = styled.span`
  bottom: ${(props: { left?: number, bottom?: number }) => props.bottom || 8}px;
  left: ${(props: { left?: number, bottom?: number }) => props.left || 0}px;
  color: red;
  font-size: 14px;
  font-weight: 600;
  font-family: ${FONTS.SECONDARY};
  padding-top: 5px;
`;

export const SelectError = styled.span`
  font-size: 14px;
  color: ${COLORS.RED};
  font-weight: 600;
  font-family: ${FONTS.SECONDARY};
  padding-top: 5px;
`;

export const TextAreaError = styled.span`
  font-size: 14px;
  color: ${COLORS.RED};
  font-weight: 600;
  font-family: ${FONTS.SECONDARY};
  padding-top: 5px;
`;
