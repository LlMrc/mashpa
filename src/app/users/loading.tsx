'use client'

import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

export default function loading() {
  return (
    <Box flex={1} sx={{display:'flex'}} pt={'50vh'} justifyContent={'center'} alignItems={'center'}>
         <CircularProgress/>
         <Typography m={2}>Loading...</Typography>
    </Box>
  )
}
