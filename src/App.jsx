import React from 'react';
import './App.css';
import { Grid, Stack, Item, Container} from '@mui/material';
import Title from './components/title';

function App() {
  return (
    // <Container sx={{height: 350}}>
      <Title/>
      /* <Grid container spacing={2}>
        <Grid size={4}>
          <Stack spacing={2}>
            <Item>Column 1 - Row 1</Item>
            <Item>Column 1 - Row 2</Item>
            <Item>Column 1 - Row 3</Item>
          </Stack>
        </Grid>
        <Grid size="auto">
          <Title/>
        </Grid>
      </Grid> */
    // </Container>
  )
}

export default App
