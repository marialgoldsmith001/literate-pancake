import { Box, Grid, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function PersonalProjects() {
    const [personalProjects, setPersonalProjects] = useState([]);
    useEffect(() =>{
        fetch("personalprojects.json").then(response => response.json()).then(data => setPersonalProjects(data))
    },[]);
    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            {personalProjects.map((project, index) => (
                <Box key={index} sx={{ mb: 3, maxWidth: 700 }}>
                    <Typography variant="h6">{project.name}</Typography>
                    <Typography variant="caption">{project.date}</Typography>
                    <Divider sx={{ width: 600, color: '#0066CC' }} />
                    <Typography variant="body2">{project.description}</Typography>
                </Box>
            ))}
        </Grid>
    );
}

export default PersonalProjects;