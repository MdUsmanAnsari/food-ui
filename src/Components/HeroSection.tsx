import { Box, Button, Text, Heading, Container, Img } from "@chakra-ui/react";
import BgImg from "../Resources/hero.jpg";

const HeroSection = () => {
  const imagePth = "." + BgImg;

  return (
    <Box
      as="section"
      //   backgroundImage={BgImg}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundImage={`linear-gradient(to bottom, pink, transparent), url(${imagePth}) `}
    >
      <Container maxW="xl" textAlign="center">
        <Heading
          mb={4}
          color="gray.700"
          fontSize={{ base: "md", md: "2xl", lg: "4xl" }}
        >
          TASTE AND COMFORT
        </Heading>
        <Heading
          textTransform="uppercase"
          mb={6}
          fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
        >
          Tasty & Healthy
        </Heading>
        <Text
          color="gray.600"
          mb={8}
          fontSize={{ base: "base", md: "md", lg: "xl" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit quam mollitia enim tempore, harum veritatis?
        </Text>
        <Button colorScheme="pink">View Our Menu</Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
