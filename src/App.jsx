import React from 'react';
import { Container} from '@mui/material';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';


function App() {
  return (
    <Container sx={{height: 350}}>
      <Navbar />
      <AboutMe />
      <Skills />
    </Container>
  )
}

export default App
