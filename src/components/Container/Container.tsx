import { PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

export default function Container({
  children,
  className,
}: PropsWithChildren<Props>) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}
