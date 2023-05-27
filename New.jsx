import { TextField,Button } from '@mui/material'
import React from 'react'

const New = () => {
  return (
    <div>
        <h1>BLOG FORM</h1>
        <TextField variant='filled' label="Blog Name"></TextField>
        <br></br>
        <TextField variant='filled' label="Description"></TextField>
        <br></br>
        <TextField variant='filled' label="Author Name"></TextField>
        <br></br>
        <br></br>
        <Button variant='contained'>ADD</Button>
    </div>
  )
}

export default New