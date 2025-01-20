import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center justify-center p-4 bg-red-100 text-red-700 rounded-lg">
      <AlertCircle className="mr-2" />
      {message}
    </div>
  );
};