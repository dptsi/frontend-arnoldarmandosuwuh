import Navbar from "@/components/organisms/Navbar";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MainLayout = ({ children, ...props }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
