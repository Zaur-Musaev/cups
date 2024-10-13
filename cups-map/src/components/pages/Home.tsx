import React from 'react'
import MyMapComponent from '../maps/Map'
import { Box } from '@mui/material'
import { backgroundImage } from '../../utils/constants'

const Home = () => {
  return (
    <Box sx={{backgroundImage: `url(${backgroundImage})`,height: '400px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <MyMapComponent/>
    </Box>
  )
}

export default Home