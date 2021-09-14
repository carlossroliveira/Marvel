import React, { useEffect } from 'react';

const Head = (title) => {
  useEffect(() => {
    document.title = `Marvel - ${title}`;
  }, [title]);

  return <></>;
};

export default Head;
