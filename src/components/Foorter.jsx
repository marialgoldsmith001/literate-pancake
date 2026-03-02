import React, { useEffect, useState } from 'react';
import MdPhone from '@mui/icons-material/Phone';
import { Box, BottomNavigation, BottomNavigationAction, Drawer, Typography, Stack } from '@mui/material';

function Footer() {
  const [infoState, setInfoState] = useState([]);
  const [drawerState, setDrawerState] = useState(false);
  
  const toggleDrawer = (open) => {
    setDrawerState(open);
  }

  useEffect(() =>{
      fetch("aboutme.json").then(response => response.json()).then(data => setInfoState(data))
  },[]);
  
  const contactMe = () => (
    <Box sx={{ width: 800, position: 'fixed', bottom: 60, left: 0, right: 0, margin: 'auto', bgcolor: 'background.paper' }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Stack sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <Typography variant="h6" >This is my contact details:</Typography>
        <Typography variant="body1" >{infoState.name}</Typography>
        <Typography variant="body1">{infoState.phonenumber}</Typography>
        <Typography variant="body1">{infoState.email}</Typography>
        <Typography variant="body1">{infoState.github}</Typography>
      </Stack>
    </Box>
  );

  return (
    <Box sx={{ width: 800, position: 'fixed', bottom: 0, left: 0, right: 0, margin: 'auto' }}>
        <BottomNavigation
        showLabels
        >
        <BottomNavigationAction label="Contact me" icon={<MdPhone />} onClick={() => toggleDrawer(true)}/>
        <Drawer open={drawerState} onClose={() => toggleDrawer(false)}>
            {contactMe()}
        </Drawer>
        </BottomNavigation>
    </Box>
    );
}

export default Footer;