import React from "react";
import {
  Container,
  Heading,
  VStack,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
const CreatePage = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: 0,
    imageUrl: "",
  });

  const handleAddProduct = () => {
    console.log("handle add product: ", newProduct);
  };

  return (
    <Container maxW={"480px"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
          borderRadius="md"
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <Input
              placeholder="Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />

            <Input
              placeholder="Image URL"
              name="imageUrl"
              value={newProduct.imageUrl}
              onChange={(e) =>
                setNewProduct({ ...newProduct, imageUrl: e.target.value })
              }
            />

            <Button colorScheme="teal" w={"full"} onClick={handleAddProduct}>
              Create Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
