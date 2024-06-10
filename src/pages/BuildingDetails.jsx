import { Box, Text, Image, VStack, HStack, Divider, Badge, Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { buildings } from "./Index.jsx";

const BuildingDetails = () => {
  const { id } = useParams();
  const building = buildings.find((b) => b.id === parseInt(id));

  if (!building) return <Text>Building not found</Text>;

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} align="start">
        <Image 
          src={building.image || 'https://via.placeholder.com/300'} 
          alt={building.name} 
          borderRadius="lg" 
          fallbackSrc="https://via.placeholder.com/300"
        />
        <Text fontSize="2xl" fontWeight="bold">
          {building.name}
        </Text>
        <Text color="gray.500">{building.description}</Text>
        <Divider />
        <HStack spacing={4} wrap="wrap">
          <Badge colorScheme="blue">Temperature: {building.sensors.temperature}°C</Badge>
          <Badge colorScheme="green">Humidity: {building.sensors.humidity}%</Badge>
          <Badge colorScheme="purple">AQI: {building.sensors.aqi}</Badge>
          <Badge colorScheme="red">CO2: {building.sensors.co2} ppm</Badge>
          <Badge colorScheme="orange">Noise: {building.sensors.noise} dB</Badge>
          <Badge colorScheme="teal">Energy: {building.sensors.energy} kWh</Badge>
        </HStack>
      </VStack>
    </Container>
  );
};

export default BuildingDetails;