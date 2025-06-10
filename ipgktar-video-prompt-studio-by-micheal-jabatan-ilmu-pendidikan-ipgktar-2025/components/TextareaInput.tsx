
import React from 'react';

interface TextareaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaInput: React.FC<TextareaInputProps> = ({ id, value, onChange, ...props }) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      rows={props.rows || 3}
      className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 placeholder-slate-400 text-slate-100 transition duration-150 ease-in-out"
      {...props}
    />
  );
};

export default TextareaInput;
