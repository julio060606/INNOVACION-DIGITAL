import React, { useState } from 'react';
import { AlertTriangle, Clock, Layers, Package, TrendingUp, PlusCircle } from 'lucide-react';

export const GondolaTrafficLight = ({ products, onSelectProductForMovement }) => {
  const [filter, setFilter] = useState('TODOS');

  const criticals = products.filter(p => p.estado === 'CRITICO');
  const alerts = products.filter(p => p.estado === 'ALERTA');
  const optimals = products.filter(p => p.estado === 'OPTIMO');

  const filteredProducts = products.filter(p => {
    if (filter === 'CRITICO') return p.estado === 'CRITICO';
    if (filter === 'ALERTA') return p.estado === 'ALERTA';
    if (filter === 'OPTIMO') return p.estado === 'OPTIMO';
    return true;
  });

  return (
    <div className="space-y-4 pb-24">
      {/* Tarjetas Resumen de Criticidad (Semáforo Tri-color) */}
      <div className="grid grid-cols-3 gap-2 px-4 pt-3">
        <button
          onClick={() => setFilter(filter === 'CRITICO' ? 'TODOS' : 'CRITICO')}
          className={`p-2.5 rounded-xl border text-center transition-all ${
            filter === 'CRITICO'
              ? 'bg-red-50 border-red-500 shadow-sm ring-2 ring-red-400'
              : 'bg-white border-red-200 hover:bg-red-50/50'
          }`}
        >
          <div className="text-xl font-extrabold text-red-600">{criticals.length}</div>
          <div className="text-[10px] font-bold tracking-wider text-red-700 uppercase">Críticos</div>
          <div className="text-[9px] text-red-500 font-medium">Reponer ya</div>
        </button>

        <button
          onClick={() => setFilter(filter === 'ALERTA' ? 'TODOS' : 'ALERTA')}
          className={`p-2.5 rounded-xl border text-center transition-all ${
            filter === 'ALERTA'
              ? 'bg-amber-50 border-amber-500 shadow-sm ring-2 ring-amber-400'
              : 'bg-white border-amber-200 hover:bg-amber-50/50'
          }`}
        >
          <div className="text-xl font-extrabold text-amber-600">{alerts.length}</div>
          <div className="text-[10px] font-bold tracking-wider text-amber-700 uppercase">Alerta</div>
          <div className="text-[9px] text-amber-600 font-medium">&lt; 4 horas</div>
        </button>

        <button
          onClick={() => setFilter(filter === 'OPTIMO' ? 'TODOS' : 'OPTIMO')}
          className={`p-2.5 rounded-xl border text-center transition-all ${
            filter === 'OPTIMO'
              ? 'bg-emerald-50 border-emerald-500 shadow-sm ring-2 ring-emerald-400'
              : 'bg-white border-emerald-200 hover:bg-emerald-50/50'
          }`}
        >
          <div className="text-xl font-extrabold text-emerald-600">{optimals.length}</div>
          <div className="text-[10px] font-bold tracking-wider text-emerald-700 uppercase">Óptimos</div>
          <div className="text-[9px] text-emerald-600 font-medium">Cubierto</div>
        </button>
      </div>

      {/* Título de sección y selector rápido */}
      <div className="px-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-slate-800 flex items-center">
            <Layers className="w-4 h-4 mr-1.5 text-brand-red" />
            Góndolas Priorizadas ({filteredProducts.length})
          </h2>
          <p className="text-[11px] text-slate-500">Monitoreo de piso de venta vs. almacén</p>
        </div>
        {filter !== 'TODOS' && (
          <button
            onClick={() => setFilter('TODOS')}
            className="text-[11px] text-brand-red font-semibold underline"
          >
            Ver todos
          </button>
        )}
      </div>

      {/* Lista de Tarjetas de Productos */}
      <div className="px-4 space-y-3">
        {filteredProducts.map(product => {
          const isCritical = product.estado === 'CRITICO';
          const isAlert = product.estado === 'ALERTA';

          return (
            <div
              key={product.id}
              className={`bg-white rounded-2xl p-3.5 shadow-sm border transition-all ${
                isCritical
                  ? 'border-red-300 ring-1 ring-red-200'
                  : isAlert
                  ? 'border-amber-300 ring-1 ring-amber-100'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Encabezado del producto */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="text-2xl p-1 bg-slate-50 rounded-lg">{product.imagenIcon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {product.nombre}
                    </h3>
                    <p className="text-[11px] text-slate-500 flex items-center mt-0.5">
                      <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[10px] font-medium mr-1.5">
                        Rotación {product.rotacionAbc}
                      </span>
                      {product.ubicacion}
                    </p>
                  </div>
                </div>

                {/* Badge de Semáforo */}
                <div>
                  {isCritical && (
                    <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center shadow-sm animate-pulse">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Crítico: {product.stockGondola} un.
                    </span>
                  )}
                  {isAlert && (
                    <span className="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center shadow-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      Alerta: {product.stockGondola} un.
                    </span>
                  )}
                  {!isCritical && !isAlert && (
                    <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center shadow-sm">
                      Óptimo: {product.stockGondola} un.
                    </span>
                  )}
                </div>
              </div>

              {/* Visibilidad Dual: Góndola vs Almacén (Ajuste del Testeo) */}
              <div className="grid grid-cols-2 gap-2 mt-3 p-2 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="bg-white p-1 rounded shadow-2xs text-slate-700">🛒</div>
                  <div>
                    <div className="text-[10px] text-slate-500">En Góndola</div>
                    <div className="font-extrabold text-slate-800 text-sm">
                      {product.stockGondola} <span className="text-[10px] font-normal text-slate-500">un.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 border-l border-slate-200 pl-2">
                  <div className="bg-white p-1 rounded shadow-2xs text-slate-700">📦</div>
                  <div>
                    <div className="text-[10px] text-slate-500">En Trastienda</div>
                    <div className="font-extrabold text-slate-800 text-sm">
                      {product.stockAlmacen} <span className="text-[10px] font-normal text-slate-500">un.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pie de tarjeta con proyección horaria y botón rápido de reposición */}
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                <div className="text-slate-600 flex items-center">
                  <TrendingUp className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  <span>Consumo: <b>{product.consumoHora} un/h</b></span>
                  <span className="mx-1.5 text-slate-300">•</span>
                  <span className={isCritical ? 'text-red-600 font-semibold' : 'text-slate-500'}>
                    Quiebre: {product.tiempoQuiebre}
                  </span>
                </div>

                <button
                  onClick={() => onSelectProductForMovement(product)}
                  className="bg-brand-red/10 hover:bg-brand-red hover:text-white text-brand-red font-bold px-2.5 py-1 rounded-lg transition-colors flex items-center text-xs"
                >
                  <PlusCircle className="w-3.5 h-3.5 mr-1" />
                  Reponer
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
