import React, { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { BigLogo } from "../../shared/icons";
import { Loader, ReverseTimer, TextInterSB } from "../../shared";
import styles from "./styles.module.css";
import { Button } from "../../shared/Button/Button";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const phone = "+7  983 540-49-43";
const inputs = [0, 1, 2, 3, 4, 5];
const initValue = Object.fromEntries(inputs.map((id) => [id, ""]));

export const VerifyPhoneForm: FC<{
  close: () => void;
  continueReg: () => void;
}> = ({ close, continueReg }) => {
  const [code, setCode] = useState(initValue);
  const [error, setError] = useState("");
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeCode = useCallback(
    (val: string, id: number) => {
      setCode((prev) => ({ ...prev, [id]: val }));
      if (error) setError("");
    },
    [error]
  );

  const resend = useCallback(() => setCanResend(true), []);

  const submit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const value = Object.values(code).join("");
      if (!value) {
        setError("Это поле обязательное");
        return;
      }
      if (value.length !== 6) {
        setError("Введен неверный код");
        return;
      }
      if (value.length === 6) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          localStorage.setItem("auth", "true");
          const isProlongedReg = localStorage.getItem("prolongedReg");
          if (isProlongedReg) return continueReg();
          close();
        }, 2000);
      }
    },
    [code, continueReg, close]
  );

  useEffect(() => {
    if (!canResend) {
      setTimeout(() => {
        setCanResend(true);
      }, 61000);
    }
  }, [canResend]);

  return (
    <form onSubmit={submit} className={styles.wrapper}>
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
          text="Подтвердите номер телефона"
        />
        <TextInterSB
          fontWeight={600}
          fontSize="12px"
          color="#9395B8"
          text="Отправим сообщение с 6-ти значным кодом"
        />
        <div className={styles.description}>
          <TextInterSB
            fontWeight={600}
            fontSize="12px"
            color="#9395B8"
            text={"на номер " + phone}
            sx={{ mr: "2px" }}
          />
          <TextInterSB fontWeight={600} fontSize="12px" text="Изменить" />
        </div>
      </div>
      <div className={styles.marginBottom}>
        <div
          className={`${styles.inputWrapper} ${
            error ? styles.errorInputContainer : ""
          }`}
        >
          {inputs.map((id) => (
            <div>
              <input
                value={code[id]}
                onChange={({ target }) => changeCode(target.value, id)}
                maxLength={1}
                autoComplete="false"
              />
            </div>
          ))}
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <Button
        variant="black"
        fullWidth
        justifyContent="center"
        type="submit"
        disabled={isLoading}
        leftIcon={isLoading ? <Loader /> : ""}
      >
        {isLoading ? "" : "Подтвердить"}
      </Button>
      <div className={styles.timer}>
        {canResend ? (
          <Button
            variant="gray"
            fullWidth
            justifyContent="center"
            onClick={resend}
          >
            Отправить повторно
          </Button>
        ) : (
          <>
            <TextInterSB
              color="#9395B8"
              textAlign="center"
              text="Отправить снова через"
            />
            <p>
              <ReverseTimer initialTime={60} />
            </p>
          </>
        )}
      </div>
    </form>
  );
};
