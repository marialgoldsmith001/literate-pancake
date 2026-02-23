import React, {useState, useEffect} from "react";
import { 
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Rating
} from '@mui/material';

function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() =>{
      fetch("skills.json").then(response => response.json()).then(data => setSkills(data))
  },[]);
  
  return (
    <TableContainer sx={{ maxWidth: 600, marginTop: 5, marginLeft: 'auto', marginRight: 'auto' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#0066CC', p: 0.5, borderRadius: 1 }}>
            <TableCell><Typography variant="h6" sx={{ color: 'white' }}>Technology</Typography></TableCell>
            <TableCell align="right"><Typography variant="h6" sx={{ color: 'white' }}>Last time used</Typography></TableCell>
            <TableCell align="right"><Typography variant="h6" sx={{ color: 'white' }}>Self-rating</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {skills.map((skill) => (
            <TableRow
              key={skill.technology}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {skill.technology}
              </TableCell>
              <TableCell align="right">{skill["Last time used"]}</TableCell>
              <TableCell align="right"><Rating name="read-only" value={parseInt(skill.proficiency)} readOnly /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Skills;
