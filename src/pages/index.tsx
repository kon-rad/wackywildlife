import { Box } from "@chakra-ui/react";

import AboutSection from "components/AboutSection";
import Features from "components/Features";
import Hero from "components/Hero";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <Hero />
      <AboutSection />
      <Features />
    </Box>
  );
};

export default Home;
