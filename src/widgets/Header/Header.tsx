import React, { FC, useCallback } from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../App";
import { TextInterSB14pt } from "../../shared/TextInterSB14pt";
import { LanguageSelect } from "../../features/LanguageSelect";
import { tabs } from "./headerTabs";
import { LoginButton } from "../../features/LoginButton";

export const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
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
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{ padding: { xs: "0 24px", xl: "0!important" } }}
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
                {tabs.map(({ label, icon }) => (
                  <Button
                    key={label}
                    onClick={handleCloseNavMenu}
                    sx={{
                      p: 1,
                      color: theme.palette.primary.contrastText,
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {icon}
                    <TextInterSB14pt text={label} />
                  </Button>
                ))}
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <LanguageSelect />
                <LoginButton />
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
                  <TextInterSB14pt text={label} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
