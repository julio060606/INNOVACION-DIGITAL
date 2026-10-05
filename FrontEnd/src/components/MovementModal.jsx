import React, { useState, useEffect } from 'react';
import { X, ArrowDownRight, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const MovementModal = ({ isOpen, onClose, products, selectedProduct, onConfirmMovement }) => {
  const [productoId, setProductoId] = useState('');
  const [tipoMovimiento, setTipoMovimiento] = useState('ENTRADA'); // 'ENTRADA' o 'SALIDA'
  const [cantidad, setCantidad] = useState(12);
  const [motivo, setMotivo] = useState('REPOSICION');

  useEffect(() => {
    if (selectedProduct) {
      setProductoId(selectedProduct.id);
    } else if (products.length > 0 && !productoId) {
      setProductoId(products[0].id);
    }
  }, [selectedProduct, products]);

  if (!isOpen) return null;

  const currentProd = products.find(p => p.id === Number(productoId));

  const handleQuickAdd = (units) => {
    setCantidad(units);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentProd || cantidad <= 0) return;

    onConfirmMovement({
      productoId: currentProd.id,
      productoNombre: currentProd.nombre,
      tipo: tipoMovimiento,
      cantidad: Number(cantidad),
      motivo: motivo === 'REPOSICION' ? 'Reposición góndola' : motivo
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl p-5 shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Encabezado */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base font-bold text-slate-900">Registrar Movimiento</h2>
            <p className="text-xs text-slate-500">Tiendas 3A — Sede Tantamayo (Kardex Rápido)</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-3">
          {/* Campo 1: Selector de Producto */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              1. Producto (SKU):
            </label>
            <select
              value={productoId}
              onChange={(e) => setProductoId(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white"
            >
              {products.map(p => (
                <option key={p.id} value={p.id}>
                  {p.nombre} (Stock actual: {p.stockGondola} un.)
                </option>
              ))}
            </select>
          </div>

          {/* Campo 2: Toggle Tipo de Movimiento */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              2. Tipo de Movimiento:
            </label>
            <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => { setTipoMovimiento('ENTRADA'); setMotivo('REPOSICION'); }}
                className={`flex items-center justify-center py-2.5 px-3 rounded-lg font-bold text-xs transition-all ${
                  tipoMovimiento === 'ENTRADA'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ArrowDownRight className="w-4 h-4 mr-1.5" />
                ENTRADA / REPOSICIÓN
              </button>

              <button
                type="button"
                onClick={() => { setTipoMovimiento('SALIDA'); setMotivo('VENTA'); }}
                className={`flex items-center justify-center py-2.5 px-3 rounded-lg font-bold text-xs transition-all ${
                  tipoMovimiento === 'SALIDA'
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ArrowUpRight className="w-4 h-4 mr-1.5" />
                SALIDA / VENTA
              </button>
            </div>
          </div>

          {/* Campo 3: Cantidad y Pulsadores Rápidos */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              3. Cantidad de unidades:
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="999"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
                className="w-full text-center text-2xl font-black text-slate-900 bg-slate-50 border-2 border-slate-300 rounded-xl py-2 focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white"
                required
              />
              <span className="absolute right-4 top-3 text-xs text-slate-400 font-bold uppercase">
                unidades
              </span>
            </div>

            {/* Pulsadores de bultos estándar */}
            <div className="grid grid-cols-4 gap-1.5 mt-2">
              {[6, 12, 24, 48].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleQuickAdd(num)}
                  className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                    cantidad === num
                      ? 'bg-slate-800 text-white border-slate-800'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  +{num} {num === 24 ? '(Caja)' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Motivo contextual si es Salida (US5) */}
          {tipoMovimiento === 'SALIDA' && (
            <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs">
              <label className="block font-bold text-amber-900 mb-1">
                Motivo de la Salida (Auditoría Kardex):
              </label>
              <select
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="w-full bg-white border border-amber-300 rounded-lg p-1.5 text-xs text-amber-950 font-medium"
              >
                <option value="VENTA">Venta regular en turno</option>
                <option value="MERMA_VENCIMIENTO">Merma: Producto vencido</option>
                <option value="MERMA_ROTURA">Merma: Rotura o daño en góndola</option>
                <option value="AJUSTE_CONTEO">Ajuste de inventario físico</option>
              </select>
            </div>
          )}

          {/* Botón de Confirmación Principal */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white py-3.5 px-4 rounded-xl font-black text-sm uppercase tracking-wider flex items-center justify-center shadow-lg transition-all"
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              CONFIRMAR EN KARDEX
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-1.5">
              Tiempo estimado de registro: &lt; 30 segundos
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
