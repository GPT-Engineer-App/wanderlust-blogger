import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Add New Post</Heading>
        </Box>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isRequired
            />
            <Textarea
              placeholder="Post Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              isRequired
            />
            <Button type="submit" colorScheme="blue" width="full">Add Post</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default AddPost;