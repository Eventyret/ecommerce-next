import { FC } from 'react';
import s from './Swatch.module.css';
import { Check } from '@components/icons';

interface Props {
  color?: string;
  label?: string;
  variant?: 'size' | 'color' | string;
}
const Swatch: FC<Props> = ({ color, label, variant }) => {
  label = label?.toLowerCase();
  variant = variant?.toLowerCase();
  return (
    <button className={s.root} style={color ? { backgroundColor: color } : {}}>
      <span>
        <Check />
      </span>
      {variant === 'size' ? label : null}
    </button>
  );
};
export default Swatch;
