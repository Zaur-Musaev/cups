import React from 'react';
import { LoadScript } from '@react-google-maps/api';

type GoogleMapsLoaderProps = {
    children: React.ReactNode;
  };

const GoogleMapsLoader = ({ children }: GoogleMapsLoaderProps) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCXfcIVG-mWi3OQCNSeiBA7T2wgprHB9eY">
      {children}
    </LoadScript>
  );
};

export default GoogleMapsLoader;
