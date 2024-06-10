import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container } from "@chakra-ui/react";
import BuildingInfoCard from "../components/BuildingInfoCard";
import "leaflet/dist/leaflet.css";

const buildings = [
  {
    id: 1,
    name: "Building 1",
    description: "Description for Building 1",
    position: [59.911491, 10.757933],
    image: "https://via.placeholder.com/150",
    sensors: { temperature: 21, humidity: 45 },
  },
  {
    id: 2,
    name: "Building 2",
    description: "Description for Building 2",
    position: [60.391263, 5.322054],
    image: "https://via.placeholder.com/150",
    sensors: { temperature: 19, humidity: 50 },
  },
  // Add 8 more buildings with similar structure
];

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <Container maxW="100vw" height="100vh" p={0}>
      <MapContainer center={[59.911491, 10.757933]} zoom={5} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map((building) => (
          <Marker
            key={building.id}
            position={building.position}
            eventHandlers={{
              click: () => {
                setSelectedBuilding(building);
              },
            }}
          >
            <Popup>{building.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <BuildingInfoCard building={selectedBuilding} />
    </Container>
  );
};

export default Index;