import { Box, Text } from "@chakra-ui/react";

export default function CardGredent({ text, author, gradient }) {
  return (
    <Box p="4" borderRadius="lg" bgGradient={gradient} boxShadow="xl">
    <Text fontSize="lg" fontStyle="italic">{text}</Text>
    <Text mt="2" textAlign="right">- {author}</Text>
  </Box>
  )
}