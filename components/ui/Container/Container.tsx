import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}
const Container: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
export default Container;
