import React, { useEffect, useState } from "react";
import Main from "./Main";

const Comics = () => {
  const time = "1630936942629";
  const publica = "93f33769879385e84d132818b4c983af";
  const senha = "70c0551a8aeb04c0c0495fe7f39fff8d";

  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publica}&hash=${senha}`
    )
      .then((response) => response.json())
      .then((result) => setDados(result));
  }, []);

  return (
    <>
      <Main dados={dados} />
    </>
  );
};

export default Comics;
