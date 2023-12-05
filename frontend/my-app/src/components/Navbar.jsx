import React from "react";
import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GSlogo.jpg";

const Navbar = () => {
  return (
    <Box bg={"#191259"}>
      <Container maxW={"8xl"}>
        <HStack>
          <Image src={logo} width={"140px"} height={"90px"}/>
          <Text fontWeight={"bold"} fontSize={"22px"} color={"yellow.500"}>Code</Text>
          <Text fontWeight={"bold"} fontSize={"22px"} color={"blue.500"}>Converter</Text>
          <Text fontWeight={"bold"} fontSize={"22px"} color={"yellow.200"}>App</Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;