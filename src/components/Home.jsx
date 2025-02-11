import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./SideBar";

const Home = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 }
        }}
      >
        <Sidebar/>
        <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}}>Copyright 2022 SH </Typography>
      </Box>
    </Stack>
  );
};

export default Home;
