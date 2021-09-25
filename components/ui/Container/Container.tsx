import { FC, ReactNode, ComponentType, HTMLAttributes } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}
const Container: FC<Props> = ({ children, el: Component = 'div' }) => {
  return <Component className="root">{children}</Component>;
};
export default Container;
