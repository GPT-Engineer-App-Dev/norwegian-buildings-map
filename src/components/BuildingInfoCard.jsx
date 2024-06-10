import { Box, Text, Image, VStack, HStack, Divider, Badge } from "@chakra-ui/react";

const BuildingInfoCard = ({ building }) => {
  if (!building) return null;

  return (
    <Box
      position="absolute"
      bottom="20px"
      left="20px"
      bg="white"
      p={6}
      borderRadius="lg"
      boxShadow="2xl"
      width={{ base: "90%", md: "300px" }}
      maxW="400px"
      zIndex="1000"
    >
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
    </Box>
  );
};

export default BuildingInfoCard;