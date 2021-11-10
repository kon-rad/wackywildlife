import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
        <Box margin="8">
          <Box as="main" marginY={22}>
            {children}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
