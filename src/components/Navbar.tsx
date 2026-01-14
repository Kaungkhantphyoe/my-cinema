import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { MovieFilter, Favorite } from "@mui/icons-material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ background: "#0f172a" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MovieFilter sx={{ color: "#e11d48" }} />
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            CINEFLIX
          </Typography>
        </Box>
        <IconButton color="inherit">
          <Favorite />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
