import Head from "next/head";

import { Inter } from "@next/font/google";

import { Box, Heading, Text } from "@chakra-ui/react";

import Header from "components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <Head>
        <title>The Decentralized Music Platform</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/flut.ico" />
      </Head>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        padding="6rem"
        minHeight="100vh"
      >
        <Header />
        <Text
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="5xl"
          paddingY="15vh"
          textAlign="center"
        >
          Why it Matters
        </Text>

        <Text
          fontSize="large"
          lineHeight="260%"
          marginX={{ base: "0", medium: "15vw" }}
        >
          Manifesto: The music industry has long been plagued by issues of
          centralized control, lack of transparency, and unfair compensation for
          artists and musicians. FLUTE can address these problems by creating a
          decentralized music ecosystem that empowers musicians, artists, and
          music lovers.
        </Text>
        <Text
          fontSize="large"
          lineHeight="260%"
          marginX={{ base: "0", medium: "15vw" }}
          paddingY="10"
        >
          FLUTE enables artists and musicians to publish their work and receive
          fair compensation in the form of FLUTE tokens. These tokens can then
          be used to purchase & stream music, merchandise, and other services
          within the platform providing a new revenue stream for artists and
          musicians. The revenue-sharing model of FLUTE token will distribute a
          portion of the revenue generated by the platform among token holders,
          encouraging a strong community of supporters and incentivizing the
          growth of the platform. This will provide an opportunity for music
          lovers and supporters to directly contribute to the success of their
          favorite artists and musicians. FLUTE token is a powerful solution to
          the problems facing the music industry, providing a transparent and
          decentralized platform that fosters creativity, innovation, and fair
          compensation for all involved.
        </Text>
        <Text
          fontSize="large"
          lineHeight="260%"
          marginX={{ base: "0", medium: "15vw" }}
        >
          This will provide an opportunity for music lovers and supporters to
          directly contribute to the success of their favorite artists and
          musicians. FLUTE token is a powerful solution to the problems facing
          the music industry, providing a transparent and decentralized platform
          that fosters creativity, innovation, and fair compensation for all
          involved. By embracing FLUTE token, we can revolutionize the music
          industry and empower artists and musicians to take control of their
          own work and earn a fair income from their talent. Join us in our
          mission to revolutionize the music industry with FLUTE token.
          Together, we can create a brighter future for artists, musicians, and
          music lovers worldwide.
        </Text>
        <Text
          fontSize="large"
          lineHeight="260%"
          marginX={{ base: "0", medium: "15vw" }}
          paddingY="10"
        >
          Together, we can create a brighter future for artists, musicians, and
          music lovers worldwide.
        </Text>
      </Box>
    </Box>
  );
}
