import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function WorkExperience() {
    const [workExperience, setWorkExperience] = useState([]);
    useEffect(() =>{
        fetch("workexperience.json").then(response => response.json()).then(data => setWorkExperience(data))
    },[]);
    return (
        <Box sx={{display: 'flex', marginTop: 320, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            {workExperience.map((experience, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                    <Typography variant="h4">{experience.company}</Typography>
                    <Typography variant="h6">{experience.position}</Typography>
                    <Typography variant="body1">{experience["service-period"]}</Typography>
                    <Divider sx={{ width: 400, color: '#0066CC' }} />
                    {experience.description.map((desc, index) => (
                        <Typography key={index} variant="body1" sx={{ p: 2 }}>{desc}</Typography>
                    ))}
                </Box>
            ))}
        </Box>
    );
}

export default WorkExperience;