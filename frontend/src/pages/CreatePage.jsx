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
import { useProductStore } from "../store/product";
import { Toaster, toaster } from "@/components/ui/toaster";

const CreatePage = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: 0,
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toaster.create({
        description: message,
        type: "error",
        closable: true,
      });
    } else {
      toaster.success({
        description: "Product created successfully",
        closable: true,
      });
    }
  };

  return (
    <>
      <Toaster />
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
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />

              <Button colorScheme="teal" w={"full"} onClick={handleAddProduct}>
                Create Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default CreatePage;
