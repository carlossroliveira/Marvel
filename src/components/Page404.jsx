import React from 'react';
import styled from 'styled-components';

const Font = styled.div`
  grid-area: main;
  text-align: center;
  font-size: 50px;
  margin: 84px auto;
  background: linear-gradient(
    -45deg,
    #212121 25%,
    #ae3125 25%,
    #ae3125 50%,
    #212121 50%,
    #212121 75%,
    #ae3125 75%,
    #ae3125
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Page404 = () => (
  <>
    <Font>
      <h1>Page 404</h1>
    </Font>
  </>
);

export default Page404;
