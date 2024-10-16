import React from 'react';
import { Card } from 'react-bootstrap';

interface CupsPhotoProps {
  photoUrl: string;
}

const CupsPhoto = ({ photoUrl }: CupsPhotoProps) => {
  return (
    
      <img src={photoUrl} alt={photoUrl} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
    
  );
};

export default CupsPhoto;

