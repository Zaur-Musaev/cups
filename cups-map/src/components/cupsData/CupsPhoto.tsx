import React from "react";
import { Card } from "react-bootstrap";

interface CupsPhotoProps {
  photoUrl: string;
}

const CupsPhoto = ({ photoUrl }: CupsPhotoProps) => {
  return <img className="cupsPhoto" src={photoUrl} alt={photoUrl} />;
};

export default CupsPhoto;
