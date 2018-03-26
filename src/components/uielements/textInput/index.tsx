import * as React from 'react';

// Styles
import { Error } from '../styles';
import { StyledInput, StyledLabel } from './styles';

interface Props {
  height?: number;
  placeholder?: string;
  meta?: any;
  input?: any;
  type?: string;
  label?: string;
}

const Input = ({
  placeholder,
  height,
  type,
  label,
  meta: { touched, error },
  input }: Props) => (
    <div style={{ position: 'relative', paddingBottom: 25 }}>
      <StyledLabel
        className="label__container"
        err={touched && error}
      >
        <span>{label}</span>
      </StyledLabel>
      <StyledInput
        {...input}
        height={height}
        placeholder={placeholder}
        type={type || 'text'}
        err={touched && error}
      />
      <Error className="form--error">{touched && error}</Error>
    </div>
  );

export default Input;
