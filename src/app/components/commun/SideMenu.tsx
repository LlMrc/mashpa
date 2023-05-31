
'use client'
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

type Props = {
    
    title: string
}

const style = {
  "&:hover":{background: "#ECC9EE"}
}
const SideMenu = ( { title}: Props) => {
  return (
        <Paper sx={style}>
            <Box display="flex" gap={2} p={2} mt={2}>
        
              <Typography variant='h6' textTransform="uppercase"> {title}</Typography>
             
            </Box>
        </Paper>
  )
}

export default SideMenu