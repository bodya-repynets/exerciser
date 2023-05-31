import { Stack, Typography, Box } from '@mui/material'
import React from 'react'
import image from '../img/background.jpg'

const ExerciseCard = ({exercise}) => {
    const {bodyPart, gifUrl, target, name}=exercise
  return (
    <Stack sx={{ width: '300px', minHeight: '450px', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '20px', overflow: 'hidden', boxShadow: '10px -5px 5px 0px rgba(0,0,0,0.7)'}} alignItems={'center'} justifyContent={'space-between'}>
        <img src={gifUrl}/>
        <Typography sx={{margin: '20px 0', textTransform: 'uppercase',fontSize: '18px', padding: '20px', textAlign: 'center', color: 'white', letterSpacing: '5px', fontWeight: '600' }}>{name}</Typography>
        <Stack sx={{width: '100%', marginBottom: '30px'}} direction={'row'} justifyContent={'space-evenly'}>
        <Typography sx={{ textTransform: 'uppercase', backgroundColor: '#c5e1a5', padding: '10px', borderRadius: '10px', color: 'primary.main', fontSize: '16px', fontWeight: '600'}}>{target}</Typography>
        <Typography sx={{ textTransform: 'uppercase', backgroundColor: '#e6ee9c', padding: '10px', borderRadius: '10px' , color: 'primary.main', fontSize: '16px', fontWeight: '600'}}>{bodyPart}</Typography>
        </Stack>
    </Stack>
  )
}

export default ExerciseCard