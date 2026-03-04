import { Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import PersonalProjects from './components/PersonalProjects';
import References from './components/References';
import Footer from './components/Foorter';



function App() {
  return (
    <Grid container spacing={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/personalprojects" element={<PersonalProjects />} />
        <Route path="/references" element={<References />} />
      </Routes>
      <Footer />
    </Grid>
  )
}

export default App;
