import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"start",alignItems:"self-start", height:"100vh",overflowY:"scroll"}}>
      {children ||<Outlet/>}
    </Box>
  )
}

export default Layout
