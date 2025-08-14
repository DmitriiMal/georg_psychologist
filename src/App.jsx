// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollHandler from '@components/ScrollHandler.jsx';
import Layout from '@layout/Layout';
import Home from '@pages/Home';
import About from '@pages/About';
import Impressum from '@pages/Impressum';

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='impressum' element={<Impressum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
