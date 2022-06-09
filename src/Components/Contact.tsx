import {
  Box,
  FormLabel,
  Container,
  FormControl,
  Input,
  Heading,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Contact: React.FC = () => {
  return (
    <Box py={24}>
      0
      <Container
        maxW="container.md"
        backgroundColor="pink.100"
        p={16}
        borderRadius={4}
        position="relative"
        zIndex={1}
      >
        <Heading textAlign="center" color="gray.900" mb={12}>
          Contact Us For More Queries!!
        </Heading>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            mb={8}
            borderColor="gray.600"
            focusBorderColor="gray.900"
            _hover={{
              borderColor: "none",
            }}
          />
          <FormLabel htmlFor="email">Message:</FormLabel>
          <Textarea
            placeholder="Here is a sample placeholder"
            resize="none"
            borderColor="gray.600"
            focusBorderColor="gray.900"
            _hover={{
              borderColor: "none",
            }}
          />
          <Box mt={12} textAlign="right">
            <Button colorScheme="pink"> Send Message</Button>
          </Box>
        </FormControl>
      </Container>
    </Box>
  );
};

export default Contact;
