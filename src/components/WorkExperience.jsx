import { Box, Grid, Divider, Typography, List } from "@mui/material";
import React, { useEffect, useState } from "react";

function WorkExperience() {
    const [workExperience, setWorkExperience] = useState([]);
    useEffect(() =>{
        fetch("workexperience.json").then(response => response.json()).then(data => setWorkExperience(data))
    },[]);
    return (
        <Grid size={{ sm: 12, md: 6}} sx={{marginTop: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            {workExperience.map((experience, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h6">{experience.company}</Typography>
                    <Typography variant="subtitle1">{experience.position}</Typography>
                    <Typography variant="caption">{experience["service-period"]}</Typography>
                    <Divider sx={{ width: 600, color: '#0066CC' }} />
                    {experience.description.map((desc, index) => (
                    <List key={index} sx={{ listStyleType: 'disc', pl: 4, maxWidth: 700 }}>
                        <Typography variant="body2">- {desc}</Typography>
                    </List>
                     ))}
                </Box>
            ))}
        </Grid>
    );
}

export default WorkExperience;