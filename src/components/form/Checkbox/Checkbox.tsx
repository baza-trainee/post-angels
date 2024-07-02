'use client';

import cn from 'classnames';
import { Controller, useFormContext } from 'react-hook-form';

import { CheckboxProps } from './Checkbox.props';
import { ICONS } from '@/components/icons/icons.const';

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  description,
  variantFontWeight = 'normal',
  className,
  isDisabled,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <label
          className={cn(
            'relative flex flex-col gap-2 font-eUkraine text-base leading-[160%] text-grey-80',
            {
              ['pointer-events-none']: isDisabled,
              ['font-regular']: variantFontWeight == 'normal',
              ['font-medium']: variantFontWeight == 'medium',
            }
          )}
        >
          <div className={cn('flex flex-row gap-[21px]', className)}>
            <input className={`hidden `} type="checkbox" {...field} />
            <div>
              {field.value ? (
                <ICONS.CHECK_TRUE
                  className={cn(
                    'h-6 w-6 ',
                    isDisabled
                      ? 'fill-grey-60 stroke-grey-60'
                      : 'fill-accent-primary stroke-accent-primary'
                  )}
                />
              ) : (
                <ICONS.CHECK_FALSE
                  className={cn(
                    'h-6 w-6 ',
                    isDisabled ? ' first:stroke-grey-60' : 'stroke-accent-primary'
                  )}
                />
              )}
            </div>
            <p>{description}</p>
          </div>
          {fieldState.error && (
            <p className="absolute bottom-[-26px] pl-[45px] font-eUkraine text-[13px] font-normal text-error">
              {fieldState.error.message}
            </p>
          )}
        </label>
      )}
    ></Controller>
  );
};
