
import React from 'react';
import { SelectOption } from '../types';

interface SelectInputProps<T extends string> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  value: T;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption<T>[];
}

const SelectInput = <T extends string,>({ id, value, onChange, options, ...props }: SelectInputProps<T>): React.ReactNode => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 text-slate-100 transition duration-150 ease-in-out appearance-none bg-no-repeat bg-right-3 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E')]"
      {...props}
    >
      {options.map(option => (
        <option key={option.value} value={option.value} className="bg-slate-700 text-slate-100">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
