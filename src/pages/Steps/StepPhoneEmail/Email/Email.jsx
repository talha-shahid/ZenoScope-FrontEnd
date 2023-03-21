import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import Card from "../../../../components/Card/Card";
import TextInput from "../../../../components/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";

const Email = ({ onNext }) => {
  const [email, setEmail] = useState("");

  return (
    <Card title="Enter your Email" icon="email">
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <div className={styles.actionButtonWrap}>
        <Button text="Next" onClick={onNext} />
      </div>
      <p className={styles.bottomParagraph}>
        By entering your number, you're agreeing to our Terms of Service and
        Privacy Policy. Thanks!
      </p>
    </Card>
  );
};

export default Email;
