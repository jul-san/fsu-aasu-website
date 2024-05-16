import { Box, Text, Img } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box position="relative" display="inline-block">
      <Img
        src="/images/aasu-board-laughing.jpeg"
        maxWidth={{ base: "300%", md: "100%", lg: "100%" }}
        position="relative"
        left={["-30%", "0", "0", "0"]}
      />
      <Box
        position="relative"
        top="50%" // Position text vertically centered
        left="50%" // Position text horizontally centered
        transform="translate(-50%, -120%)" // Adjust the position to be centered
        p={2} // Padding for the text box
        borderRadius="md" // Optional: rounded corners for the text box
        maxWidth={{ base: "100%", md: "60%", lg: "50%" }}
      >
        <Text fontSize={{ base: "125%", md: "150%", lg: "225%"}} fontWeight="500" textAlign='center' color='white'>
          florida state university
        </Text>
        <Text fontSize={{ base: "225%", md: "300%", lg: "500%"}} fontWeight="500" textAlign='center' color='#eee8aa' whiteSpace="pre-line">
          asian american<br />student union
        </Text>
      </Box>
    </Box>
  );
}
