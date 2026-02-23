import { Box, Grid, Divider, Typography, List } from "@mui/material";
import React, { useEffect, useState } from "react";

function PersonalProjects() {
    const [personalProjects, setPersonalProjects] = useState([]);
    useEffect(() =>{
        fetch("personalprojects.json").then(response => response.json()).then(data => setPersonalProjects(data))
    },[]);
    return (
        <Grid size={{ sm: 12, md: 6}} sx={{marginTop: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            {personalProjects.map((project, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h6">{project.name}</Typography>
                    <Typography variant="subtitle1">{project.description}</Typography>
                    <Typography variant="caption">{project["service-period"]}</Typography>
                    <Divider sx={{ width: 600, color: '#0066CC' }} />
                    {project.description.map((desc, index) => (
                    <List key={index} sx={{ listStyleType: 'disc', pl: 4, maxWidth: 700 }}>
                        <Typography variant="body2">- {desc}</Typography>
                    </List>
                     ))}
                </Box>
            ))}
        </Grid>
    );
}

export default PersonalProjects;