type TableCellProps = {
  children: string | number;
  className?: string;
};
function TableCell({ children, className }: TableCellProps) {
  return <td className={className}>{children}</td>;
}

export default TableCell;
