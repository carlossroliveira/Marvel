import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Head = ({ title }) => {
  useEffect(() => {
    document.title = `Marvel - ${title}`;
  }, [title]);

  return <></>;
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Head;
