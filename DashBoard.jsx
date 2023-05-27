import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState,useEffect } from 'react'

const DashBoard = () => {
  var[infos,setInfos] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      setInfos(res.data)
    })
    .catch((err)=>console.log(err))
  })
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{color:'white',backgroundColor:'black',fontFamily:'Cursive',fontSize:"30px"}}>ID</TableCell>
              <TableCell style={{color:'white',backgroundColor:'black',fontFamily:'Cursive',fontSize:"30px"}}>TITLE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {infos.map((val,index) => {
              return(
                <TableRow key={index}>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.title}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DashBoard