import Image from "next/image";
import Navbar from "../app/components/Navbar";
import Banner from "../app/components/Banner";
import AboutBanner from "../app/components/AboutBanner";
import OurHistory from "../app/components/OurHistory";
import Footer from "../app/components/Footer";
import { Box } from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutBanner />
      <OurHistory />
      <Footer />
    </>
  );
}
