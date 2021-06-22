import styled, { keyframes } from 'styled-components';

const theme = {
  yellow: '#cdca69',
  dsoulsFont: 'OptimusPrincepsSemiBold',
  arcadeFont: 'ARCADECLASSIC',
};

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 0 250px;

  h2 {
    margin-top: 200px;
    line-height: 3rem;
    max-width: 350px;
  }

  img {
    position: relative;
    top: 5.1rem;
    width: 800px;
    margin-left: auto;
    animation: ${appearFromBottom} 2s;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.2)
    );
  }
`;

export const TextContent = styled.section`
  font-family: ${theme.dsoulsFont};

  h2 {
    margin-top: 200px;
    letter-spacing: 0.05rem;
    line-height: 3rem;
  }

  h3 {
    margin-top: 20px;
  }

  #continue {
    margin-left: 5rem;
    font-size: 36px;
    letter-spacing: 0.5rem;
  }

  #please {
    margin-left: 10rem;
    font-size: 44px;
    letter-spacing: 0.5rem;
  }
  #praise {
    margin-left: 10rem;
    font-size: 44px;
    letter-spacing: 0.5rem;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(
      to right,
      ${theme.yellow},
      ${theme.yellow} 50%,
      white 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 375ms ease;
    &:hover {
      background-position: 0 100%;
    }
  }
`;
