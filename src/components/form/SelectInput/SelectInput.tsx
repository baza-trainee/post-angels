'use client';

import { useId } from 'react';
import Select from 'react-select';
import { Controller, useFormContext } from 'react-hook-form';

import { ICONS } from '@/components/icons/icons.const';
import { SelectInputProps } from './SelectInput.props';

export const SelectInput: React.FC<SelectInputProps> = ({ options, title, name, placeholder }) => {
  const { control, setValue } = useFormContext();

  const customStyles = {
    // @ts-ignore
    control: (provided, state) => ({
      ...provided,
      display: 'flex',
      justifyContent: 'center',
      border: '1px solid #B1B0B0',
      borderRadius: '16px',
      paddingRight: '14px',
      paddingLeft: '14px',
      paddingTop: '16px',
      paddingBottom: '16px',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '160%',
      marginBottom: state.selectProps.menuIsOpen ? '19px' : '0',
      outline: 'none',
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
      margin: '0',
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
      isClearable
      // @ts-ignore
      render={({ field, fieldState }) => (
        <label className="flex flex-col gap-2 text-base font-medium leading-[160%] text-grey-80">
          {title}
          <Select
            id={id}
            name={name}
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
            <p className="text-sm font-normal text-[#E50E0E]">{fieldState.error.message}</p>
          )}
        </label>
      )}
    ></Controller>
  );
};
