import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const ToastNotification = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top duration-300">
      <div className={`px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-2 text-xs font-bold text-white border ${
        type === 'success'
          ? 'bg-emerald-600 border-emerald-500 shadow-emerald-600/20'
          : 'bg-red-600 border-red-500 shadow-red-600/20'
      }`}>
        {type === 'success' ? (
          <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
        ) : (
          <AlertCircle className="w-4 h-4 text-white shrink-0" />
        )}
        <span>{message}</span>
      </div>
    </div>
  );
};
