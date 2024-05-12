import React, { FC, useCallback, useMemo } from "react";

import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { TextInterSB } from "../../shared/TextInterSB";
import { LanguageSelect } from "../../features/LanguageSelect";
import { tabs } from "./const";
import { LoginButton } from "../../features/LoginButton";
import { HeaderButton } from "./HeaderButton";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { RedDot } from "./RedDor";
import styles from "./styles.module.css";

export const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const isAuth = useMemo(() => localStorage.getItem("auth"), []);

  const handleOpenNavMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    },
    []
  );

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

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
            href="#app-bar-with-responsive-menu"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={"/logo.svg"} alt="logo" />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
                  <HeaderButton onClick={handleCloseNavMenu} {...tab} />
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
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {tabs.map(({ label }) => (
                <MenuItem key={label} onClick={handleCloseNavMenu}>
                  <TextInterSB
                    textAlign="center"
                    fontWeight={548}
                    text={label}
                  />
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
