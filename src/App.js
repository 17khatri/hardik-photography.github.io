import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  Box, Typography } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import WeddingGallery from "./components/Events/WeddingGallery";
import PreWeddingGallery from "./components/Events/PreWeddingGallery";

// Custom TabPanel component
function CustomTabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index} >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Box>
        <Routes>
          <Route path="/" element={<CustomTabPanel value={0} index={0}><Home /></CustomTabPanel>} />
          <Route path="/about" element={<CustomTabPanel value={1} index={1}><About /></CustomTabPanel>} />
          <Route path="/contact" element={<CustomTabPanel value={2} index={2}><Contact /></CustomTabPanel>} />
          <Route path="projects/wedding/:coupleName" element={<WeddingGallery/>}></Route>
          <Route path="projects/pre-wedding/:coupleName" element={<PreWeddingGallery/>}></Route>
        </Routes>
      </Box>
    </Router>
  );
}
