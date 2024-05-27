"use client";
import {
  HStack,
  Button,
  Img,
  Flex,
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    { name: "about", href: "/" },
    { name: "affiliates", href: "/affiliates" },
    { name: "board", href: "/board" },
    { name: "events", href: "/events" },
    { name: "get involved!", href: "/get-involved" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        px={[2, 4, 6]}
        py={[1, 2, 4]}
        padding="5%"
        position='fixed'
        top="0"
        left="0"
        right="0"
        zIndex="10"
        bg="transparent"
        backdropFilter="blur(10px)"
        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" // Optional: Add shadow for better visibility

      >
        <Img
          src="/images/aasu-logo.jpeg"
          boxSize={["30%", "15%", "10%"]}
          objectFit="cover"
          ml={[2, 4, 6, 8]}
        />
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            colorScheme="transparent"
            textColor="black"
            icon={<HamburgerIcon />}
            aria-label="Toggle Navigation"
            onClick={isOpen ? onClose : onOpen}
            mt={[2, 4, 6, 8]}
            paddingRight="60%"
          />
        </Box>

        <HStack
          spacing="0%"
          ml={[2, 4, 6, 8]}
          display={{ base: "none", md: "flex" }}
          fontWeight="600"
        >
          {links.map(({ name, href }) => (
            <Link key={name} href={href} passHref>
              <Button
                colorScheme="transparent"
                textColor="black"
                fontWeight="lighter"
                size="md"
                maxWidth="auto"
              >
                {name}
              </Button>
            </Link>
          ))}
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <VStack spacing="24px" fontWeight="600">
              {links.map(({ name, href }) => (
                <Link key={name} href={href} passHref>
                  <Button
                    w="100%"
                    colorScheme="transparent"
                    textColor="black"
                    fontWeight="lighter"
                    size="lg"
                    onClick={onClose}
                  >
                    {name}
                  </Button>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
