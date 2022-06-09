import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg="purple.50"
      pt={80}
      pb={24}
      textAlign="center"
      mt="-20rem"
      clipPath="polygon(0 43%, 100% 0, 100% 100%, 0% 100%)"
    >
      <Text>Copyright @ Md.Usman Ansari</Text>
    </Box>
  );
};

export default Footer;
