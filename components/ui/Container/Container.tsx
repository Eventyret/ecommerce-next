import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  el?: any;
}
const Container: FC<Props> = ({ children, el: Component = 'div' }) => {
  return <Component className="root">{children}</Component>;
};
export default Container;
