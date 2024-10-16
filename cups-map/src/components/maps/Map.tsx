import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { base_url } from "../../utils/constants";
import { CupType } from "../../utils/types";
import { Row, Col, Card } from "react-bootstrap";
import CupsPhoto from "../cupsData/CupsPhoto";
import Logo from "../header/Logo";
import styles from '../../styles/Map.module.css'
import { useAppSelector } from "../../app/hooks";

const containerStyle = {
  width: "100%",
  height: "100%",
  marginTop:'3px',
  borderRadius: '5px',
  boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
};

const center = {
  lat: 41.7151,
  lng: 44.8271,
};

const MyMapComponent = () => {
  const language = useAppSelector(state => state.language)
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
    <Row className="mapRow" style={{marginTop:'20px' }}>
      <Col className={styles.mapContainer} xs={12} lg={8} md={8} >
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
      </Col>
      <Col xs={12} lg ={4} md={4} style={{marginTop:'3px',}}>
        {selectedPhoto ? (
          <CupsPhoto photoUrl={selectedPhoto} />
        ) : (
          <Card
            className="text-center"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "wite",
              boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              border: 'none'
              
            }}
          >
            <Card.Body>
              <Logo />
              <Card.Title style={{marginTop: '100px'}}>{language.selectPin}</Card.Title>
              <Card.Text>{language.clickToView}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default MyMapComponent;
