// Navbar.jsx
import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { scrollToTop } from '@utilities/scrollToTop';

import { Link } from 'react-router-dom';
// import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import StonesLogo from './StonesLogo';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // if (size.width > 768 && menuOpen) {
    if (size.width > 1088 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);

  return (
    // <div className={!menuOpen ? 'header-nav blur' : 'header-nav transparent'}>
    <div className={`header-nav ${menuOpen ? 'transparent' : ''} ${!isScrolling ? 'transparent' : ''} ${!menuOpen && isScrolling ? 'blur' : ''}`}>
      <div className='header-nav__content'>
        <Link
          to='/'
          className='header-nav__content__logo'
          onClick={() => {
            menuOpen ? setMenuOpen(false) : null;
            scrollToTop();
          }}>
          <StonesLogo />
        </Link>
        <nav
          className={`${'header-nav__content__nav'} 
          ${menuOpen && size.width < 1088 ? `${'isMenu'}` : ''} 
          }`}>
          <ul>
            <li>
              <Link
                to='/'
                onClick={() => {
                  menuOpen ? setMenuOpen(false) : null;
                  scrollToTop();
                }}>
                Home
              </Link>
            </li>

            <NavLinkItem to='/#ueber-mich' closeMenu={() => setMenuOpen(false)}>
              Über mich
            </NavLinkItem>

            <NavLinkItem to='/#angebot' closeMenu={() => setMenuOpen(false)}>
              Mein Angebot
            </NavLinkItem>

            <NavLinkItem to='/#themen' closeMenu={() => setMenuOpen(false)}>
              Themengebiete
            </NavLinkItem>

            <NavLinkItem to='/#rahmen' closeMenu={() => setMenuOpen(false)}>
              Rahmenbedingungen
            </NavLinkItem>

            <HashLink to='/#contact'>
              <button
                onClick={() => {
                  menuOpen ? setMenuOpen(false) : null;
                }}
                className='btn'>
                Kontakt
              </button>
            </HashLink>
          </ul>
        </nav>
        {/* <div className='header-nav__content__toggle'>{!menuOpen ? <h1 onClick={menuToggleHandler}>A</h1> : <h1 onClick={menuToggleHandler}>B</h1>}</div> */}
        <div className='header-nav__content__toggle'>{!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}</div>
      </div>
    </div>
  );
}

export default Navbar;

const NavLinkItem = ({ to, children, closeMenu }) => {
  return (
    <li>
      <HashLink
        smooth
        to={to}
        onClick={() => {
          if (closeMenu) closeMenu();
        }}>
        {children}
      </HashLink>
    </li>
  );
};
