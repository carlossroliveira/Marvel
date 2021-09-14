import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridMain = styled.main`
  grid-area: main;
  background: ${({ theme }) => theme.body};

  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  font-family: 'Patrick Hand', cursive;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerMain = styled.section`
  position: relative;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
`;

const CardMain = styled.div`
  position: relative;
  max-width: 300px;
  height: 215px;

  background: ${({ theme }) => theme.backCard};
  margin: 4rem 10px 5rem;

  padding: 20px 15px;
  display: flex;
  flex-direction: column;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  transition: 0.3s ease-in-out;

  &:hover {
    height: 420px;
  }

  &:hover .content {
    font-size: 14px;
    visibility: visible;
    opacity: 1;
    margin-top: -30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    transition-delay: 0.3s;
  }
`;

const ImageBoxMain = styled.div`
  position: relative;
  width: 260px;
  height: 260px;
  top: -60px;
  left: 11px;
  z-index: 1;
`;

const ImageMain = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
`;

const ContentMain = styled.div`
  position: relative;
  margin-top: -140px;
  text-align: center;
  color: ${({ theme }) => theme.fontCard};
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
`;

const Main = ({ dados }) => (
  <GridMain>
    <ContainerMain>
      {dados &&
        dados.data.results.map((itens) => (
          <CardMain key={itens.id}>
            <ImageBoxMain>
              <ImageMain
                src={`${itens.thumbnail.path}.${itens.thumbnail.extension}`}
                alt="Imagens"
              />
            </ImageBoxMain>

            <ContentMain className="content">
              <h2>{itens.name}</h2>
              <p>{itens.description}</p>
            </ContentMain>
          </CardMain>
        ))}
    </ContainerMain>
  </GridMain>
);

Main.propTypes = {
  dados: PropTypes.string.isRequired,
};

export default Main;
