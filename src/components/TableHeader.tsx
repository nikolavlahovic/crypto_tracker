import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};
function TableHeader({ children }: HeaderProps) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

export default TableHeader;
