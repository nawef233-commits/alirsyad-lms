import React from 'react';

const Badge = React.forwardRef(({ className = '', variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-blue-600 text-white',
    secondary: 'bg-gray-100 text-gray-900',
    destructive: 'bg-red-600 text-white',
    outline: 'border border-gray-300 text-gray-900'
  };
  
  const variantStyles = variants[variant] || variants.default;
  
  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantStyles} ${className}`}
      {...props}
    />
  );
});
Badge.displayName = 'Badge';

export { Badge };