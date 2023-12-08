'use client';

import { CheckboxProps } from './Checkbox.props';
import { ICONS } from '@/components/icons/icons.const';

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  discription,
  placeholder,
  register,
  errors,
}) => {
  return (
    <>
      <input className="hidden" />
      {true ? <ICONS.CHECK_FALSE className="hidden h-6 w-6" /> : <ICONS.CHECK_TRUE />}
      <label className="flex flex-col gap-2 text-base font-medium leading-[160%] text-grey-80">
        {discription}
      </label>
    </>
  );
};
