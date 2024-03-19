'use client';

import { useId } from 'react';
import cn from 'classnames';
import Select from 'react-select';
import { Controller, useFormContext } from 'react-hook-form';

import { ICONS } from '@/components/icons/icons.const';
import { SelectInputProps } from './SelectInput.props';

export const SelectInput: React.FC<SelectInputProps> = ({ options, title, name, placeholder, className }) => {
  const { control, setValue } = useFormContext();

  const customStyles = {
    // @ts-ignore
    control: (provided, state) => ({
      ...provided,
      display: 'flex',
      justifyContent: 'center',
      border: '1px solid #B1B0B0',
      borderRadius: '14px',
      paddingRight: '6px',
      paddingLeft: '6px',
      paddingTop: '8px',
      paddingBottom: '8px',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '160%',
      outline: 'none',
      backgroundColor: 'transparent',
      '&:focus': {
        borderColor: '#1A48ED',
      },
    }),
    // @ts-ignore
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
    }),
    // @ts-ignore
    placeholder: provided => ({
      ...provided,
      color: '#B1B0B0',
      padding: '0',
      margin: '0',
    }),
    // @ts-ignore
    dropdownIndicator: provided => ({
      ...provided,
      svg: {
        transition: 'fill 0.2s ease-in-out',
      },
    }),
    // @ts-ignore
    menu: provided => ({
      ...provided,
      display: 'flex',
      gap: '16px',
      marginTop: '19px',

      border: 'none',
      borderRadius: '16px',
      background: '#FFF',
      padding: '32px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    }),
    // @ts-ignore
    option: (provided, state) => ({
      ...provided,
      margin: '0',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '160%',
      color: state.isFocused ? '#1A48ED' : '#43444A',
      backgroundColor: state.isFocused ? '#FFF' : '#FFF',
      '&:active': {
        backgroundColor: '#FFF',
      },
    }),
  };

  const errorStyles = {
    // @ts-ignore
    placeholder: provided => ({
      ...provided,
      color: '#E50E0E',
    }),
  };
  // @ts-ignore
  const DropdownIndicator = props => {
    return (
      <div className="h-6 w-6" {...props.innerProps}>
        {props.selectProps.menuIsOpen ? <ICONS.ARROW_UP /> : <ICONS.ARROW_DOWN />}
      </div>
    );
  };
  const id = useId();

  return (
    <Controller
      defaultValue={null}
      name={name}
      control={control}
      // @ts-ignore
      isClearable
      // @ts-ignore
      render={({ field, fieldState }) => (
        <label className={cn("relative flex flex-col gap-2 text-base font-medium leading-[160%] text-grey-80", className)}>
          {title}
          <Select
            id={id}
            name={name}
            // @ts-ignore
            options={options}
            placeholder={placeholder}
            styles={fieldState.error ? { ...customStyles, ...errorStyles } : customStyles}
            components={{ DropdownIndicator }}
            // @ts-ignore
            onChange={selectedOption => {
              setValue(name, selectedOption);
              field.onChange(selectedOption);
            }}
          />
          {fieldState.error && (
            <p className="absolute bottom-[-26px] text-[13px] font-normal text-error">
              {fieldState.error.message}
            </p>
          )}
        </label>
      )}
    ></Controller>
  );
};
