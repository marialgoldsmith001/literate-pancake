import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import React, {useState} from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() =>{
      fetch("skills.json").then(response => response.json()).then(data => setSkills(data))
  },[]);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Technology</TableCell>
            <TableCell align="right">Last time used</TableCell>
            <TableCell align="right">Self-rating</TableCell>
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
              <TableCell align="right"><Rating name="read-only" value={skill.proficiency} readOnly /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
