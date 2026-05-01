'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

const alerts = [
  { id: 1, type: 'critical', msg: 'Auth attempt - Node 04', time: '2m ago', status: 'Active' },
  { id: 2, type: 'warning', msg: 'High CPU - Server A', time: '15m ago', status: 'Pending' },
  { id: 3, type: 'info', msg: 'Backup completed', time: '1h ago', status: 'Resolved' },
];

export default function AlertsTable() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="card flex-1"
    >
      <h2 className="text-xl font-bold mb-8">Recent Alerts</h2>

      <div className="flex flex-col gap-4">
        {alerts.map((alert, index) => (
          <div 
            key={alert.id}
            className="flex items-center justify-between p-4 rounded-xl border"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border">
                 <ShieldAlert size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">{alert.msg}</p>
                <p className="text-xs text-slate-400 font-bold uppercase">{alert.time}</p>
              </div>
            </div>
            
            <div className="px-2 py-1 rounded text-xs font-bold border" style={{ fontSize: '10px' }}>
              {alert.status}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
