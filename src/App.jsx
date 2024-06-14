import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { Box, Flex, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box>
        <Flex justify="flex-end" p={4}>
          <IconButton
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            isRound
            size="md"
            onClick={toggleColorMode}
            aria-label="Toggle Dark Mode"
          />
        </Flex>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
