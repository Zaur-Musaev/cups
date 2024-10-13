import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'

interface CupsPhotoProps {
    photoUrl: string;
  }


const CupsPhoto = ({photoUrl}: CupsPhotoProps) => {
  return (
    <ImageList sx={{margin: '0px'}}>
        <ImageListItem sx={{minHeight: '400px', minWidth: '300px', margin:'0px'}}>
            <img src={photoUrl} alt={photoUrl}/>
        </ImageListItem>
    </ImageList>
  )
}

export default CupsPhoto