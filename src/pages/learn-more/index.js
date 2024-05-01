import CardGredent from "@/components/CardGredent";
import { Box, ChakraProvider, Container, Divider, Flex, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";

const quotes = [
  {
    text: "সবাই তোমাকে কষ্ট দিবে, তোমাকে শুধু এমন একজন কে খুঁজে নিতে হবে যার দেয়া কষ্ট তুমি সহ্য করতে পারবে",
    author: "হুমায়ূন আহমেদ",
    gradient: "linear(to-r, teal.300, blue.400)"
  },
  {
    text: "ক্ষমাই যদি করতে না পারো, তবে তাকে ভালোবাসো কেন?",
    author: "রবীন্দ্রনাথ ঠাকুর",
    gradient: "linear(to-r, pink.300, purple.400)"
  },
  {
    text: "অপেক্ষা হলো শুদ্ধতম ভালোবাসার একটি চিহ্ন। সবাই ভালোবাসি বলতে পারে। কিন্তু সবাই অপেক্ষা করে সেই ভালোবাসা প্রমাণ করতে পারে না।",
    author: "হুমায়ূন আহমেদ",
    gradient: "linear(to-r, yellow.300, orange.400)"
  },
  {
    text: "ভালবাসা যা দেয়, তার চেয়ে বেশি কেড়ে নেয় !",
    author: "টেনিসন",
    gradient: "linear(to-r, green.300, emerald.400)"
  },
  {
    text: "যৌবনে যার প্রেম হল না তার জীবন বৃথা",
    author: "শংকর",
    gradient: "linear(to-r, red.300, pink.400)"
  }
];



export default function App() {
  return (
<Container maxW='xxl'>
      <Flex justify="center" align="center" padding='48px 0px' >
        <VStack spacing="8">
          <Heading as="h1" size="xl" textAlign="center">Quotes</Heading>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap="4">
            {quotes.map((quote, index) => (
              <GridItem key={index}>
                <Box w="100%">
                  <Box bg="white" borderRadius="lg" overflow="hidden">
                    <CardGredent text={quote.text} author={quote.author} gradient={quote.gradient} />
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Flex>

</Container>
  );
}
