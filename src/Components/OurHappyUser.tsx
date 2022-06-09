import {
  Box,
  Image,
  Text,
  Heading,
  Container,
  Grid,
  Button,
  GridItem,
} from "@chakra-ui/react";

import { MdOutlineArrowForward } from "react-icons/md";

import image from "../Resources/customer-1.jpg";

const OurHappyUser: React.FC = () => {
  return (
    <Box bg="purple.50" py={24}>
      <Container maxW="container.lg">
        <Box textAlign="center" mb={10}>
          <Box textAlign="center" maxW="xl" display="inline-block" mb={20}>
            <Text mb={0} fontSize="lg" fontWeight={600} color="gray.600">
              MEET
            </Text>
            <Heading fontSize="6xl" mb={6}>
              Our Happy Users
            </Heading>
            <Text color="gray.500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              dolorem ea sunt ipsa culpa nostrum eum, temporibus reiciendis
              magni placeat porro unde.
            </Text>
          </Box>
        </Box>
        <Grid templateColumns="min-content 1fr" gap={16}>
          <GridItem
            role="group"
            overflow="hidden"
            width="22rem"
            height="28rem"
            backgroundColor="pink.50"
            borderRadius={4}
          >
            <Image
              boxSize="100%"
              transition=".4s"
              _hover={{
                transformOrigin: "center bottom",
                transform: "scale(1.1)",
              }}
              src={image}
              objectFit="cover"
            />
          </GridItem>
          <GridItem>
            <Heading>Md Usman Ansari</Heading>
            <Text fontSize="md" fontWeight={600} mt={2} mb={6}>
              <Box as="span" color="gray.500">
                Location:
              </Box>
              <Box as="span"> India</Box>
            </Text>
            <Text mb={10}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              ut odio officiis quo veniam distinctio voluptatem tempora nihil
              qui expedita necessitatibus aliquam fugiat, quam repudiandae,
              recusandae dolore quisquam magnam autem. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quibusdam ut odio officiis quo
              veniam distinctio voluptatem tempora nihil qui expedita
              necessitatibus aliquam fugiat, quam repudiandae, recusandae dolore
              quisquam magnam autem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quibusdam ut odio officiis quo veniam distinctio
              voluptatem tempora nihil qui expedita necessitatibus aliquam
              fugiat, quam repudiandae, recusandae dolore quisquam magnam autem.
              Lorem ipsum dolor sit amet consectetur.
            </Text>
            <Box textAlign="right">
              <Button
                colorScheme="pink"
                rightIcon={<MdOutlineArrowForward />}
                variant="outline"
                mr={4}
              >
                Know Me
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurHappyUser;
