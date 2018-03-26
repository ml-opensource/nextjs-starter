import styled from 'styled-components';

export const StyledError = styled.div`
  align-items: center;
  display: ${(props: { show: boolean }) => props.show ? 'flex' : 'none'};
  height: calc(100vh - 200px);
  justify-content: center;
  text-align: center;

  h1 {

  }
`;
