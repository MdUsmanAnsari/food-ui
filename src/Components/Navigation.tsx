import { Box, Flex, List, ListItem, Link, Container } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box
      px={12}
      py={6}
      fontSize="lg"
      position="fixed"
      w="100%"
      left={0}
      top={0}
      zIndex={100}
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
      >
        <Box>Logo</Box>
        <List display="flex" alignItems="center" gap={10}>
          <ListItem>
            <Link>Home</Link>
          </ListItem>
          <ListItem>
            <Link>About</Link>
          </ListItem>
          <ListItem>
            <Link>Testmonial</Link>
          </ListItem>
          <ListItem>
            <Link>Contacts</Link>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Navigation;
