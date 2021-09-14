import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const GridHeader = styled.header`
  grid-area: header;
  background: ${({ theme }) => theme.body};

  box-shadow: #00000066 0px 2px 4px, #0000004c 0px 7px 13px -3px, #00000033 0px -3px 0px inset;

  padding: 2rem;
`;

const UlMain = styled.ul`
  display: flex;
  justify-content: space-evenly;

  list-style: none;
  padding: 0;
`;

const LiMain = styled.li`
  font-family: 'Patrick Hand', cursive;
  color: white;
  font-size: 1.4rem;
`;

const LinkCustom = styled.a`
  .effect {
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 1.3px;
    cursor: pointer;
    position: relative;
    padding: 10px;

    color: ${({ theme }) => theme.fontDefault};
    background: ${({ theme }) => theme.backDefault};

    border: 1px solid #c73000;
    border-radius: 50px;
    font-weight: 900;
    outline: none;
    transition: all 0.3s ease-in-out 0s;
  }

  .effect:hover,
  .effect:focus {
    color: #474747;
    transform: translateY(-6px);
  }

  .active.effect::after {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid #c73000;
    background-color: white;
    box-shadow: 12px 12px 24px #ff6e40;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
  }

  @keyframes ring {
    0% {
      width: 30px;
      height: 30px;
      opacity: 1;
    }

    100% {
      width: 150px;
      height: 150px;
      opacity: 0;
    }
  }
`;

const Header = () => (
  <>
    <GridHeader>
      <UlMain>
        <LiMain>
          <LinkCustom>
            <NavLink className="effect" to="/" exact>
              Charracters
            </NavLink>
          </LinkCustom>
        </LiMain>
        <LiMain>
          <LinkCustom>
            <NavLink className="effect" to="/Comics">
              Comics
            </NavLink>
          </LinkCustom>
        </LiMain>
      </UlMain>
    </GridHeader>
  </>
);

export default Header;
