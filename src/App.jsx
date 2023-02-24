import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import './styles/globals.scss';

const Main = styled.main`
  max-width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <Main>
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </Main>
  );
}

export default App;
