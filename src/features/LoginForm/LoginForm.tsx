import React, { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { BigLogo } from "../../shared/icons";
import { TextInterSB } from "../../shared";
import styles from "./styles.module.css";
import { MuiTelInput } from "mui-tel-input";
import { Button } from "../../shared/Button/Button";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export const LoginForm: FC<{
  verify: () => void;
  register: () => void;
  close: () => void;
}> = ({ verify, register, close }) => {
  const [phone, setPhone] = useState("+7");
  const [error, setError] = useState("");

  const changePhone = useCallback(
    (val: string) => {
      setPhone(val);
      if (error.length) setError("");
    },
    [error]
  );

  const login = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (!phone) {
        setError("Это поле обязательное");
        return;
      }
      if (phone.length !== 16) {
        setError("Номер телефона введен неверно");
        return;
      }
      verify();
    },
    [phone, verify]
  );

  useEffect(() => {
    const flagInput = document.querySelector(".MuiTelInput-Flag");
    flagInput?.setAttribute("data-testid", "RU");
    const image = flagInput?.querySelector("img");
    image?.setAttribute("src", "https://flagcdn.com/w40/ru.webp");
    image?.setAttribute("alt", "Russia");
  }, []);

  return (
    <form onSubmit={login} className={styles.wrapper}>
      <div className={styles.cross} onClick={close}>
        <CloseOutlinedIcon />
      </div>
      <div className={styles.logo}>
        <BigLogo />
        <TextInterSB
          sx={{ marginTop: 3, marginBottom: 2 }}
          fontSize="30px"
          lineHeight="32px"
          fontWeight={600}
          textAlign="center"
          text="Вход на платформу"
        />
        <TextInterSB
          color="#9395B8"
          textAlign="center"
          text="Код будет автоматически отправлен на Ваш номер телефона с помощью SMS"
          sx={{ marginBottom: 4, width: "96%" }}
        />
      </div>
      <div
        className={`${styles.inputContainer} ${
          error ? styles.errorInputContainer : ""
        }`}
      >
        <label>Номер телефона</label>
        <MuiTelInput
          sx={{ marginTop: "6px" }}
          value={phone}
          onChange={changePhone}
          placeholder="+7"
          autoFocus
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <Button variant="black" fullWidth justifyContent="center" type="submit">
        Получить код
      </Button>
      <TextInterSB
        sx={{ mt: 5, mb: 2 }}
        color="#9395B8"
        textAlign="center"
        text="Нет аккаунта?"
      />
      <Button
        variant="gray"
        fullWidth
        justifyContent="center"
        onClick={register}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};
