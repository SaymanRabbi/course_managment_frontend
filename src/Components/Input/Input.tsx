// TextInput.tsx
import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register?: UseFormRegister<any>;
  error?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, register, error, type = 'text', className, ...inputProps }) => {
  const baseClassName = `bg-[#131237] w-[100%] border-none py-[20px] px-[22px] rounded-[8px] block font-[700] mb-[15px] transition-all duration-300 focus:ring-2 focus:ring-[#b5acff] outline-none text-[#fff]`;
  return (
    <div>
      <input
        type={type}
        className={`${baseClassName} ${className}`}
        {...register}  
        {...inputProps}
        placeholder={label}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextInput;
