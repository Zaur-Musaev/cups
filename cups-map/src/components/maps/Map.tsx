import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { base_url, pointPin, translations } from "../../utils/constants";
import { CupType } from "../../utils/types";
import { Row, Modal, Button } from "react-bootstrap";
import styles from "../../styles/Map.module.css";
import { useAppSelector } from "../../app/hooks";
import { mapStyle } from "../../utils/mapStyle";

const containerStyle = {
  width: "100%",
  height: "100%",
  marginTop: "3px",
  borderRadius: "5px",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
};

const center = {
  lat: 41.7151,
  lng: 44.8271,
};

const MyMapComponent = () => {
  const [cupsData, setCupsData] = useState<CupType[] | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [hoveredPhoto, setHoveredPhoto] = useState(""); // состояние для превью
  const [showModal, setShowModal] = useState(false); // состояние для модального окна
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 }); // позиция мыши для превью

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

  const handleMarkerClick = (imageUrl: string) => {
    setSelectedPhoto(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <Row className="mapRow" onMouseMove={handleMouseMove}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={{ styles: mapStyle }}
      >
        {cupsData &&
          Object.values(cupsData).map((item) => (
            <Marker
              icon={{
                url: pointPin,
                scaledSize: new google.maps.Size(35, 35),
              }}
              animation={google.maps.Animation.DROP}
              onClick={() => handleMarkerClick(item.imageUrl)}
              onMouseOver={() => setHoveredPhoto(item.imageUrl)}
              onMouseOut={() => setHoveredPhoto("")} // убираем превью при отводе курсора
              key={item.id}
              position={{
                lat: item.gps.latitude,
                lng: item.gps.longitude,
              }}
            />
          ))}
      </GoogleMap>

      {/* Отображение превью фотографии при наведении */}
      {hoveredPhoto && (
        <div
          className={styles.preview}
          style={{
            position: "absolute",
      top: mousePosition.y + 15 + "px",
      left: mousePosition.x + 15 + "px",
      pointerEvents: "none",




          }}
        >
          <img src={hoveredPhoto} alt="Preview" style={{ width: "100px", height: "auto", borderRadius: '10px'}} />
        </div>
      )}

      {/* Модальное окно для показа полной фотографии */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{"View Photo"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedPhoto} alt="Full View" style={{ width: "100%", height: "auto" }} />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default MyMapComponent;
