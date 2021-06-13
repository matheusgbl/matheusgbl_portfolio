import styled from 'styled-components';

const theme = {
  yellow: '#cdca69',
  dsoulsFont: 'OptimusPrincepsSemiBold',
  arcadeFont: 'ARCADECLASSIC',
};

export const Container = styled.div`
  padding: 50px 180px;
  color: #fff;
  display: flex;
  align-items: center;

  h1 {
    font-family: ${theme.arcadeFont}, sans-serif;
    letter-spacing: 1rem;

    &:hover {
      cursor: pointer;
      color: ${theme.yellow};
    }
  }

  nav {
    margin-left: auto;
    display: flex;
    font-size: 20px;
    font-family: ${theme.dsoulsFont}, sans-serif;

    & > p {
      margin-left: 120px;

      &:hover {
        cursor: pointer;
        color: ${theme.yellow};
      }
    }
  }
`;
