import React from 'react';
import { Container} from '@mui/material';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <Container sx={{height: 350}}>
      <Navbar />
      <AboutMe />
    </Container>
  )
}

export default App
