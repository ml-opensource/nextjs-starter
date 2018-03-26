import * as React from 'react';

// Styles
import { TextAreaError } from '../styles';
import { StyledLabel, StyledTextarea } from './styles';

interface Props {
  height?: number;
  placeholder?: string;
  meta?: any;
  input?: any;
  type?: string;
  value?: string;
  label?: string;
}

const Textarea = ({
  placeholder,
  height,
  type,
  value,
  label,
  meta: { touched, error },
  input }: Props) => (
    <div style={{ position: 'relative', paddingBottom: 25 }}>
      <StyledLabel err={touched && error} className="label__container">
        <span>{label}</span>
      </StyledLabel>
      <StyledTextarea
        {...input}
        height={height}
        placeholder={placeholder}
        type={type || 'text'}
        err={touched && error}
      />
      <div className="textarea-error__container">
        <TextAreaError className="textarea--error">{touched && error}</TextAreaError>
      </div>
    </div>
  );

export default Textarea;
