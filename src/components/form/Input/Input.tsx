'use client';

import cn from 'classnames';
import { Controller, useFormContext } from 'react-hook-form';
import { InputProps } from './Input.props';
import ReactInputMask from 'react-input-mask';
import { Locale } from '@/i18n.config';

export const Input: React.FC<InputProps> = ({
  name,
  title,
  type,
  placeholder,
  className,
  lang = 'uk',
}) => {
  const { control } = useFormContext();

  const getPhoneMask = (lang: Locale) => {
    let countryCode;

    switch (lang) {
      case 'uk':
        countryCode = '+38 0';
        break;
      case 'pl':
        countryCode = '+48 9';
        break;
      case 'en':
      default:
        countryCode = '+';
        break;
    }

    let mask;

    if (lang === 'en') {
      mask = [`${countryCode}9 999 999 99 99`];
    } else {
      mask = [`${countryCode}99 999 99 99`];
    }

    return mask;
  };

  const mask = getPhoneMask(lang);
  return (
    <Controller
      defaultValue=""
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <label
          className={cn(
            'relative flex flex-col gap-2 font-eUkraine text-base font-medium leading-[160%] text-grey-80',
            className
          )}
        >
          {title}

          {name === 'phone' ? (
            <ReactInputMask
              mask={`${mask}`}
              maskChar=" "
              {...field}
              placeholder={placeholder}
              type={type}
              className={`rounded-2xl border border-grey-60 bg-transparent px-3.5 py-4 text-sm font-normal text-grey-80 outline-none focus:border-accent-hover focus:text-grey-100 ${
                fieldState.error
                  ? 'text-error placeholder:text-error'
                  : 'text-grey-60 placeholder:text-grey-60'
              }`}
            />
          ) : (
            <input
              className={`rounded-2xl border border-grey-60 bg-transparent px-3.5 py-4 text-sm font-normal text-grey-80 outline-none focus:border-accent-hover focus:text-grey-100 ${
                fieldState.error
                  ? 'text-error placeholder:text-error'
                  : 'text-grey-60 placeholder:text-grey-60'
              }`}
              placeholder={placeholder}
              type={type}
              {...field}
            />
          )}

          {fieldState.error && (
            <p className="absolute bottom-[-26px] font-eUkraine text-[10px] font-normal text-error md:text-[13px]">
              {fieldState.error.message}
            </p>
          )}
        </label>
      )}
    ></Controller>
  );
};
