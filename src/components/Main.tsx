import styled from "styled-components";
import img from "../components/homem.png";

const GridMain = styled.main`
  grid-area: main;
  background: rgb(199, 48, 0);
  background: linear-gradient(
    73deg,
    rgba(199, 48, 0, 1) 40%,
    rgba(10, 1, 0, 1) 93%
  );
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

  font-family: "Patrick Hand", cursive;

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

  background-color: #fff;
  margin: 4rem 10px 5rem;

  padding: 20px 15px;
  display: flex;
  flex-direction: column;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  transition: 0.3s ease-in-out;

  &:hover {
    height: 420px;
  }

  &:hover .content {
    visibility: visible;
    opacity: 1;
    margin-top: -10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    transition-delay: 0.3s;
  }
`;

const ImageBoxMain = styled.div`
  position: relative;
  width: 260px;
  height: 260px;
  top: -60px;
  left: 20px;
  z-index: 1;
`;

const ContentMain = styled.div`
  position: relative;
  margin-top: -140px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
`;

const time = "1630936942629";
const publica = "93f33769879385e84d132818b4c983af";
const senha = "70c0551a8aeb04c0c0495fe7f39fff8d";

React.useEffect(() => {
  const diceResponse = fetch(
    `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publica}&hash=${senha}`
  ).then((response) => response.json());

  console.log(diceResponse);
}, []);

const Main = () => {
  return (
    <GridMain>
      <ContainerMain>
        <CardMain>
          <ImageBoxMain>
            <img style={{ width: "15rem" }} src={img} alt="homem aranha" />
          </ImageBoxMain>
          <ContentMain className="content">
            <h2>Card One</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            </p>
          </ContentMain>
        </CardMain>
      </ContainerMain>
    </GridMain>
  );
};

export default Main;
