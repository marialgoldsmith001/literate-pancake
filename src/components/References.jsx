import { Grid, Stack, Accordion, AccordionSummary, AccordionDetails, Typography, Box, TextField, Divider } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React from "react";

function References() {
    return (
        <Grid container spacing={2}>
            <Stack>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1a-content"
                    >
                        <Typography>Want to leave a reference?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Name"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Company"
                        />
                        <TextField
                            required
                            id="filled-multiline-static"
                            label="Required"
                            multiline
                            rows={4}
                            defaultValue="Reference details"
                            variant="filled"
                        />
                    </AccordionDetails>
                </Accordion>
                <Box sx={{ mb: 3, maxWidth: 700 }}>
                    <Typography variant="h6">Name</Typography>
                    <Typography variant="caption">Company</Typography>
                    <Divider sx={{ width: 600, color: '#0066CC' }} />
                    <Typography variant="body2">Reference details</Typography>
                </Box>
            </Stack>
        </Grid>
    );
}

export default References;