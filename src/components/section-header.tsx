import clsx from "clsx";
import { FC, ReactNode } from "react";

interface SectionHeaderProps {
  className?: string;
  children?: ReactNode;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  className,
  children,
}) => {
  const headerClassName = clsx(
    "grid grid-cols-[2rem_1fr_2rem] items-center mb-2",
    className
  );
  return <header className={headerClassName}>{children}</header>;
};
