import React from 'react';
import { cn } from '@/lib/utils';
import { Input, InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps extends Omit<InputProps, 'id'> { 
  id: string; 
  label: string;
  containerClassName?: string;
  labelClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled,
  containerClassName,
  labelClassName,
  className, // This className will be passed to the <Input /> component
  ...rest
}) => {
  return (
    <div className={cn('grid w-full items-center gap-1.5', containerClassName)}>
      <Label 
        htmlFor={id} 
        className={cn(
          'text-sm font-medium text-card-foreground leading-none',
          'peer-disabled:cursor-not-allowed peer-disabled:opacity-70', // Shadcn default label styles
          labelClassName
        )}
      >
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={cn('text-card-foreground placeholder:text-muted-foreground', className)}
        {...rest}
      />
    </div>
  );
};

export default InputField;
