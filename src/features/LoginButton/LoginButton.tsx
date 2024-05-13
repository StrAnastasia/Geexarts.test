import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Button, Modal } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { LoginForm } from "../LoginForm";
import { VerifyPhoneForm } from "../VerifyPhoneForm";
import { RegistrationForm } from "../RegistrationForm";
import { FinishRegistration } from "../FinishRegistration/FinishRegistration";

enum Steps {
  Login = "Login",
  Verify = "Verify",
  Register = "Register",
  FinishReg = "FinishReg",
}

export const LoginButton: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const [step, setStep] = useState<Steps>(Steps.Login);

  const verify = useCallback(() => setStep(Steps.Verify), []);
  const register = useCallback(() => setStep(Steps.Register), []);
  const login = useCallback(() => setStep(Steps.Login), []);
  const chooseSport = useCallback(() => setStep(Steps.FinishReg), []);

  const theForm = useMemo(() => {
    if (step === Steps.Login)
      return (
        <LoginForm close={handleClose} verify={verify} register={register} />
      );
    if (step === Steps.Verify)
      return <VerifyPhoneForm close={handleClose} continueReg={chooseSport} />;
    if (step === Steps.Register)
      return (
        <RegistrationForm close={handleClose} verify={verify} login={login} />
      );
    if (step === Steps.FinishReg) return <FinishRegistration close={handleClose} />;
    return <>info</>;
  }, [step, verify, register, login, handleClose, chooseSport]);

  useEffect(() => {
    if (!open) setStep(Steps.Login);
  }, [open]);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: "#F1F3F7",
          height: "40px",
          width: "40px",
          minHeight: "40px",
          minWidth: "40px",
        }}
      >
        <PersonOutlineOutlinedIcon sx={{ color: "#06082C" }} />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {theForm}
      </Modal>
    </>
  );
};
