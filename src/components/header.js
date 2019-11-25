import React from 'react';

const Header = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.lab}</h2>
    </>
  );
};

export default Header;
