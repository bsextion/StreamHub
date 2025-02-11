import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";

import {Navbar, Home, VideoDetail, ChannelDetail, SearchFeed} from './components'

const App = () => {
  return (

    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
