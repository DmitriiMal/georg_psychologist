// Layout.jsx
import { Outlet, useLocation } from 'react-router';
import Navbar from '@layout/Navbar.jsx';
import Footer from '@layout/Footer.jsx';
import ToTopButton from '@components/ToTopButton.jsx';
import useScrollReveal from '@hooks/useScrollReveal';
import '@scss/main.scss';
import '@scss/media.scss';

function Layout() {
  const location = useLocation();

  // Re-run on route changes so elements on the new page are revealed immediately
  useScrollReveal('.scroll-animation', [location.key]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToTopButton />
    </>
  );
}

export default Layout;
