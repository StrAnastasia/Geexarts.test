import React, { FC, useMemo } from "react";

import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LanguageSelect } from "../../features/LanguageSelect";
import { tabs } from "./const";
import { LoginButton } from "../../features/LoginButton";
import { HeaderButton } from "./HeaderButton";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { RedDot } from "./RedDor";
import styles from "./styles.module.css";

export const Header: FC = () => {
  const isAuth = useMemo(() => localStorage.getItem("auth"), []);

  return (
    <AppBar position="fixed" sx={{ boxShadow: "none" }}>
      <Container
        maxWidth="lg"
        sx={{ padding: { xs: "0 24px", lg: "0!important" } }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={"/logo.svg"} alt="logo" />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{ mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1 }}
          >
            <img src={"/logo.svg"} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack
              sx={{ width: "100%" }}
              direction="row"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Stack direction="row" alignItems="center" spacing={"30px"}>
                {tabs.map((tab) => (
                  <HeaderButton {...tab} />
                ))}
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <LanguageSelect />
                {isAuth ? (
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                    className={styles.graySVGs}
                  >
                    <button className={styles.notif}>
                      <NotificationsNoneOutlinedIcon />
                      <RedDot />
                    </button>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      sx={{ cursor: "pointer" }}
                    >
                      <Avatar
                        sx={{ width: "36px", height: "36px" }}
                        src={"/images/Александр Магомедов.png"}
                      />
                      <ExpandMoreOutlinedIcon />
                    </Stack>
                  </Stack>
                ) : (
                  <LoginButton />
                )}
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
