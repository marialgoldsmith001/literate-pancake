import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import PersonalProjects from './components/PersonalProjects';
import References from './components/References';
import Footer from './components/Foorter';
import ContactMe from './components/ContactMe';


function App() {
  return (
    <Container sx={{height: 350}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/personalprojects" element={<PersonalProjects />} />
        <Route path="/references" element={<References />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App;
