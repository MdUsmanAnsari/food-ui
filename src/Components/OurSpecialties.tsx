import {
  Container,
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

import Image1 from "../Resources/special__1.jpg";
import Image2 from "../Resources/special__2.jpg";
import Image3 from "../Resources/special__3.jpg";

const OurSpecialties = () => {
  return (
    <Container maxW="container.lg" py={24} textAlign="center">
      <Box textAlign="center" maxW="xl" display="inline-block" mb={20}>
        <Text
          mb={2}
          fontSize={{ base: "md", md: "2xl", lg: "4xl" }}
          fontWeight={600}
          color="gray.600"
        >
          TASTY & CRUNCHY
        </Text>
        <Heading fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }} mb={6}>
          Our Specialties
        </Heading>
        <Text color="gray.500" fontSize={{ base: "base", md: "md", lg: "xl" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          dolorem ea sunt ipsa culpa nostrum eum, temporibus reiciendis magni
          placeat porro unde, deserunt modi soluta voluptas amet mollitia?
          Inventore, commodi.
        </Text>
      </Box>
      <SimpleGrid columns={[2, null, 3]} spacing={10}>
        <Box role="group" overflow="hidden">
          <Image
            transition=".4s"
            _hover={{
              transformOrigin: "center center",
              transform: "scale(1.1)",
            }}
            borderRadius={4}
            src={Image1}
            objectFit="cover"
          />
        </Box>
        <Box role="group" overflow="hidden">
          <Image
            transition=".4s"
            _hover={{
              transformOrigin: "center center",
              transform: "scale(1.1)",
            }}
            borderRadius={4}
            src={Image2}
            objectFit="cover"
          />
        </Box>
        <Box role="group" overflow="hidden">
          <Image
            transition=".4s"
            _hover={{
              transformOrigin: "center center",
              transform: "scale(1.1)",
            }}
            borderRadius={4}
            src={Image3}
            objectFit="cover"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default OurSpecialties;
