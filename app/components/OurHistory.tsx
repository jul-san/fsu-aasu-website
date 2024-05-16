import { Box, Stack, Text, Img } from "@chakra-ui/react";

export default function OurHistory() {
  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="5%"
        spacing={4} // Add spacing between the items
        padding="5%"
      >
        <Box
          width={{ base: "100%", md: "25%" }}
          height="25%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor="#eee8aa"
          order={{ base: 1, md: 0 }} // Make text appear second on small screens
        >
          <Text
            fontSize={{ base: "100%", md: "100%" }}
            fontWeight="400"
            padding="10%"
            textAlign="left"
          >
            <b>our history</b>
            <br />
            <br />
            Faye Hunt and Rich Sealy co-founded AASU in 1996 to better support
            the needs of the Asian American students at the school. The name was
            later changed from Asian Student Union to Asian American Student
            Union to more accurately represent the student body.
          </Text>
        </Box>
        <Img
          src="/images/fist-bump.jpeg"
          padding="%"
          maxWidth={{ base: "100%", md: "50%" }}
          position="relative"
          left={["0", "0", "0"]}
          order={{ base: 0, md: 1 }} // Make image appear first on small screens
        />
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="5%"
        spacing={4} // Add spacing between the items
        padding="5%"
      >
        <Img
          src="/images/alana-sophia.jpeg"
          padding="%"
          maxWidth={{ base: "100%", md: "50%" }}
          position="relative"
          left={["0", "0", "0"]}
          order={{ base: 0, md: 1 }} // Make image appear first on small screens
        />
        <Box
          width={{ base: "100%", md: "25%" }}
          height="25%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor="#eee8aa"
          order={{ base: 0, md: 1 }} // Make text appear second on small screens
        >
          <Text
            fontSize={{ base: "100%", md: "100%" }}
            fontWeight="400"
            padding="10%"
            textAlign="left"
          >
            <b>our community</b>
            <br />
            <br />
            Thousands of students have come to call AASU home. It is a vehicle
            that allows its members to explore their identity, network, find
            opportunities, and grow throughout their time at Florida State
            University. No matter the student’s race, creed or orientation, all
            are welcome within the AASU family!
          </Text>
        </Box>
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="5%"
        spacing={4} // Add spacing between the items
        padding="5%"
      >
        <Box
          width={{ base: "100%", md: "25%" }}
          height="25%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor="#eee8aa"
          order={{ base: 1, md: 0 }} // Make text appear second on small screens
        >
          <Text
            fontSize={{ base: "100%", md: "100%" }}
            fontWeight="400"
            padding="10%"
            textAlign="left"
          >
            <b>our mission</b>
            <br />
            <br />
            AASU will serve to encourage and promote the civic engagement of the
            Asian and Asian-American community, especially within the student
            body at the Florida State University. It shall function as an
            educational and cultural learning instrument for the FSU community.
          </Text>
        </Box>
        <Img
          src="/images/planning.jpeg"
          padding="%"
          maxWidth={{ base: "100%", md: "50%" }}
          position="relative"
          left={["0", "0", "0"]}
          order={{ base: 0, md: 1 }} // Make image appear first on small screens
        />
      </Stack>
    </>
  );
}
