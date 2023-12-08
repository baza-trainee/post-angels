'use client';

import { SelectProps } from './Select.props';

export const Select: React.FC<SelectProps> = ({
  name,
  title,
  placeholder,
  register,
  errors,
}) => {
  return (
    <label className="flex flex-col gap-2 text-base font-medium leading-[160%] text-grey-80">
      {title}
      <textarea
        className=" h-[366px] resize-none rounded-2xl border border-grey-60 p-3.5 text-sm font-normal text-grey-60"
        placeholder={placeholder}
        {...register(name)}
      />
      {errors[name] && (
        <p className="text-sm font-normal text-[#E50E0E]">{errors[name].message || errors[name]}</p>
      )}
    </label>
  );
};
