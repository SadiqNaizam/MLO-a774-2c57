import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface LinkTextProps extends Omit<ButtonProps, 'variant' | 'size'> {
  // children, onClick, className are part of ButtonProps
  // href can be passed via ...props if needed for custom handling, but Button doesn't use it directly
}

const LinkText: React.FC<LinkTextProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <Button
      variant="link"
      // size="sm" // Using text-sm directly for finer control if needed, default link size is often fine
      className={cn(
        'text-primary font-medium h-auto p-0 text-sm', // Shadcn link variant is primary, ensuring font-weight and size
        // Shadcn Button with variant="link" handles text color, hover (underline), and focus states
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default LinkText;
