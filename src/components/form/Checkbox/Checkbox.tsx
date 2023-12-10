'use client';
import { Controller, useFormContext } from 'react-hook-form';

import { CheckboxProps } from './Checkbox.props';
import { ICONS } from '@/components/icons/icons.const';

export const Checkbox: React.FC<CheckboxProps> = ({ name, description }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label className="flex gap-3.5 text-base font-medium leading-[160%] text-grey-80">
          <input className="hidden" type="checkbox" {...field} />
          {field.value ? (
            <ICONS.CHECK_TRUE className="h-6 w-6" />
          ) : (
            <ICONS.CHECK_FALSE className="h-6 w-6" />
          )}
          <p>{description}</p>
        </label>
      )}
    ></Controller>
  );
};
