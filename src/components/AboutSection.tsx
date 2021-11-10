import { Flex, Box, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

import MotionBox from "./motion/Box";

const AboutSection = () => {
  return (
    <Box mb={6} mt={6}>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
      >
        <Image
          src="/assets/images/ww_party_hat.jpg"
          width={400}
          height={400}
          alt="Launching Illustration"
        />
      </MotionBox>
      <Text textAlign="center" fontSize="xs">
        <Link href="https://stories.freepik.com/web" isExternal>
          See The Collection
        </Link>
      </Text>

      <Flex marginY={4} justifyContent="center" alignItems="center">
        <Text textAlign="center" fontSize="2xl">
          We can&apos;t wait to unleash nature&apos;s middle fingers on the
          world with this brand new NFT collection Thanks for joining us on this
          journey
        </Text>
      </Flex>
    </Box>
  );
};

export default AboutSection;
