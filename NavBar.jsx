import { AppBar, Toolbar, Typography,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant='h5' sx={{ flexGrow: 1}} align='left'>BLOG APP</Typography>
                <Button variant='text'><Link to='/dashboard'>DashBoard</Link></Button>
                <Button variant='text'><Link to='/new'>New</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar