import React from 'react'
import { Outlet } from "react-router-dom";
import { Stack } from '@mui/material';

const Main = () => {
  return (
    <Stack minHeight={'100vh'} width={'100vw'} sx={{background: 'linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)'}}>
    <Outlet/>
    </Stack>
  )
}

export default Main