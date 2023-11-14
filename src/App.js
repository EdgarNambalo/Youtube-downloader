import {BrowserRouter as Router,Routes, Route,} from 'react-router-dom'

import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import Home from './components/pages/Home';
import Doacao from './components/pages/Doacao';
import Sobre from './components/pages/Sobre';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height"> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doacao' element={<Doacao/>}/>
          <Route path='/sobre' element={<Sobre/>} />
        </Routes>
      </Container>  
      <Footer />
    </Router>
  );
}

export default App;
