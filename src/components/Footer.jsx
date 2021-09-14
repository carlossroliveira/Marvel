import React from 'react';
import styled from 'styled-components';

const GridFooter = styled.footer`
  grid-area: footer;
  background: ${({ theme }) => theme.body};

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: #32325d3f 0px 30px 60px -12px inset, #0000004c 0px 18px 36px -18px inset;

  padding: 2rem;
  text-align: center;
`;

const TitleFooter = styled.title`
  display: inline-block;
  color: ${({ theme }) => theme.fontCard};

  font-family: 'Patrick Hand', cursive;
  font-size: 1.4rem;

  &:hover {
    transition: 0.2s ease;
    opacity: 0.8;
  }
`;

const Footer = () => (
  <GridFooter>
    <TitleFooter>&copy; {new Date().getFullYear()} | Carlos Oliveira</TitleFooter>
  </GridFooter>
);

export default Footer;
