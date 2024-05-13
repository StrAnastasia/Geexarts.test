import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { ChooseSports } from "./ChooseSports";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import styles from "./styles.module.css";
import { Button } from "../../shared/Button";
import { TextInterSB } from "../../shared";
import { Stack } from "@mui/material";
import { ChooseSportsmen } from "./ChooseSportsmen";
import { ChooseOrganizations } from "./ChooseOrganizations";
import { FillInUserData } from "./FillInUserData";
import { Steps, dataFields, mockData, notes, num, titles } from "./const";

const titleStyles = {
  fontSize: "20px",
  lineHeight: "26px",
  letterSpacing: "-0.7%",
  fontWeight: 600,
};

export const FinishRegistration: FC<{ close: () => void }> = ({ close }) => {
  const [step, setStep] = useState<Steps>(Steps.ChooseSport);
  const [data, setData] = useState(dataFields);
  const [validData, setValidData] = useState(false);
  const [error, setError] = useState(false);

  const next = useCallback(() => {
    if (step === Steps.ChooseSport) return setStep(Steps.ChooseSportsmen);
    if (step === Steps.ChooseSportsmen)
      return setStep(Steps.ChooseOrganozation);
    if (step === Steps.ChooseOrganozation) return setStep(Steps.UsersData);
    if (step === Steps.UsersData && !data?.name) return setError(true);
    if (step === Steps.UsersData && data?.name) return setValidData(true);
  }, [step, data]);

  const prev = useCallback(() => {
    if (step === Steps.ChooseSportsmen) return setStep(Steps.ChooseSport);
    if (step === Steps.ChooseOrganozation)
      return setStep(Steps.ChooseSportsmen);
    if (step === Steps.UsersData) return setStep(Steps.ChooseOrganozation);
  }, [step]);

  const changeData = useCallback(() => {
    setError(false);
    setData(mockData);
  }, []);

  const theForm = useMemo(() => {
    if (step === Steps.ChooseSport) return <ChooseSports />;
    if (step === Steps.ChooseSportsmen) return <ChooseSportsmen />;
    if (step === Steps.ChooseOrganozation) return <ChooseOrganizations />;
    if (step === Steps.UsersData)
      return (
        <FillInUserData changeData={changeData} data={data} error={error} />
      );
    return <>info</>;
  }, [step, changeData, data, error]);

  useEffect(() => {
    if (validData) {
      localStorage.setItem("fullAccount", "true");
      close();
    }
  }, [validData, close]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.cross} onClick={close}>
        <Stack direction={"row"} spacing={1.5} sx={{ marginTop: 2 }}>
          <TextInterSB
            {...titleStyles}
            color="#9395B8"
            text={String(num[step]) + "/4"}
          />
          <TextInterSB {...titleStyles} text={titles[step]} />
        </Stack>

        <CloseOutlinedIcon />
        {notes[step] && (
          <TextInterSB
            sx={{ width: "100%", marginTop: 2 }}
            fontSize="12px"
            lineHeight="18px"
            fontWeight={600}
            color="#9395B8"
            text={notes[step]}
          />
        )}
      </div>

      <hr color="#F1F3F7" />
      <div className={styles.content}>{theForm}</div>
      <hr color="#F1F3F7" />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ marginTop: 2, padding: "16px 24px" }}
      >
        <Button
          variant="gray"
          onClick={step !== Steps.ChooseSport ? prev : close}
        >
          {step === Steps.ChooseSport ? "Пропустить" : "Назад"}
        </Button>

        <Stack direction={"row"} spacing={2}>
          {step !== Steps.ChooseSport && (
            <Button variant="gray" onClick={close}>
              Пропустить
            </Button>
          )}
          <Button variant="black" onClick={next}>
            Продолжить
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};
