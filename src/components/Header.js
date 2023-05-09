import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
    
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           BLOG
          </Typography>
          <Button color="inherit" variant='contained'><Link to={'/'}>Home</Link></Button>
          <Button color="inherit" variant='contained'><Link to={'/add'}>Add Blog</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header
