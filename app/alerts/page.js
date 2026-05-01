'use client';

import { motion } from 'framer-motion';

const mockAlerts = [
  { timestamp: '2023-10-27 14:32:05', severity: 'Critical', deviceId: 'SVR-EU8-092', details: 'CPU Temperature Exceeded Threshold Value: 92°C (Limit: 85°C)', status: 'Offline', via: 'Email' },
  { timestamp: '2023-10-27 13:15:22', severity: 'Warning', deviceId: 'RTR-WU8-014', details: 'High Network Latency Detected Avg Ping: 250ms over 5 mins', status: 'Recovered', via: 'Slack' },
  { timestamp: '2023-10-27 10:05:01', severity: 'Info', deviceId: 'FW-CORE-01', details: 'Scheduled Firmware Update Initiated Version v3.1.4 applying', status: 'In Progress', via: 'System Log' },
];

export default function AlertHistory() {
  return (
    <div className="flex flex-col gap-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-black mb-2">Alert History</h1>
        <p className="text-sm text-slate-400">
          Comprehensive log of system anomalies and notifications.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card"
      >
        <div className="flex items-center gap-4 mb-6 justify-end">
          <select style={{ width: '200px' }}>
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
          </select>
          <select style={{ width: '200px' }}>
            <option>All Severities</option>
            <option>Critical</option>
          </select>
          <button className="px-4 py-2 rounded-lg border text-sm font-bold hover:bg-white-5">
            More Filters
          </button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Severity</th>
                <th>Device ID</th>
                <th>Alert Details</th>
                <th>Status</th>
                <th>Notified Via</th>
              </tr>
            </thead>
            <tbody>
              {mockAlerts.map((alert, i) => (
                <tr key={i}>
                  <td className="text-xs text-slate-400 font-mono w-48">{alert.timestamp}</td>
                  <td>
                    <span className={`badge ${alert.severity.toLowerCase()}`}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'currentColor' }} />
                      {alert.severity}
                    </span>
                  </td>
                  <td className="font-bold">{alert.deviceId}</td>
                  <td className="w-64 max-w-sm">
                    <p className="text-sm font-semibold truncate">{alert.details}</p>
                  </td>
                  <td>
                    <span className="flex items-center gap-2 text-xs font-bold text-slate-400">
                      <div className={`w-2 h-2 rounded-full ${
                        alert.status === 'Offline' ? 'bg-critical' : 
                        alert.status === 'Recovered' ? 'bg-active' : 'bg-primary'
                      }`} style={{ backgroundColor: `var(--${alert.status === 'Offline' ? 'critical' : alert.status === 'Recovered' ? 'active' : 'primary'})`}} />
                      {alert.status}
                    </span>
                  </td>
                  <td className="text-sm text-slate-400 font-medium">{alert.via}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between items-center text-xs text-slate-400 font-bold p-4">
            Showing 1 to 3 of 124 entries
            <div className="flex gap-1 border rounded-lg overflow-hidden">
               <button className="px-3 py-1 hover:bg-white-5">&lt;</button>
               <button className="px-3 py-1 bg-cyan-10 text-cyan">1</button>
               <button className="px-3 py-1 hover:bg-white-5">2</button>
               <button className="px-3 py-1 hover:bg-white-5">3</button>
               <button className="px-3 py-1 hover:bg-white-5">...</button>
               <button className="px-3 py-1 hover:bg-white-5">&gt;</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
