import { Container, Text, VStack, Heading, Box, Image, HStack, Link } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Text fontSize="lg">Sharing my thoughts on web development, tech, and life.</Text>
        </Box>
        <Box>
          <Image borderRadius="md" src="/images/blog-banner.jpg" alt="Blog Banner" />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Understanding React Hooks</Heading>
              <Text mt={4}>A deep dive into the world of React Hooks and how they can simplify your code.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">JavaScript ES2021 Features</Heading>
              <Text mt={4}>An overview of the latest features introduced in JavaScript ES2021.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">CSS Grid vs. Flexbox</Heading>
              <Text mt={4}>Comparing CSS Grid and Flexbox for building modern web layouts.</Text>
            </Box>
          </VStack>
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>Follow Me</Heading>
          <HStack spacing={4} justify="center">
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
            <Link href="https://github.com" isExternal>
              <FaGithub size="24px" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;