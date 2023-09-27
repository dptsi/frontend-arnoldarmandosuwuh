import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import Navbar from "@/components/organisms/Navbar";
import { products } from "@/data/products";
import MainLayout from "@/layouts/Main";
import ProductCard from "@/components/organisms/ProductCard";

const Products = () => {
  return (
    <>
      <MainLayout>
        <Wrap spacing="30px" justify="center" minHeight="100vh">
          {products.map((product) => (
            <WrapItem key={product._id}>
              <Center w="250px" h="550px">
                <ProductCard product={product} />
              </Center>
            </WrapItem>
          ))}
        </Wrap>
      </MainLayout>
    </>
  );
};

export default Products;
