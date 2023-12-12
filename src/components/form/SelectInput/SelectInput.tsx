'use client';

import Select from 'react-select';
import { ICONS } from '@/components/icons/icons.const';
import { SelectProps } from './SelectInput.props';

export const SelectInput: React.FC<SelectProps> = ({
  options,
  title,
  // placeholder
  // name,
  // title,
  // placeholder,
  // register,
  // errors,
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #B1B0B0', // border color
      borderRadius: '16px',
      paddingRight: '14px',
      paddingLeft: '14px',
      paddingTop: '16px',
      paddingBottom: '16px',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '160%',
      // color: '#B1B0B0',
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
    }),
    placeholder: provided => ({
      ...provided,
      color: '#B1B0B0',
    }),
    dropdownIndicator: provided => ({
      ...provided,
      svg: {
        // fill: state.isFocused ? 'blue' : 'black', // колір іконки відповідно до стану фокусу
        transition: 'fill 0.2s ease-in-out', // плавний перехід
      },
    }),
    // option: (provided, state) => ({
    //   ...provided,
    //   borderBottom: '1px solid #ced4da', // border between options
    //   color: state.isSelected ? '#fff' : '#495057', // text color for selected and non-selected options
    //   background: state.isSelected ? '#007bff' : state.isFocused ? '#e2f0ff' : '#fff', // background color for selected, focused, and non-selected options
    //   ':hover': {
    //     background: state.isSelected ? '#007bff' : '#e2f0ff', // background color on hover
    //   },
    // }),
  };

  const DropdownIndicator = props => {
    return (
      <div {...props.innerProps}>
        {props.selectProps.menuIsOpen ? (
          <ICONS.ARROW_UP width="20" height="20" />
        ) : (
          <ICONS.ARROW_DOWN width="20" height="20" />
        )}
      </div>
    );
  };

  return (
    <label className="flex flex-col gap-2 text-base font-medium leading-[160%] text-grey-80">
      {title}
      <Select
        options={options}
        placeholder="Оберіть відповідне"
        styles={customStyles}
        components={{ DropdownIndicator }}
      />
    </label>
  );
};
