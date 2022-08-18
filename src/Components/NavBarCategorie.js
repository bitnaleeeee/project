import React from 'react';
import './NavBarCategorie.scss';

const NavBarCategorie = ({ name }) => {
  return (
    <li>
      <a href="/">{name}</a>
    </li>
  );
};
export default NavBarCategorie;
