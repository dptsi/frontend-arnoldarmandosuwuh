import { ReactNode } from "react";
import { useColorModeValue, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface NavLinkProps {
  path: string;
  children: ReactNode;
}

const NavLink = (props: Partial<NavLinkProps>) => {
  const { path, children } = props;
  return (
    <Link
      as={NextLink}
      href={`${path}`}
      px={2}
      py={2}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
