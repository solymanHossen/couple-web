import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google"; // Import Inter font
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const gradientTextColor = useColorModeValue("linear(to-r, blue.500, purple.500)", "linear(to-r, blue.200, purple.200)"); // Gradient text color

  return (
    <main>
      {/* Hero section */}
      <Box
        bgImage="url('2.jpg')"
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        position="relative"
      >
        {/* Overlay with shadow */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgGradient="linear(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)"
          zIndex="1"
        />
        {/* Content */}
        <Box zIndex="2" display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
          <Heading fontFamily="Inter" fontWeight="bold" fontSize={{ base: "6xl" }} color={gradientTextColor} bgGradient={gradientTextColor} bgClip="text">
           I Love You
          </Heading>
          <Text textAlign='center' fontFamily="Inter" fontSize={{ base: "3xl", md: "2xl" }} mt={4} color='white' className="md:max-w-[50%] w-full md:px-0 px-3">
          "Every moment with you feels like a blessing. Your love is my anchor, grounding me in a world of chaos. I cherish you more with each passing day. 💖"
          </Text>
        <Link href={'/learn-more'}>
        <Button mt={8} colorScheme="purple">Learn More</Button></Link>
        </Box>
      </Box>
    </main>
  );
}
