import React from "react";
import { Card } from "react-bootstrap";

interface CupsPhotoProps {
  photoUrl: string;
}

const CupsPhoto = ({ photoUrl }: CupsPhotoProps) => {
  return (
    <img
      src={photoUrl}
      alt={photoUrl}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
        boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        borderRadius: '6px',
        border: "none",

      }}
    />
  );
};

export default CupsPhoto;
