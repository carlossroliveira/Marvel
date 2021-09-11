import styled from "styled-components";
import { NavLink } from "react-router-dom";
const GridHeader = styled.header`
  grid-area: header;
  background: rgb(199, 48, 0);
  background: linear-gradient(
    353deg,
    rgba(199, 48, 0, 1) 40%,
    rgba(10, 1, 0, 1) 93%
  );

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  padding: 2rem;
`;

const UlMain = styled.ul`
  display: flex;
  justify-content: space-evenly;

  list-style: none;
  padding: 0;
`;

const LiMain = styled.li`
  font-family: "Patrick Hand", cursive;
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
    color: white;
    background: linear-gradient(90deg, #212121 0%, #212121 100%);

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
    content: "";
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

const Header = () => {
  return (
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
};

export default Header;
