'use client';

import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: '00:00', value: 30 },
  { name: '04:00', value: 45 },
  { name: '08:00', value: 25 },
  { name: '12:00', value: 60 },
  { name: '16:00', value: 85 },
  { name: '20:00', value: 65 },
  { name: '23:59', value: 92 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#10141d] border border-cyan-30/50 p-3 rounded-xl shadow-[0_4px_20px_rgba(0,194,255,0.15)] backdrop-blur-md">
        <p className="text-xs text-slate-400 font-bold mb-1">{label}</p>
        <p className="text-sm font-black text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan" style={{ backgroundColor: 'var(--primary)' }} />
          {payload[0].value} <span className="text-xs text-slate-400 font-medium">units</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function AnalyticsChart() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card flex flex-col"
      style={{ height: '400px' }}
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold mb-1">Performance</h2>
          <p className="text-sm text-slate-400">Live system metrics</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg text-xs font-bold bg-cyan-10 text-cyan border border-cyan-30">Live</button>
          <button className="px-4 py-2 rounded-lg text-xs font-bold text-slate-400">24H</button>
        </div>
      </div>

      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00c2ff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00c2ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#475569', fontSize: 10 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#475569', fontSize: 10 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#00c2ff" 
              strokeWidth={3}
              fill="url(#colorValue)" 
              activeDot={{ r: 6, fill: '#0b0e14', stroke: '#00c2ff', strokeWidth: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
