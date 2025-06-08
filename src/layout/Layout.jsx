import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '@layout/Navbar.jsx';
import Footer from '@layout/Footer.jsx';
import ToTopButton from '@components/ToTopButton.jsx';
import '@scss/main.scss';
import '@scss/media.scss';
import Header from '@layout/Header.jsx';

function checkBoxes() {
  const boxes = document.querySelectorAll('.scroll-animation');
  const triggerBottom = (window.innerHeight / 5) * 4.5;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

function Layout() {
  // Hook to ensure the animation works both on load and on scroll
  useEffect(() => {
    window.addEventListener('scroll', checkBoxes);
    checkBoxes();
    return () => {
      window.removeEventListener('scroll', checkBoxes);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
      <ToTopButton />
    </>
  );
}

export default Layout;
