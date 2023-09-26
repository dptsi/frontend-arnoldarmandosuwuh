import { ReactNode } from "react";
import { useColorModeValue, Link } from "@chakra-ui/react";

interface NavLinkProps {
  path: string;
  children: ReactNode;
}

const NavLink = (props: Partial<NavLinkProps>) => {
  const { path, children } = props;
  return (
    <Link
      href={path}
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
