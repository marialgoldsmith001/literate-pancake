import { Routes, Route } from 'react-router-dom';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import { Container } from '@mui/material';


function App() {
  return (
    <Container sx={{height: 350}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Container>
  )
}

export default App;
