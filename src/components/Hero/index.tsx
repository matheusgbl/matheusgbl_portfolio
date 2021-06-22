/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Container, TextContent } from './styles';

import solaire from '../../assets/solaire.gif';

export const Hero: React.FC = () => {
  const about = `I 'm Matheus, Frontend developer
  and passionate by illustration !`;
  return (
    <Container>
      <TextContent>
        <h2>
          Hi stranger 👋, <br />
          {about}
        </h2>
        <h3 id="continue">To continue</h3>
        <h3 id="please">Please, </h3>
        <h3 id="praise">PRAISE THE SUN</h3>
      </TextContent>
      <img src={solaire} alt="solaire" />
    </Container>
  );
};
