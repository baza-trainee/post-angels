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
      render={({ field, fieldState }) => (
        <label className="flex flex-col gap-2 text-base font-medium leading-[160%] text-grey-80">
          <div className="flex flex-row items-center gap-3.5">
            <input className="hidden" type="checkbox" {...field} />
            <div>
              {field.value ? (
                <ICONS.CHECK_TRUE className="h-6 w-6" />
              ) : (
                <ICONS.CHECK_FALSE className="h-6 w-6" />
              )}
            </div>
            <p>{description}</p>
          </div>
          {fieldState.error && (
            <p className="text-sm font-normal text-error">{fieldState.error.message}</p>
          )}
        </label>
      )}
    ></Controller>
  );
};
