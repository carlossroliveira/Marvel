import styled from 'styled-components';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'header header header'
    'main main main'
    'footer footer footer';

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-areas:
      'header'
      'main'
      'footer';
  }
`;

export default GridLayout;
