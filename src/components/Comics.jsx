import React, { useEffect, useState } from "react";
import Head from "./Head";
import Main from "./Main";

const { REACT_APP_TIME, REACT_APP_PUBLIC, REACT_APP_PRIVATE } = process.env;

const Comics = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=${REACT_APP_TIME}&apikey=${REACT_APP_PUBLIC}&hash=${REACT_APP_PRIVATE}`
    )
      .then((response) => response.json())
      .then((result) => setDados(result));
  }, []);

  return (
    <>
      <Head title="Comics" />
      <Main dados={dados} />
    </>
  );
};

export default Comics;
