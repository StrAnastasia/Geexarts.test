import React, { FC, useCallback, useMemo, useState } from "react";
import styles from "./styles.module.css";

import { Avatar, Menu, MenuItem } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { DataFieldnames, errorMessages, placeholders, translate } from "./const";
import { TextInterSB } from "../../shared";
import { AddPhotoIcon, RUIcon, TrashIcon } from "../../shared/icons";

export const FillInUserData: FC<{
  changeData: () => void;
  data: Record<DataFieldnames, string>;
  error?: boolean;
}> = ({ changeData, data, error }) => {
  const inputs = useMemo(() => Object.entries(data), [data]);

  const [photo, setPhoto] = useState("");
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  console.log(anchorElNav);

  const handleOpenNavMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    },
    []
  );

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  const addPhoto = useCallback(() => {
    setPhoto("/images/Александр Магомедов.png");
    setAnchorElNav(null);
  }, [setAnchorElNav]);

  const deletePhoto = useCallback(() => {
    setPhoto("");
    setAnchorElNav(null);
  }, [setAnchorElNav]);

  return (
    <div className={styles.userDataForm}>
      <div className={styles.avatarContainer}>
        <Avatar sx={{ width: "100px", height: "100px" }} src={photo} />
        <div className={styles.addPhoto} onClick={handleOpenNavMenu}>
          <PhotoCameraIcon />
        </div>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ marginTop: 1, transform: "translateX(-68px)" }}
        >
          <MenuItem onClick={addPhoto} className={styles.dropDownItem}>
            <AddPhotoIcon />
            <TextInterSB fontWeight={600} text={"Загрузить"} />
          </MenuItem>
          <MenuItem onClick={deletePhoto} className={styles.dropDownItem}>
            <TrashIcon />
            <TextInterSB fontWeight={600} text={"Удалить"} />
          </MenuItem>
        </Menu>
      </div>
      <div className={`${styles.userDataGrid} ${error && styles.errorMargin}`}>
        {(inputs as [field: DataFieldnames, value: string][]).map(
          ([field, value], ind) => (
            <div key={ind}>
              <label>{translate[field]}</label>
              <div
                className={`${styles.inputWrapper} ${
                  error && errorMessages[field] && styles.error
                }`}
              >
                {field === "citizenship" && value && <RUIcon />}
                <input
                  value={value}
                  onChange={changeData}
                  placeholder={placeholders[field]}
                />
                {field === "dateOfBirth" && <CalendarTodayIcon />}
                {field === "gender" && <ExpandMoreIcon />}
                {field === "citizenship" && <ExpandMoreIcon />}
              </div>
              {error && (
                <TextInterSB
                  color="#D21010"
                  fontSize="12px"
                  lineHeight="18px"
                  letterSpacing="0"
                  sx={{ marginTop: 0.5 }}
                  text={errorMessages[field]}
                />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};
