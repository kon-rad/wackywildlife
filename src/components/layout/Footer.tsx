import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

import WWVRImage from "../../assets/images/ww_vr.jpg";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image
                src={WWVRImage}
                alt="wacky wildlife character"
                width={32}
                height={32}
                className="image__logo"
              />
            </Box>
            <Text fontSize="sm">
              © 2021 Wacky Wildlife. All rights reserved
            </Text>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>NFT Series</ListHeader>
            <Link href="/">Overview</Link>
            <Link href="/">Mint</Link>
            <Link href="/">Roadmap</Link>
            <Link href="/">Utility</Link>
            <Link href="/">Opeansea</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Games</ListHeader>
            <Link href="/">Flip Off Game</Link>
            <Link href="/">Demo</Link>
            <Link href="/">YouTube</Link>
            <Link href="/">Play Here</Link>
            <Link href="/">Games Roadmap</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <Link href="/">Help Center</Link>
            <Link href="/">For Beginners</Link>
            <Link href="/">Helpful Links</Link>
            <Link href="/">Legal</Link>
            <Link href="/">Privacy Policy</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Community</ListHeader>
            <Link href="/">Twitter</Link>
            <Link href="/">Discord</Link>
            <Link href="/">Medium</Link>
            <Link href="/">Youtube</Link>
            <Link href="/">Instagram</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
