import React from 'react';
import { X, CheckCheck, Send, BellRing } from 'lucide-react';

export const WhatsAppSimulator = ({ isOpen, onClose, criticalProduct, onQuickRestock }) => {
  if (!isOpen) return null;

  const product = criticalProduct || {
    nombre: 'Aceite Primor 900 ml',
    stockGondola: 4,
    consumoHora: 2.8,
    ubicacion: 'Pasillo 2 - Góndola A',
    tiempoQuiebre: '45 min'
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#EFEAE2] w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-slate-300">
        {/* Cabecera estilo WhatsApp */}
        <div className="bg-[#075E54] text-white p-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-sm shadow-inner">
              3A
            </div>
            <div>
              <h3 className="font-bold text-sm leading-tight">Bot Tiendas 3A — Alertas</h3>
              <p className="text-[11px] text-emerald-200">Cuenta comercial oficial • En línea</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cuerpo del Chat */}
        <div className="p-3.5 space-y-3 max-h-[70vh] overflow-y-auto">
          <div className="text-center">
            <span className="bg-white/80 text-slate-500 text-[10px] px-2.5 py-0.5 rounded-full font-medium shadow-2xs">
              HOY
            </span>
          </div>

          {/* Burbuja de Mensaje Push Automatizado (US4) */}
          <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm border border-slate-200/60 max-w-[92%] space-y-2 text-xs">
            <div className="flex items-center justify-between text-brand-red font-black text-[11px] pb-1 border-b border-red-100">
              <span className="flex items-center">
                <BellRing className="w-3.5 h-3.5 mr-1 text-brand-red" />
                ALERTA DE REPOSICIÓN PREVENTIVA
              </span>
              <span className="text-[9px] text-slate-400 font-mono">10:45 AM</span>
            </div>

            <div className="space-y-1 text-slate-700 leading-relaxed">
              <p><b>Sede:</b> Tiendas 3A — Av. Tantamayo 1032</p>
              <p><b>Producto en riesgo:</b> <span className="font-bold text-slate-900">{product.nombre}</span></p>
              <p><b>Stock en góndola:</b> <span className="text-red-600 font-extrabold">{product.stockGondola} unidades</span></p>
              <p><b>Consumo pico estimado:</b> ~{product.consumoHora} un./hora</p>
              <p><b>Quiebre proyectado:</b> <span className="bg-red-50 text-red-700 font-bold px-1 rounded">{product.tiempoQuiebre}</span></p>
              <p className="text-[11px] text-slate-500 italic mt-1">
                📍 Ubicación: {product.ubicacion}
              </p>
            </div>

            {/* Sugerencia de acción del modelo predictivo */}
            <div className="bg-emerald-50 text-emerald-900 p-2 rounded-xl text-[11px] font-medium border border-emerald-200">
              💡 <b>Sugerencia de IA:</b> Bajar 12 o 24 unidades del almacén interno para asegurar disponibilidad continua.
            </div>

            <div className="flex items-center justify-end text-[10px] text-slate-400 pt-0.5">
              <span>Entregado</span>
              <CheckCheck className="w-3.5 h-3.5 ml-1 text-emerald-500" />
            </div>
          </div>

          {/* Botones de acción integrados en la notificación */}
          <div className="space-y-1.5 pt-1">
            <button
              onClick={() => {
                onQuickRestock(product);
                onClose();
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold py-2.5 px-3 rounded-xl text-xs shadow-sm flex items-center justify-center transition-all"
            >
              <Send className="w-3.5 h-3.5 mr-1.5" />
              Bajar mercadería y Reponer (+24 un.)
            </button>
            <button
              onClick={onClose}
              className="w-full bg-white hover:bg-slate-50 text-slate-600 font-medium py-2 px-3 rounded-xl text-xs border border-slate-300 transition-colors"
            >
              Posponer alerta (15 min)
            </button>
          </div>
        </div>

        {/* Barra de entrada simulada */}
        <div className="bg-[#F0F2F5] p-2.5 border-t border-slate-200 flex items-center text-xs text-slate-400">
          <span className="italic">Notificación enviada vía WhatsApp Business Cloud API</span>
        </div>
      </div>
    </div>
  );
};
