import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";
import NextLink from "next/link";

interface ProductProps {
  product: {
    _id: string;
    isNew: boolean;
    stock: number;
    image: string;
    name: string;
    price: number;
  };
}

const ProductCard = (props: ProductProps) => {
  const { product } = props;
  return (
    <Stack
      p="2"
      spacing="3px"
      bg={useColorModeValue("white", "gray.800")}
      minW="240px"
      h="450px"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      {product.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="green.300"
        />
      )}
      {product.stock <= 0 && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.300"
        />
      )}
      <Image src={product.image} alt={product.name} roundedTop="lg" />
      <Box flex="1" maxH="5" alignItems="baseline">
        {product.stock <= 0 && (
          <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
            Sold Out
          </Badge>
        )}
        {product.isNew && (
          <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
            New
          </Badge>
        )}
      </Box>
      <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Link
          as={NextLink}
          href={`/products${product._id}`}
          pt="2"
          cursor="pointer"
        >
          <Box fontSize="2xl" fontWeight="semibold" lineHeight="tight">
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justifyContent='space-between' alignContent='center' py='2'>
        
      </Flex>
      <Flex justify="space-between">
        <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
          <Box as="span" color={"gray.600"} fontSize="lg">
            $
          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip
          label="Add to cart"
          bg="white"
          placement="top"
          color="gray.800"
          fontSize="1.2em"
        >
          <Button
            variant="ghost"
            display="flex"
            isDisabled={product.stock <= 0}
          >
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf="center" />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
