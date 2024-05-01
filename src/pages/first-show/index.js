import { Box, Container, Fade, Grid, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

const cardsData = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    title: "Card Title 1",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    title: "Card Title 2",
    details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    title: "Card Title 3",
    details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300",
    title: "Card Title 4",
    details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];

const Card = ({ id, image, title, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Box
      key={id}
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      bgGradient="linear(to-r, teal.300, blue.400)"
    >
      <Image src={image} alt={title} />

      <Fade in={showDetails}>
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          p="4"
        >
          <Text fontSize="xl">{title}</Text>
          <Text fontSize="sm">{details}</Text>
        </Box>
      </Fade>
    </Box>
  );
};

export default function App() {
  return (
    <Container maxW='xxl'>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
        >
          {cardsData.map(card => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              details={card.details}
            />
          ))}
        </Grid>
        </Container>
  );
}
