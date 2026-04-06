import React from "react";
import {
  Box,
  HStack,
  IconButton,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "../store/product";
import { Toaster, toaster } from "@/components/ui/toaster";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct } = useProductStore();

  const handleDeleteProduct = async (product_id) => {
    const { success, message } = await deleteProduct(product_id);
    if (!success) {
      toaster.create({
        description: message,
        type: "error",
        closable: true,
      });
    } else {
      toaster.success({
        title: "Success",
        description: "Product created successfully",
        closable: true,
      });
    }
  };

  return (
    <>
      <Toaster />
      <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        transition="all 0.3s"
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}
      >
        <Image
          src={product.image}
          alt={product.name}
          h={48}
          w="full"
          objectFit="cover"
        />

        <Box p={4}>
          <Heading as="h3" size="md" mb={2}>
            {product.name}
          </Heading>

          <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
            ${product.price}
          </Text>
          <HStack gap={2}>
            <IconButton colorPalette="blue">
              <CiEdit />
            </IconButton>
            <IconButton colorPalette="red">
              <MdDelete onClick={() => handleDeleteProduct(product._id)} />
            </IconButton>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default ProductCard;
