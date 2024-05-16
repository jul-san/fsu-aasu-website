import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="left"
        bgColor="#eee8aa"
        paddingBottom="5%"
      >
        <Text
          fontSize={{ base: "75%", md: "90%", lg: "150%" }}
          fontWeight="400"
          textAlign="left"
          paddingLeft="10%"
          paddingTop="2%"
        >
          Asian American Student Union
        </Text>
        <Flex justifyContent="left" paddingLeft="10%" paddingTop="1%">
          <Link href="https://www.facebook.com" isExternal>
            <FaFacebook size="24px" />
          </Link>
          <Link href="https://www.twitter.com" isExternal marginLeft="10px">
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://www.instagram.com" isExternal marginLeft="10px">
            <FaInstagram size="24px" />
          </Link>
        </Flex>
        <Text
          fontSize={{ base: "60%", md: "70%", lg: "100%" }}
          fontWeight="400"
          textAlign="left"
          paddingLeft="10%"
          paddingTop="2%"
        >
          Made by Julian Sanchez
        </Text>
      </Box>
    </>
  );
}
