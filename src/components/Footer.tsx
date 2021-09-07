import styled from "styled-components";

const GridFooter = styled.footer`
  grid-area: footer;
  background: rgb(199, 48, 0);
  background: linear-gradient(
    180deg,
    rgba(199, 48, 0, 1) 40%,
    rgba(10, 1, 0, 1) 93%
  );

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  padding: 2rem;
  text-align: center;
`;

const TitleFooter = styled.title`
  display: inline-block;
  color: white;

  font-family: "Patrick Hand", cursive;
  font-size: 1.4rem;

  &:hover {
    transition: 0.2s ease;
    opacity: 0.8;
  }
`;

const Footer = () => {
  return (
    <GridFooter>
      <TitleFooter>&copy; 2021 | Carlos Oliveira</TitleFooter>
    </GridFooter>
  );
};

export default Footer;
