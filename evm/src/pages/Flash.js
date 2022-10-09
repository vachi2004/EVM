import React from 'react'
import { Button } from '@mui/material';
import { useState } from 'react';
import { Honour } from './Honour';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material'
import MiniApp from './MiniApp';
function Flash() {
  const [dept, setDept] = useState(Honour)
  const changeView = (dep) => { setDept(dep); }
  return (
    <div className="App">
      <Stack direction='row' spacing={5}>
      <Button variant="contained" size='large' margin={5} color="secondary" href='/Events' >Marriage</Button>
      <Button variant="contained" size='large' margin={5} color="secondary" href='/Birth' >Birthday</Button>
      <Button variant="contained" size='large' margin={5} color="secondary" href='/Business' >Business</Button>
      <Button variant="contained" size='large' margin={5} color="secondary" href='/Festivals' >Festivals</Button>
      <Button variant="contained" size='large' margin={5} color="secondary" onClick={() => changeView(Honour)} >General Events</Button>
      <Button variant="contained" size='large' margin={5} color="secondary" href='/Parties' >Parties</Button>
      </Stack>
      
      <Grid 
              container 
              spacing={2} 
              direction="row" 
              justify="flex-start" 
              alignItems="flex-start" 
          > 
      {Honour.map((mb) => (<Grid sx={{ maxWidth: 300, minHeight: 300, margin: 4, border: '5px outset black', borderRadius: 5, backgroundColor: "white", }} item xs={12} sm={6} md={3} key={mb.id}>{mb.img}<br/>Name:{mb.name}<br/>Price:{mb.price}<br/> 
      Available: {mb.available 
   ?"Yes" : "No"}<br/><br/>{mb.button}</Grid>))} 
  </Grid>
    </div >
  );
}
export default Flash;