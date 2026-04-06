import React, { useState } from "react";
import {
  Box,
  HStack,
  IconButton,
  Image,
  Text,
  Heading,
  Dialog,
  Input,
  VStack,
  Button,
  Field,
} from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "../store/product";
import { Toaster, toaster } from "@/components/ui/toaster";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const [isOpen, setIsOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  });

  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (product_id) => {
    const { success, message } = await deleteProduct(product_id);
    if (!success) {
      toaster.create({ description: message, type: "error", closable: true });
    } else {
      toaster.success({
        title: "Success",
        description: "Product deleted successfully",
        closable: true,
      });
    }
  };

  const handleUpdateProduct = async (product_id, updatedProduct) => {
    const { success, message } = await updateProduct(
      product._id,
      updatedProduct,
    );
    if (!success) {
      toaster.create({ description: message, type: "error", closable: true });
    } else {
      toaster.success({
        title: "Success",
        description: "Product updated successfully",
        closable: true,
      });
      setIsOpen(false);
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
            {/* Edit button lives OUTSIDE Dialog.Root */}
            <IconButton
              colorPalette="blue"
              aria-label="Edit product"
              onClick={() => setIsOpen(true)}
            >
              <CiEdit />
            </IconButton>

            {/* Delete Button */}
            <IconButton
              colorPalette="red"
              aria-label="Delete product"
              onClick={() => handleDeleteProduct(product._id)}
            >
              <MdDelete />
            </IconButton>
          </HStack>
        </Box>
      </Box>

      <Dialog.Root open={isOpen} closeOnInteractOutside={false}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Edit Product</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <VStack gap={4}>
                <Field.Root>
                  <Field.Label>Product Name</Field.Label>
                  <Input
                    value={updatedProduct.name}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        name: e.target.value,
                      })
                    }
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Price</Field.Label>
                  <Input
                    type="number"
                    value={updatedProduct.price}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Image URL</Field.Label>
                  <Input
                    value={updatedProduct.image}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        image: e.target.value,
                      })
                    }
                  />
                </Field.Root>
              </VStack>
            </Dialog.Body>

            <Dialog.Footer>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button
                colorPalette="blue"
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
              >
                Save
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};

export default ProductCard;
