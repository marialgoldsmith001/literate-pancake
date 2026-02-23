import React from 'react';
import {useNavigate} from "react-router-dom";
import { Avatar, Divider, Box, Tabs, Tab } from '@mui/material';


function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper'}}>
      <Tabs value={value} onChange={handleChange} centered>
        <Avatar alt="MG" src='public\avatar.jpg'/>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Tab label="About Me" onClick={() => navigate("/")} />
        <Tab label="Skills" onClick={() => navigate("/skills")} />
        <Tab label="Work Experience" onClick={() => navigate("/workexperience")}/>
        <Tab label="Personal Projects" />
        <Tab label="Contact Me" />
      </Tabs>
    </Box>
  );
}

export default Navbar;
