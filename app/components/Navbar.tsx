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

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        px={[2, 4, 6]}
        py={[1, 2, 4]}
        padding="5%"
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
          fontWeight='600'
        >
          {[
            "about",
            "affiliates",
            "board",
            "events",
            "get involved!",
            "contact",
          ].map((item) => (
            <Button
              key={item}
              colorScheme="transparent"
              textColor="black"
              fontWeight="lighter"
              size="md"
              maxWidth="auto"
            >
              {item}
            </Button>
          ))}
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <VStack spacing="24px">
              {[
                "about",
                "affiliates",
                "board",
                "events",
                "get involved!",
                "contact",
              ].map((item) => (
                <Button
                  key={item}
                  w="100%"
                  colorScheme="transparent"
                  textColor="black"
                  fontWeight="lighter"
                  size="lg"
                  onClick={onClose}
                >
                  {item}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
