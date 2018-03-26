import styled from 'styled-components';

// Constants
import { COLORS, FONTS, LAYOUT } from '../../../constants/styles';

// Utils
import breakpoint from '../../../utils/breakpoints';

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 920px;
  padding: 50px ${LAYOUT.GUTTER}px;

  > div {
    display: flex;
    flex-basis: 50%;
  }

  .select-form {
    ${breakpoint('tabletMax') `
      margin-bottom: 50px;
    `}
  }

  .textarea-form {
    ${breakpoint('tabletMin') `
      flex-basis: 100%;
    `}
  }

  .submit-form {
    flex-basis: 100%;
    justify-content: center;
    display: flex;
  }

  label {
    margin-right: ${LAYOUT.GUTTER}px;
    width: 100%;

    span {
      font-family: ${FONTS.PRIMARY};
      font-size: 14px;
      letter-spacing: 1px;
    }
  }

  .label__container {
    padding-bottom: 5px;
  }

  .form-error__container,
  .textarea-error__container {
    padding-top: 5px;
  }

  .select-error__container {
    margin-top: 1.9rem;
  }

  .form--error,
  .select--error,
  .textarea--error {
    font-family: ${FONTS.SECONDARY};
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: 600;
  }

  p {
    font-size: 9px;
    line-height: 14px;
    a {
      color: ${COLORS.PRIMARY}
    }
  }

  ${breakpoint('tabletMax') `
    display: block;
    > div, label {
      display: block;
    }
  `}
`;

export const StyledCheckboxes = styled.div`
  font-weight: bold;
  margin: 10px 20px 0 0;
  ${breakpoint('tabletMax') `
    margin-bottom: 20px;
  `}
`;
