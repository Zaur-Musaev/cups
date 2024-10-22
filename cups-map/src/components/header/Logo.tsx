import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { label1, label2 } from '../../utils/constants'

const Logo = () => {
  return (
    <ImageList sx={{ marginTop: "15px" }}>
            <ImageListItem
              sx={{ height: "40px", width: "40px", margin: "0px" }}
            >
              <div className="logo-container">
                <img style={{height: "40px", width: "40px"}} src={label1} alt="label1" className="logo logo-1" />
                <img style={{height: "40px", width: "40px"}} src={label2} alt="label2" className="logo logo-2" />
              </div>
            </ImageListItem>
          </ImageList>
  )
}

export default Logo