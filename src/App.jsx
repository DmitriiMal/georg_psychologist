import Navbar from './layout/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './layout/Footer.jsx';
import ToTopButton from './components/ToTopButton.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
      <ToTopButton />
    </BrowserRouter>
  );
}

export default App;
