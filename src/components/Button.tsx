import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className = "", ...rest }: Props) => {
  return (
    <button className={"btn " + className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
