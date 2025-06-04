import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface PrimaryButtonProps extends ButtonProps {}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  variant = 'default', // Shadcn's default variant uses primary color as per theme
  type = 'button',
  ...props
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      className={cn(
        'w-full',
        // The 'default' variant automatically uses 'bg-primary text-primary-foreground'
        // Hover, focus, and disabled states are handled by Shadcn Button's variant styles
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
