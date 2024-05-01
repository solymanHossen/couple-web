import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  const gradientTextColor = useColorModeValue("linear(to-r, blue.500, purple.500)", "linear(to-r, blue.700, purple.700)"); // Gradient text color

  return (
    <Box as="footer" bgGradient={gradientTextColor} color="white" py={8}>
      <Flex direction="column" align="center">
        <Text mb={2}>© 2024 My Website. All rights reserved.</Text>
        <Text fontSize="sm">Made with ❤️ by [Your Name]</Text>
    
      </Flex>
    </Box>
  );
}
