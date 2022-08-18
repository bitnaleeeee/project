import React, { useState } from 'react';
import PerfumeCategorie from '../PerfumeCategorie';
import { NAVBARDATA_TEXT } from '../NavBarData';
import NavTopCategorie from '../NavTopCategorie';
import './Nav.scss';

const Nav = () => {
  const [newNav, setNewNav] = useState(false);
  const apearPerfumeCategory = () => setNewNav(true);
  const [menuState, setMenuState] = useState();
  const menuStateFunction = e => setMenuState(e);

  return (
    <div className="nav">
      <div className="topNav">
        <nav className="mainNav">
          <ul className="navUl">
            {NAVBARDATA_TEXT.map(top => (
              <NavTopCategorie
                key={top.id}
                id={top.id}
                setMenuState={e => menuStateFunction(e)}
                setNewNav={() => apearPerfumeCategory()}
                name={top.mainMenu}
              />
            ))}
            <li className="navList">
              <a className="clickList" href="/">
                스토어
              </a>
            </li>
            <li className="navList">
              <a className="clickList" href="/">
                <img src="/image/search.webp" alt="" />
              </a>
            </li>
            <li className="navList">
              {newNav === true ? (
                <button onClick={() => setNewNav(false)}>닫기 X</button>
              ) : null}
            </li>
          </ul>
        </nav>
        <nav className="subNav">
          <ul>
            <button>로그인</button>
            <button>카트</button>
          </ul>
        </nav>
      </div>
      <div>
        {newNav === true ? (
          <PerfumeCategorie data={NAVBARDATA_TEXT[menuState].subMenu} />
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
