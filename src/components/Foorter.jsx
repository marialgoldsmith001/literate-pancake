import React from 'react';
import { useNavigate } from "react-router-dom";
import MdPhone from '@mui/icons-material/Phone';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';

function Footer() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();
  return (
    <Box sx={{ width: 800, position: 'fixed', bottom: 0, left: 0, right: 0, margin: 'auto' }}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        >
        <BottomNavigationAction label="Contact me" icon={<MdPhone />} onClick={() => navigate("/contactme")}/>
        </BottomNavigation>
    </Box>
    );
}

export default Footer;