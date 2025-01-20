import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="animate-spin" size={48} />
    </div>
  );
};