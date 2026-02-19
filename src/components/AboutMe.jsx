import { Box, Divider, Typography, Paper } from "@mui/material";
import { useEffect } from "react";
import React, {useState} from "react";

function AboutMe() {
    const [headerTitle, setHeaderTitle] = useState([]);
    useEffect(() =>{
        fetch("aboutme.json").then(response => response.json()).then(data => setHeaderTitle(data))
    },[]);
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Typography variant="h4">{headerTitle.name}</Typography>
            <Divider sx={{ width: 400, color: '#0066CC' }}><Typography variant="h6">{headerTitle.title}</Typography></Divider>
            <Typography variant="body1" sx={{ p: 2 }}>{headerTitle.description}</Typography>
        </Box>
    );
}

export default AboutMe;