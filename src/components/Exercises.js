import React from 'react'
import { useGlobalContext } from '../context'
import { Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import { Link } from 'react-router-dom';

const Exercises = () => {
  const {activeExercises} = useGlobalContext();
  return (
    <Stack direction={'row'} flexWrap={'wrap'} gap={'50px'} justifyContent={'center'} sx={{margin: '50px 0'}}>
      {activeExercises.map(exercise=>{
        return <Link key={exercise.id} to={`/exercises/${exercise.id}`}><ExerciseCard key={exercise.id} exercise={exercise} /></Link>
      })}
    </Stack>
  )
}

export default Exercises