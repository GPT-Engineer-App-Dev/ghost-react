import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">My Website</Text>
        <Flex>
          <Link href="#" p={2} color="white">Home</Link>
          <Link href="#" p={2} color="white">About</Link>
          <Link href="#" p={2} color="white">Contact</Link>
        </Flex>
      </Flex>
      <Box as="main" p={4} flex="1">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is the main content area. Start adding your content here.</Text>
        </VStack>
      </Box>
      <Flex as="footer" bg="blue.500" color="white" p={4} justifyContent="center">
        <Text>&copy; 2023 My Website. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;