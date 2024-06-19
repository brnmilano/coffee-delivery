import { useState } from "react";
import CloseAccordionIcon from "../Icons/CloseAccordionIcon";
import OpenAccordionIcon from "../Icons/OpenAccordionIcon";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={clsx(
          styles.accordionTitle,
          isActive && styles.openedAccordion
        )}
        onClick={() => setIsActive(!isActive)}
      >
        <p>{title}</p>

        <div>{isActive ? <OpenAccordionIcon /> : <CloseAccordionIcon />}</div>
      </div>

      {isActive && (
        <p
          onClick={() => setIsActive(!isActive)}
          className={styles.accordionContent}
        >
          {content}
        </p>
      )}
    </div>
  );
};

export default Accordion;
