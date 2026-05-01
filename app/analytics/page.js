'use client';

import { motion } from 'framer-motion';
import AnalyticsChart from '@/components/AnalyticsChart';

export default function SystemAnalytics() {
  return (
    <div className="flex flex-col gap-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-4xl font-black mb-2">System Analytics</h1>
          <p className="text-sm text-slate-400">
            Real-time performance and reliability metrics across all deployed nodes.
          </p>
        </div>
        <div>
          <span className="text-xs text-slate-400 font-bold mr-2">Timeframe:</span>
          <select className="inline-block w-auto py-2">
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
          </select>
        </div>
      </motion.div>

      <div className="grid md-grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card flex items-center justify-between">
           <div>
             <h3 className="text-xs text-slate-400 font-bold uppercase mb-2">Network Stability</h3>
             <p className="text-4xl font-black">99.98%</p>
             <p className="text-xs text-slate-400 mt-1">Global cluster average</p>
           </div>
           <div className="px-3 py-1 bg-cyan-10 text-cyan rounded-lg text-sm font-bold border border-cyan-30">
              ~0.02%
           </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card flex items-center justify-between">
           <div>
             <h3 className="text-xs text-slate-400 font-bold uppercase mb-2">Mean Time To Recovery</h3>
             <p className="text-4xl font-black">12<span className="text-xl">m</span> 45<span className="text-xl">s</span></p>
             <p className="text-xs text-slate-400 mt-1">Automated resolution efficiency</p>
           </div>
           <div className="px-3 py-1 rounded-lg text-sm font-bold border" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--active)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              -1m 12s
           </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <AnalyticsChart />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card"
      >
        <div className="flex justify-between items-center mb-6">
           <h2 className="text-xl font-bold">Device Performance Breakdown</h2>
           <button className="text-xs font-bold text-cyan hover:underline">EXPORT CSV</button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Node ID</th>
                <th>Status</th>
                <th>Uptime</th>
                <th>Avg Latency</th>
                <th>Packet Loss</th>
              </tr>
            </thead>
            <tbody>
              {['us-east-1a', 'eu-west-2b', 'ap-south-1c', 'sa-east-1a'].map((node, i) => (
                <tr key={node}>
                  <td className="font-bold text-sm">{node}</td>
                  <td>
                    <span className={`badge ${i === 1 ? 'critical' : 'online'}`}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'currentColor' }} />
                      {i === 1 ? 'Critical' : 'Safe'}
                    </span>
                  </td>
                  <td className="text-sm font-mono">{i === 1 ? '87.45%' : '99.99%'}</td>
                  <td className="text-sm font-mono text-slate-400">{i === 1 ? '145ms' : '24ms'}</td>
                  <td className="text-sm font-mono text-slate-400">{i === 1 ? '2.40%' : '0.01%'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
