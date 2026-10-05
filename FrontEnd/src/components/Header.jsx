import React from 'react';
import { Store, Wifi, MessageCircle, Clock } from 'lucide-react';

export const Header = ({ onOpenWhatsApp, criticalCount = 0 }) => {
  return (
    <header className="bg-brand-red text-white p-4 shadow-md sticky top-0 z-30">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="bg-white text-brand-red p-1.5 rounded-lg shadow-sm font-black text-lg tracking-tighter">
            3A
          </div>
          <div>
            <h1 className="font-bold text-base leading-tight">Tiendas 3A</h1>
            <p className="text-xs text-red-100 flex items-center">
              <Store className="w-3 h-3 mr-1" />
              Sede Av. Tantamayo 1032
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Botón Simulador WhatsApp (US4) */}
          <button
            onClick={onOpenWhatsApp}
            title="Ver Alerta WhatsApp"
            className="relative bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full transition-all active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            {criticalCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-900 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {criticalCount}
              </span>
            )}
          </button>

          {/* Badge de estado en línea */}
          <div className="bg-red-800/60 px-2 py-1 rounded-full flex items-center text-[10px] text-red-200">
            <Wifi className="w-3 h-3 mr-1 text-emerald-400" />
            En línea
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-red-100/90 pt-1 border-t border-red-500/40">
        <span className="flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          Turno Operativo: Mañana (4-6 colab.)
        </span>
        <span className="bg-red-900/40 px-2 py-0.5 rounded font-mono">
          Kardex Activo
        </span>
      </div>
    </header>
  );
};
