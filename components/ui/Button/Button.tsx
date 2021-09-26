import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import s from './Button.module.css';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}
const Button: FC<Props> = ({ children, className, ...reset }) => {
  return (
    <button type="button" className={cn(s.root, className)} {...reset}>
      {children}
    </button>
  );
};

export default Button;
