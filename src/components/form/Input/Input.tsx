'use client';

import { InputProps } from './Input.props';

export const Input: React.FC<InputProps> = ({
  name,
  title,
  type,
  placeholder,
  register,
  errors,
}) => {
  return (
    <label className="flex flex-col gap-2 text-base font-medium leading-[160%] text-grey-80">
      {title}
      <input
        className="rounded-2xl border border-grey-60 p-3.5 text-sm font-normal text-grey-60"
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
      {errors[name] && <p className="text-sm font-normal text-[#E50E0E]">{errors[name].message || errors[name]}</p>}
    </label>
  );
};
