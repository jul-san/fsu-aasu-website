import { Box, Grid, Text } from "@chakra-ui/react";
import Headshot from "../components/Headshot"; // Adjust the import path as necessary
import Navbar from "../components/Navbar"; // Adjust the import path as necessary

export default function Board() {
  return (
    <>
      <Navbar />
      <Box bgColor="#782F40" textColor="white" paddingTop={["30%", "15%", "10%"]}>
        
      <Text align='center' fontSize={["250%", "300%", "400%"]}>Meet our Executive Board!</Text>

        <Grid 
          height='400%'
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
        >
          <Headshot
            imgSrc="/images/headshots/sean-faletti.jpeg"
            name="Sean Faletti"
            title="EXECUTIVE DIRECTOR"
            major='Creative Writing and Human Rights & Social Justice'
            year='Junior'
          />
          <Headshot
            imgSrc="/images/headshots/kyle-casiple.jpeg"
            name="Kyle Casiple"
            title="ASSISTANT DIRECTOR"
            major='Biomedical Engineering'
            year='Senior'
          />
          <Headshot
            imgSrc="/images/headshots/jessica-de.jpeg"
            name="Jessica De"
            title="TREASURER"
            major='Accounting'
            year='Sophomore'
          />
          <Headshot
            imgSrc="/images/headshots/emi-kellum.jpeg"
            name="Emi Kellum"
            title="SECRETARY" 
            major='Psychology'
            year='Junior'
          />
          <Headshot
            imgSrc="/images/headshots/jaiden-tran.jpeg"
            name="Jaiden Tran"
            title="HISTORIAN"
            major='Marketing'
            year='Sophomore'
          />
          <Headshot
            imgSrc="/images/headshots/layla-feaster.jpeg"
            name="Layla Feaster"
            title="PUBLIC RELATIONS"
            major='Music Education'
            year='Junior'
          />
          <Headshot
            imgSrc="/images/headshots/angelena-novotney.jpeg"
            name="Angelena Novotney"
            title="OUTREACH COORDINATOR"
            major='Biology and Philosophy'
            year='Sophomore'
          />
          <Headshot
            imgSrc="/images/headshots/anoushka-ahuja.jpeg"
            name="Anoushka Ahuja"
            title="EDUCATION COORDINATOR"
            major='Computer Science'
            year='Junior'
          />
          <Headshot
            imgSrc="/images/headshots/alana-ginter.jpeg"
            name="Alana Ginter"
            title="PROGRAMMING COORDINATOR"
            major='Economics and Japanese with Business'
            year='Sophomore'
          />
          <Headshot
            imgSrc="/images/headshots/sophia-gannaoui.jpeg"
            name="Sophia Gannaoui"
            title="PROGRAMMING COORDINATOR"
            major='Choral Music Education'
            year='Senior'
          />
        </Grid>
      </Box>
    </>
  );
}
