import { Stack, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Stack sx={{height: '80px', backgroundColor: 'primary.main',}} alignItems={'center'} justifyContent={'center'}>  
        <Typography>Exerciser</Typography>
    </Stack>
  )
}

export default Header