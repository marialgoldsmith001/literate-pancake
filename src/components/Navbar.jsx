import React from 'react';
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Avatar, Divider } from '@mui/material';


function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Avatar alt="MG" src='public\avatar.jpg'/>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Tab label="About Me" />
        <Tab label="Skills" onClick={() => navigate("/skills")} />
        <Tab label="Work Experience" />
        <Tab label="Personal Projects" />
        <Tab label="Contact Me" />
      </Tabs>
    </Box>
  );
}

export default Navbar;
