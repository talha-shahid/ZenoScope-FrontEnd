import React, { useState } from "react";
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/TextInput/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";
import styles from "./StepName.module.css";

const StepName = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate);
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(name);
  function nextStep() {
    if (!fullName) {
      return;
    }
    dispatch(setName(fullName));
    onNext();
  }

  const handler = (event) => {
    if (event.key === "Enter") {
      nextStep();
    }
  };

  return (
    <>
      <Card title="What's your full name?" icon="name">
        <TextInput
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          onKeyDown={(e) => handler(e)}
        />
        <p className={styles.paragraph}>People use real names at CodersHouse</p>
        <div className={styles.actionButtonWrap}>
          <Button onClick={nextStep} text="Next" />
        </div>
      </Card>
    </>
  );
};

export default StepName;
