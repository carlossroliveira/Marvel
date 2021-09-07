import styled from "styled-components";

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

const Header = () => {
  return (
    <GridHeader>
      <UlMain>
        <LiMain>Charracters</LiMain>
        <LiMain>Comics</LiMain>
      </UlMain>
    </GridHeader>
  );
};

export default Header;
