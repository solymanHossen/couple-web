import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  List,
  ListIcon,
  ListItem,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const bgColor = 'linear(to-r, #7928CA, #FF0080)';
    const bgColorNavText='#7928CA'
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("gray.800", "white");
  const bgColorHover = useColorModeValue("#3d2a50", "teal.500"); 
  const [isOpen, setIsOpen] = useState(true);
  const shadowColor = useColorModeValue("rgba(0, 0, 0, 0.2)", "rgba(255, 255, 255, 0.2)"); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bgGradient={bgColor}
        color="gray.800"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Box>
      <Link href={'/'}>
      <Box
      bgGradient="linear(to-r,  #FF0080 ,#7928CA)"
      bgColor="gray.700"
      w="fit-content"
      p={4}
      color="white"
      fontWeight="bold"
      fontSize="xx-large"
      borderRadius="lg"
      fontStyle="italic"
      boxShadow={shadowColor}
    >
      Love Couple
    </Box>
      </Link>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Toggle Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={toggleMenu}
            color={iconColor}
            variant="ghost"
          />
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <Box
            display={{ base: "block", md: "flex" }}
            mt={{ base: 4, md: 0 }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
          >
          <List display="flex" alignItems="center">
              <motion.div whileHover={{ scale: 1.05 }}>
               <Link href={'/first-show'}>
               <ListItem
                  mr={4}
                  p={2}
                  bg={bgColorNavText}
                  color="white"
                  fontSize="large"
                  borderRadius="md"
                  _hover={{ bg: bgColorHover }}
                >
                    
                  <ListIcon as={SunIcon} color="white" />
                  প্রথম দেখা
                </ListItem></Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <ListItem
                  mr={4}
                  p={2}
                  bg={bgColorNavText}
                  color="white"
                  fontSize="large"
                  borderRadius="md"
                  _hover={{ bg: bgColorHover }} 
                >
                  <ListIcon as={MoonIcon} color="white" />
                  প্রেম
                </ListItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <ListItem
                  p={2}
                  mr={4}
                  bg={bgColorNavText}
                  color="white"
                  fontSize="large"
                  borderRadius="md"
                  _hover={{ bg: bgColorHover }}
                  
                >
                  <ListIcon as={SunIcon} color="white" />
                  প্রেম
                </ListItem>
              </motion.div>
            </List>
          </Box>
        </Collapse>
      </Flex>
    </motion.div>
  );
};

export default Navbar;
