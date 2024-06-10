import { Box, Text, Image, VStack } from "@chakra-ui/react";

const BuildingInfoCard = ({ building }) => {
  if (!building) return null;

  return (
    <Box
      position="absolute"
      bottom="20px"
      left="20px"
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      width="300px"
    >
      <VStack spacing={4}>
        <Image src={building.image} alt={building.name} borderRadius="md" />
        <Text fontSize="xl" fontWeight="bold">
          {building.name}
        </Text>
        <Text>{building.description}</Text>
        <Text>Temperature: {building.sensors.temperature}°C</Text>
        <Text>Humidity: {building.sensors.humidity}%</Text>
      </VStack>
    </Box>
  );
};

export default BuildingInfoCard;