'use client';

import { motion } from 'framer-motion';

export default function StatsCard({ title, value, icon: Icon, trend, trendValue, color = "#00c2ff" }) {
  return (
    <motion.div 
      whileHover="hover"
      initial="initial"
      className="card flex flex-col gap-4 relative overflow-hidden group"
      style={{
        background: `linear-gradient(135deg, var(--surface) 0%, rgba(16, 20, 29, 0.8) 100%), radial-gradient(circle at top right, ${color}10 0%, transparent 60%)`
      }}
    >
      <div className="flex items-center justify-between">
        <motion.div 
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1, rotate: 5 }
          }}
          className="w-14 h-14 rounded-xl flex items-center justify-center border shadow-lg"
          style={{ backgroundColor: `${color}15`, borderColor: `${color}40` }}
        >
          <Icon size={28} style={{ color: color }} className="drop-shadow-[0_0_8px_currentColor]" />
        </motion.div>
        {trend && (
          <div className="text-xs font-bold px-2 py-1 rounded-lg" style={{ color: trend === 'up' ? 'var(--active)' : 'var(--critical)', backgroundColor: trend === 'up' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)' }}>
            {trend === 'up' ? '↑' : '↓'} {trendValue}%
          </div>
        )}
      </div>

      <div>
        <h3 className="text-slate-400 text-xs font-bold uppercase mb-1">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
      </div>

      <div className="w-full h-1 rounded-full mt-2" style={{ backgroundColor: 'var(--white-5)' }}>
        <div 
          className="h-full rounded-full"
          style={{ backgroundColor: color, width: '70%' }}
        />
      </div>
    </motion.div>
  );
}
