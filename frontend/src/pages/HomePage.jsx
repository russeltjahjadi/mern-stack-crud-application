import React, { useEffect } from "react";
import { Container, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { Heading } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products: ", products);

  return (
    <>
      <Container>
        <VStack spacing={8}>
          <Text
            fontSize={"30"}
            fontWeight={"bold"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
            textAlign={"center"}
          >
            {" "}
            Current Products 🚀
          </Text>

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w={"full"}
            gap={10}
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>

          {products.length === 0 && (
            <Stack
              fontSize={"xl"}
              textAlign={"center"}
              fontWeight={"bold"}
              color="gray.500"
            >
              No products found{" "}
              <Link
                to={"/create"}
                style={{ color: "#3182ce", textDecoration: "underline" }}
              >
                Create a product
              </Link>
            </Stack>
          )}
        </VStack>
      </Container>
    </>
  );
};

export default HomePage;
