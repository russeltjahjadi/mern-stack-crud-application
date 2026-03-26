import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

function App() {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Box minH={"100vh"} bg={bg}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
