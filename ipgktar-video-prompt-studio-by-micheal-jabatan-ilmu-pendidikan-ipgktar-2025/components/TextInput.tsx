
import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ id, value, onChange, ...props }) => {
  return (
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 placeholder-slate-400 text-slate-100 transition duration-150 ease-in-out"
      {...props}
    />
  );
};

export default TextInput;
