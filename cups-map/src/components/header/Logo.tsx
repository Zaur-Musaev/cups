import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { label1, label2 } from '../../utils/constants'

const Logo = () => {
  return (
    <ImageList sx={{ margin: "0px" }}>
            <ImageListItem
              sx={{ height: "50px", width: "50px", margin: "0px" }}
            >
              <div className="logo-container">
                <img src={label1} alt="label1" className="logo logo-1" />
                <img src={label2} alt="label2" className="logo logo-2" />
              </div>
            </ImageListItem>
          </ImageList>
  )
}

export default Logo