/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Container } from './styles';

import solaire from '../../assets/solaire.gif';

export const Hero: React.FC = () => {
  const about = `I'm Matheus, Frontend developer
  and passionate by illustration !`;
  return (
    <Container>
      <h2>
        Hi stranger 👋, <br />
        {about}
      </h2>
      <img src={solaire} alt="solaire" />
    </Container>
  );
};
