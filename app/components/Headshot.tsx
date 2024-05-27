import { Box, Text, Flex, Link, Img, Stack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

interface HeadshotProps {
    imgSrc: string;
    name: string;
    title: string;
    major: string;
    year: string
  }

const Headshot: React.FC<HeadshotProps> = ({ imgSrc, name, title, major, year }) => {
    return (
    <>
      <Stack alignItems="left" padding='3%' paddingBottom='50%'>
        <Img
          src={imgSrc}
          boxSize={["100%", "100%%", "100%"]}
          objectFit="cover"
          flexShrink='0'
        />
        <Text fontSize={["150%", "150%", "150%"]} fontWeight='500' lineHeight='5'>{name}</Text>
        <Text fontSize={["100%", "100%", "100%"]} fontWeight='300'><i>{title}</i></Text>
        <Text fontSize={["100%", "100%", "100%"]} fontWeight='300' paddingTop='2%'>{major}</Text>
        <Text fontSize={["100%", "100%", "100%"]} fontWeight='300' >{year}</Text>

      </Stack>
    </>
  );
}

export default Headshot;

