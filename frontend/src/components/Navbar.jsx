import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
  const iconColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          background={"linear-gradient(to right, #22d3ee, #3b82f6)"}
          backgroundClip={"text"}
          color={"transparent"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Button
            as={Link}
            to={"/create"}
            bg={"transparent"}
            color={iconColor}
            _hover={{ bg: "gray.200" }}
          >
            <CiSquarePlus fontSize={20} />
          </Button>

          <ColorModeButton />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
