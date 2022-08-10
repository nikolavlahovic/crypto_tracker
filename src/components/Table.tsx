import { ReactNode } from "react";
import TableHeader from "./TableHeader";

type TableProps = {
  children: ReactNode;
  headers: ReactNode[];
};
function Table({ children, headers }: TableProps) {
  return (
    <table className="table-wrapper">
      <TableHeader>{headers}</TableHeader>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;
