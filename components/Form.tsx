import { FC } from "react";

import styles from "./Form.module.scss";
import Flex from "./Flex";

interface FormProps {
  children: React.ReactNode;
}

const Form: FC<FormProps> = ({ children }) => {
  return (
    <Flex column className={styles.Form}>
      {children}
    </Flex>
  );
};

export default Form;
