import { Box, Text, Img } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Box position="relative" display="inline-block" w="100%" overflow="hidden" m="0" >
      <Img
        src="/images/aasu-board-laughing.jpeg"
        maxWidth={{ base: "300%", md: "100%", lg: "100%" }}
        position="relative"
        left={["-30%", "0", "0", "0"]}
        margin="0" // Remove default margin
        padding="0" // Remove default padding
      />
      <Box
        position="absolute"
        top="100%" // Position text below the image
        left="50%" // Position text horizontally centered
        transform="translate(-50%, -100%)" // Adjust the position to be centered
        width={{ base: "90%", md: "70%", lg: "50%" }} // Adjust the width for different screen sizes
        p="0" // Ensure no padding
        m="0" // Ensure no margin
      >
        <Text fontSize={{ base: "150%", md: "150%", lg: "225%" }} fontWeight="500" textAlign="center" color="white" m="0" p="0">
          Florida State University
        </Text>
        <Text fontSize={{ base: "250%", md: "300%", lg: "500%" }} fontWeight="500" textAlign="center" color="#eee8aa" whiteSpace="pre-line" m="0" p="0">
          Asian American<br />Student Union
        </Text>
      </Box>
    </Box>
  );
}
