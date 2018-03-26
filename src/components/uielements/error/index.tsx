import * as React from 'react';

// Styles
import { StyledError } from './styles';

interface Props {
  show: boolean;
  statusCode?: number;
}

const Error = ({ show, statusCode }: Props) => (
  <StyledError show={show}>
    <div>
      <h1>YIKES! ERROR</h1>
      <p>{`An error ${statusCode} occured on the server` || 'Our servers must be having a bad day.'}</p>
      <p style={{ marginBottom: 40 }}>You can try to refresh the page.</p>
    </div>
  </StyledError>
);

export default Error;
