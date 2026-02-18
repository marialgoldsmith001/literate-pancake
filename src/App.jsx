import React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, Container} from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Title from './components/title';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


function App() {
  return (
    <Container sx={{height: 350}}>
      <Grid container spacing={2}>
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
      </Grid>
    </Container>
  )
}

export default App
