
import React from 'react';

interface FormFieldProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
  description?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, htmlFor, children, className, description }) => {
  return (
    <div className={`mb-6 ${className || ''}`}>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-sky-300 mb-1.5">
        {label}
      </label>
      {children}
      {description && <p className="mt-1.5 text-xs text-slate-400">{description}</p>}
    </div>
  );
};

export default FormField;
