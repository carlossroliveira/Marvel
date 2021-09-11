import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    box-sizing: 93.75%;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}

body {
  font: 400 1rem "Inter", sans-serif;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: 12px
}

::-webkit-scrollbar-thumb {
  background-color: #c73000;
  border-radius: 50px;
  border: 1px solid #c73000
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #c73000)
}

::-webkit-scrollbar-button {
  background-color: #c73000
}
`;
