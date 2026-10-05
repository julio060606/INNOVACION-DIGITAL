import React, { useState } from 'react';
import { Header } from './components/Header';
import { GondolaTrafficLight } from './components/GondolaTrafficLight';
import { MovementModal } from './components/MovementModal';
import { WhatsAppSimulator } from './components/WhatsAppSimulator';
import { ToastNotification } from './components/ToastNotification';
import { INITIAL_PRODUCTS, INITIAL_MOVEMENTS_LOG } from './data/mockData';
import { Plus, Smartphone, Monitor, ClipboardList, Layers, MessageSquare } from 'lucide-react';

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [movements, setMovements] = useState(INITIAL_MOVEMENTS_LOG);
  const [activeTab, setActiveTab] = useState('GONDOLAS'); // 'GONDOLAS' | 'KARDEX'

  // Modales
  const [isMovementModalOpen, setIsMovementModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  // Modo de visualización en desktop (Marco de teléfono vs Pantalla completa)
  const [isPhoneFrame, setIsPhoneFrame] = useState(true);

  // Toast
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Manejo de Registro de Movimiento en Kardex
  const handleConfirmMovement = (data) => {
    setProducts(prevProducts =>
      prevProducts.map(p => {
        if (p.id === data.productoId) {
          const delta = data.tipo === 'ENTRADA' ? data.cantidad : -data.cantidad;
          const newGondola = Math.max(0, p.stockGondola + delta);

          // Si es entrada por reposición, descuenta de trastienda
          let newAlmacen = p.stockAlmacen;
          if (data.tipo === 'ENTRADA') {
            newAlmacen = Math.max(0, p.stockAlmacen - data.cantidad);
          }

          // Recálculo dinámico de estado
          let newEstado = 'OPTIMO';
          let newTiempo = '> 10 hrs';
          if (newGondola <= 6) {
            newEstado = 'CRITICO';
            newTiempo = '45 min (Riesgo)';
          } else if (newGondola <= 16) {
            newEstado = 'ALERTA';
            newTiempo = '3.5 hrs';
          }

          return {
            ...p,
            stockGondola: newGondola,
            stockAlmacen: newAlmacen,
            estado: newEstado,
            tiempoQuiebre: newTiempo
          };
        }
        return p;
      })
    );

    // Registrar en kardex
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newLog = {
      id: Date.now(),
      producto: data.productoNombre,
      tipo: data.tipo === 'ENTRADA' ? 'ENTRADA_REPOSICION' : 'SALIDA_VENTA',
      cantidad: data.cantidad,
      hora: timeStr,
      usuario: 'Operario Turno Actual',
      motivo: data.motivo
    };
    setMovements(prev => [newLog, ...prev]);

    showToast(
      `✓ Kardex actualizado: ${data.productoNombre} (${data.tipo === 'ENTRADA' ? '+' : '-'}${data.cantidad} un.)`,
      'success'
    );
  };

  // Reposición rápida disparada desde la alerta de WhatsApp
  const handleQuickRestockFromWhatsApp = (product) => {
    handleConfirmMovement({
      productoId: product.id,
      productoNombre: product.nombre,
      tipo: 'ENTRADA',
      cantidad: 24,
      motivo: 'Reposición preventiva disparada por Alerta WhatsApp'
    });
  };

  const handleOpenMovementModal = (product = null) => {
    setSelectedProduct(product);
    setIsMovementModalOpen(true);
  };

  const criticalProducts = products.filter(p => p.estado === 'CRITICO');

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-start sm:p-4 text-slate-800">
      {/* Toast Notification */}
      {toast && <ToastNotification message={toast.message} type={toast.type} />}

      {/* Barra superior de control para evaluación y sustentación (Desktop) */}
      <div className="hidden sm:flex w-full max-w-5xl items-center justify-between bg-slate-800/90 text-slate-200 px-5 py-2.5 rounded-2xl mb-4 border border-slate-700/60 shadow-lg text-xs">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold text-white tracking-wide">
            PROTOTIPO NAVEGABLE APF2:
          </span>
          <span className="text-slate-300">
            Sistema de Inventario Tiendas 3A — Sede Tantamayo
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-slate-400">Modo de visualización:</span>
          <button
            onClick={() => setIsPhoneFrame(true)}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center transition-all ${
              isPhoneFrame
                ? 'bg-brand-red text-white shadow-sm'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 mr-1.5" />
            Marco Celular (PWA)
          </button>
          <button
            onClick={() => setIsPhoneFrame(false)}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center transition-all ${
              !isPhoneFrame
                ? 'bg-brand-red text-white shadow-sm'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            <Monitor className="w-3.5 h-3.5 mr-1.5" />
            Expandido
          </button>
        </div>
      </div>

      {/* Contenedor Principal de la Aplicación */}
      <div
        className={`w-full transition-all duration-300 ${
          isPhoneFrame
            ? 'max-w-md bg-slate-50 sm:rounded-[36px] sm:border-[8px] sm:border-slate-800 sm:shadow-2xl overflow-hidden relative min-h-[92vh] sm:min-h-[840px] flex flex-col'
            : 'max-w-4xl bg-slate-50 rounded-2xl shadow-2xl overflow-hidden min-h-[90vh] flex flex-col'
        }`}
      >
        {/* Notch / Speaker simulado en marco de smartphone */}
        {isPhoneFrame && (
          <div className="hidden sm:flex items-center justify-center pt-2 pb-1 bg-brand-red">
            <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
              <div className="w-10 h-1 rounded-full bg-slate-800" />
            </div>
          </div>
        )}

        {/* Cabecera */}
        <Header
          onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
          criticalCount={criticalProducts.length}
        />

        {/* Cuerpo Principal según pestaña activa */}
        <main className="flex-1 overflow-y-auto">
          {activeTab === 'GONDOLAS' ? (
            <GondolaTrafficLight
              products={products}
              onSelectProductForMovement={handleOpenMovementModal}
            />
          ) : (
            <div className="p-4 space-y-3 pb-24">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-800 flex items-center">
                  <ClipboardList className="w-4 h-4 mr-1.5 text-brand-red" />
                  Kardex en Tiempo Real (Movimientos)
                </h2>
                <span className="text-[11px] bg-slate-200 px-2 py-0.5 rounded-full font-bold text-slate-700">
                  {movements.length} registros
                </span>
              </div>

              <div className="space-y-2">
                {movements.map(m => (
                  <div
                    key={m.id}
                    className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-xs flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-slate-900">{m.producto}</div>
                      <div className="text-[11px] text-slate-500 flex items-center space-x-2 mt-0.5">
                        <span className="font-mono text-slate-400">{m.hora}</span>
                        <span>•</span>
                        <span>{m.motivo}</span>
                      </div>
                    </div>
                    <div className={`font-black text-sm px-2.5 py-1 rounded-lg ${
                      m.tipo === 'ENTRADA_REPOSICION'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {m.tipo === 'ENTRADA_REPOSICION' ? '+' : '-'}{m.cantidad} un.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Botón Flotante Permanente (FAB) para Registro Rápido */}
        <div className="absolute bottom-16 right-4 z-20">
          <button
            onClick={() => handleOpenMovementModal(null)}
            className="bg-brand-red hover:bg-red-700 text-white font-extrabold px-4 py-3 rounded-full shadow-xl flex items-center space-x-2 active:scale-95 transition-all ring-4 ring-red-500/20"
          >
            <Plus className="w-5 h-5" />
            <span className="text-xs uppercase tracking-wider">Registrar Movimiento</span>
          </button>
        </div>

        {/* Barra de Navegación Inferior (PWA Tab Bar) */}
        <nav className="bg-white border-t border-slate-200 p-2 flex items-center justify-around sticky bottom-0 z-30">
          <button
            onClick={() => setActiveTab('GONDOLAS')}
            className={`flex flex-col items-center py-1 px-4 rounded-xl transition-colors ${
              activeTab === 'GONDOLAS'
                ? 'text-brand-red font-bold'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Layers className="w-5 h-5 mb-0.5" />
            <span className="text-[10px]">Semáforo</span>
          </button>

          <button
            onClick={() => setActiveTab('KARDEX')}
            className={`flex flex-col items-center py-1 px-4 rounded-xl transition-colors ${
              activeTab === 'KARDEX'
                ? 'text-brand-red font-bold'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <ClipboardList className="w-5 h-5 mb-0.5" />
            <span className="text-[10px]">Kardex</span>
          </button>

          <button
            onClick={() => setIsWhatsAppOpen(true)}
            className="flex flex-col items-center py-1 px-4 rounded-xl text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <MessageSquare className="w-5 h-5 mb-0.5" />
            <span className="text-[10px]">Alerta WA</span>
          </button>
        </nav>
      </div>

      {/* Modal de Registro de Movimiento (US1) */}
      <MovementModal
        isOpen={isMovementModalOpen}
        onClose={() => setIsMovementModalOpen(false)}
        products={products}
        selectedProduct={selectedProduct}
        onConfirmMovement={handleConfirmMovement}
      />

      {/* Simulador de Alerta de WhatsApp (US4) */}
      <WhatsAppSimulator
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        criticalProduct={criticalProducts[0] || products[0]}
        onQuickRestock={handleQuickRestockFromWhatsApp}
      />
    </div>
  );
}
