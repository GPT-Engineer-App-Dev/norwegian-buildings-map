import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container } from "@chakra-ui/react";
import BuildingInfoCard from "../components/BuildingInfoCard";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import buildingPin from '../../public/images/building-pin.png';

const buildings = [
  {
    id: 1,
    name: "Building 1",
    description: "Description for Building 1",
    position: [59.911491, 10.757933],
    image: "https://example.com/images/building1.jpg",
    sensors: { temperature: 21, humidity: 45, aqi: 50, co2: 400, noise: 30, energy: 100 },
  },
  {
    id: 2,
    name: "Building 2",
    description: "Description for Building 2",
    position: [60.391263, 5.322054],
    image: "https://example.com/images/building2.jpg",
    sensors: { temperature: 19, humidity: 50, aqi: 55, co2: 420, noise: 35, energy: 110 },
  },
  {
    id: 3,
    name: "Building 3",
    description: "Description for Building 3",
    position: [63.430515, 10.395053],
    image: "https://example.com/images/building3.jpg",
    sensors: { temperature: 20, humidity: 55, aqi: 60, co2: 430, noise: 40, energy: 120 },
  },
  {
    id: 4,
    name: "Building 4",
    description: "Description for Building 4",
    position: [58.969975, 5.733107],
    image: "https://example.com/images/building4.jpg",
    sensors: { temperature: 22, humidity: 60, aqi: 65, co2: 440, noise: 45, energy: 130 },
  },
  {
    id: 5,
    name: "Building 5",
    description: "Description for Building 5",
    position: [59.131309, 11.387104],
    image: "https://example.com/images/building5.jpg",
    sensors: { temperature: 18, humidity: 50, aqi: 70, co2: 450, noise: 50, energy: 140 },
  },
  {
    id: 6,
    name: "Building 6",
    description: "Description for Building 6",
    position: [69.649205, 18.955324],
    image: "https://example.com/images/building6.jpg",
    sensors: { temperature: 16, humidity: 45, aqi: 75, co2: 460, noise: 55, energy: 150 },
  },
  {
    id: 7,
    name: "Building 7",
    description: "Description for Building 7",
    position: [68.43925, 17.42158],
    image: "https://example.com/images/building7.jpg",
    sensors: { temperature: 15, humidity: 40, aqi: 80, co2: 470, noise: 60, energy: 160 },
  },
  {
    id: 8,
    name: "Building 8",
    description: "Description for Building 8",
    position: [70.66235, 23.68801],
    image: "https://example.com/images/building8.jpg",
    sensors: { temperature: 14, humidity: 35, aqi: 85, co2: 480, noise: 65, energy: 170 },
  },
  {
    id: 9,
    name: "Building 9",
    description: "Description for Building 9",
    position: [59.913869, 10.752245],
    image: "https://example.com/images/building9.jpg",
    sensors: { temperature: 21, humidity: 50, aqi: 90, co2: 490, noise: 70, energy: 180 },
  },
  {
    id: 10,
    name: "Building 10",
    description: "Description for Building 10",
    position: [60.472024, 8.468946],
    image: "https://example.com/images/building10.jpg",
    sensors: { temperature: 19, humidity: 55, aqi: 95, co2: 500, noise: 75, energy: 190 },
  },
];

const buildingIcon = new L.Icon({
  iconUrl: buildingPin,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const navigate = useNavigate();

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
            icon={buildingIcon}
            eventHandlers={{
              click: () => {
                navigate(`/building/${building.id}`);
              },
            }}
          >
            <Popup>{building.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <BuildingInfoCard building={selectedBuilding} onClick={() => navigate(`/building/${selectedBuilding?.id}`)} />
    </Container>
  );
};

export default Index;