import React, { FC } from "react";
import { Header } from "../widgets/Header/Header";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const BaseLayout: FC = () => {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#F1F3F7", padding: "24px 0", marginTop: 64 }}>
        <Container
          maxWidth="lg"
          sx={{ padding: { xs: "0 24px", lg: "0!important" } }}
        >
          <Outlet />
        </Container>
      </div>
    </div>
  );
};
