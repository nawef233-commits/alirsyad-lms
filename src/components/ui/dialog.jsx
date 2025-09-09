import React from 'react';

const Dialog = ({ open, onOpenChange, children }) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);
  
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={() => onOpenChange(false)}
      />
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};

const DialogTrigger = ({ asChild, children, ...props }) => {
  if (asChild) {
    return React.cloneElement(children, props);
  }
  return <button {...props}>{children}</button>;
};

const DialogContent = ({ className = '', children, ...props }) => (
  <div 
    className={`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg ${className}`}
    {...props}
  >
    {children}
  </div>
);

const DialogHeader = ({ className = '', ...props }) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
);

const DialogTitle = ({ className = '', ...props }) => (
  <h2 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props} />
);

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle };