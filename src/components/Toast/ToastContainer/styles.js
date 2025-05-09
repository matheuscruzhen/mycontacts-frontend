import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  &:hover {
    cursor: pointer;
  }
`;
