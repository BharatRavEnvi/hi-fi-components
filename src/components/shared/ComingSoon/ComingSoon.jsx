import { Box, Typography } from '@mui/material'
import React from 'react'

const ComingSoon = () => {
  return (
    <Box sx={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Typography sx={{textAlign:"center"}} fontSize={28}>Coming Soon...</Typography>
    </Box>
  )
}

export default ComingSoon
