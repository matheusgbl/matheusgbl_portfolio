import React from 'react';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';

export const HomePage: React.FC = () => (
  <Container>
    <Header />
    <Hero />
  </Container>
);
