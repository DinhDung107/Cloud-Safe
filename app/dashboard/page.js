'use client';

import { motion } from 'framer-motion';
import { Laptop, Activity, Clock, ShieldCheck, Zap } from 'lucide-react';
import StatsCard from '@/components/StatsCard';
import AnalyticsChart from '@/components/AnalyticsChart';
import AlertsTable from '@/components/AlertsTable';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black mb-2">Command Center</h1>
          <div className="flex items-center gap-2 text-slate-400">
            <p className="text-sm">System status is </p>
            <span className="px-2 py-1 rounded-full bg-cyan-10 text-cyan text-xs font-bold border">
               Optimal
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="rounded-xl border font-bold hover:bg-white-5 transition-colors" style={{ padding: '12px 24px', fontSize: '14px', borderColor: 'rgba(255,255,255,0.15)' }}>Report</button>
          <button className="rounded-xl font-bold shadow-[0_4px_20px_rgba(0,194,255,0.3)] hover:scale-105 transition-transform" style={{ padding: '12px 24px', backgroundColor: 'var(--primary)', color: '#0b0e14', fontSize: '14px' }}>Add Device</button>
        </div>
      </div>

      <div className="grid lg-grid-cols-4 md-grid-cols-2 gap-6">
        <StatsCard title="Devices" value="1,248" icon={Laptop} trend="up" trendValue={12} color="#00c2ff" />
        <StatsCard title="Online" value="1,112" icon={Activity} trend="up" trendValue={2} color="#10b981" />
        <StatsCard title="Uptime" value="99.9%" icon={Clock} color="#8b5cf6" />
        <StatsCard title="Security" value="94/100" icon={ShieldCheck} trend="down" trendValue={1} color="#f59e0b" />
      </div>

      <div className="grid lg-grid-cols-3 gap-8">
        <div className="lg-col-span-2">
          <AnalyticsChart />
        </div>
        <div className="flex">
          <AlertsTable />
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-8">Node Pulse</h2>
        <div className="grid lg-grid-cols-8 md-grid-cols-6 gap-4">
          {[...Array(16)].map((_, i) => (
             <div 
               key={i}
               className="h-8 rounded-xl border flex items-center justify-center text-xs font-bold"
               style={{ backgroundColor: i === 4 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)', borderColor: i === 4 ? 'var(--critical)' : 'var(--active)' }}
             >
               #{(i + 1)}
             </div>
          ))}
        </div>
      </div>
    </div>
  )
}
