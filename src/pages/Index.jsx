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
  {
    id: 3,
    name: "Building 3",
    description: "Description for Building 3",
    position: [63.430515, 10.395053],
    image: "https://via.placeholder.com/150",
    sensors: { temperature: 20, humidity: 55 },
  },
  {
    id: 4,
    name: "Building 4",
    description: "Description for Building 4",
    position: [58.969975, 5.733107],
    image: "https://via.placeholder.com/150",
    sensors: { temperature: 22, humidity: 60 },
  },
  {
    id: 5,
    name: "Building 5",
    description: "Description for Building 5",
    position: [59.131309, 11.387104],
    image: "https://via.placeholder.com/150",
    sensors: { temperature: 18, humidity: 50 },
  },
  {
    id: 6,
    name: "Building 6",
    description: "Description for Building 6",
    position: [69.649205, 18.955324],
    image: "https://via.placeholder.com/150",
    sensors: { temperature: 16, humidity: 45 },
  },
  {
    id: 7,
    name: "Building 7",
    description: "Description for Building 7",
    position: [68.43925, 17.42158],
    image: "https://via.placeholder.com/150",
    sensors: { temperature: 15, humidity: 40 },
  },
  {
    id: 8,
    name: "Building 8",
    description: "Description for Building 8",
    position: [70.66235, 23.68801],
    image: "https://via.placeholder.com/150",
    sensors: { temperature: 14, humidity: 35 },
  },
  {
    id: 9,
    name: "Building 9",
    description: "Description for Building 9",
    position: [59.913869, 10.752245],
    image: "https://via.placeholder.com/150",
    sensors: { temperature: 21, humidity: 50 },
  },
  {
    id: 10,
    name: "Building 10",
    description: "Description for Building 10",
    position: [60.472024, 8.468946],
    image: "https://via.placeholder.com/150",
    sensors: { temperature: 19, humidity: 55 },
  },
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