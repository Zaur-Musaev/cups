import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { base_url } from "../../utils/constants";
import { CupType } from "../../utils/types";
import { Box } from "@mui/material";
import CupsPhoto from "../cupsData/CupsPhoto";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.7151,
  lng: 44.8271,
};

const MyMapComponent = () => {
  const [cupsData, setCupsData] = useState<CupType[] | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  useEffect(() => {
    fetch(`${base_url}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCupsData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box display="flex" width="100%" gap={2} sx={{ margin: "5px" }}>
      {/* Контейнер для карты */}
      <Box flex={1}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {cupsData &&
            Object.values(cupsData).map((item) => (
              <Marker
                onClick={() => setSelectedPhoto(item.imageUrl)}
                key={item.id}
                position={{
                  lat: item.gps.latitude,
                  lng: item.gps.longitude,
                }}
              />
            ))}
        </GoogleMap>
      </Box>
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <CupsPhoto photoUrl={selectedPhoto} />
      </Box>
    </Box>
  );
};

export default MyMapComponent;
