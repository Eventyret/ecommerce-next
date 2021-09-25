import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode[];
}

const Marquee: FC<Props> = ({ children }) => {
  return <div className="">{children}</div>;
};
export default Marquee;
