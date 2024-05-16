import { Box, Stack, Text, Img } from "@chakra-ui/react";

export default function AboutBanner() {
  return (
    <Stack direction={["column", "row"]} bgColor="#eee8aa" marginTop='-1.5%'>
      <Box 
        width={["100%", "50%"]} 
        display="flex" 
        justifyContent="center" 
        alignItems="center"
      >
        <Text 
          fontSize={{ base: "300%", md: "350%", lg: "350%" }} 
          fontWeight="400" 
          paddingTop="5%"
          paddingLeft="15%"
          paddingBottom="5%"
          textAlign="left"
        >
          welcome to the family! :)
        </Text>
      </Box>
      <Box 
        width={["100%", "50%"]} 
        display="flex" 
        justifyContent="center" 
        alignItems="center"
      >
        <Text 
          fontSize={{ base: "90%", md: "95%", lg: "100%" }} 
          fontWeight="400" 
          padding="5%"
          textAlign="left"
        >
          The Asian American Student Union is a Student Government Agency
          belonging to Florida State University. Throughout the year, AASU hosts
          educational and social events that promote Asian culture to the
          campus and Tallahassee community as a whole.
        </Text>
      </Box>
    </Stack>
  );
}

