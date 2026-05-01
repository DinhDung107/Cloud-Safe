'use client';

import { motion } from 'framer-motion';
import { Download, Plus, Search, MoreHorizontal } from 'lucide-react';

const mockDevices = [
  { id: 'NODE-8F92-A1', status: 'Online', lastHeartbeat: '2s ago', ip: '192.168.10.45', network: '5G NR' },
  { id: 'SENS-3B44-D2', status: 'Critical', lastHeartbeat: 'Timeout (14m)', ip: '10.0.4.112', network: 'LTE-M' },
  { id: 'GATE-1A22-D4', status: 'Online', lastHeartbeat: '12s ago', ip: '172.16.0.5', network: 'LoRaWAN' },
  { id: 'NODE-7C11-B2', status: 'Online', lastHeartbeat: '4s ago', ip: '192.168.10.48', network: '5G NR' },
  { id: 'SENS-5A88-F1', status: 'Online', lastHeartbeat: '45s ago', ip: '10.0.5.22', network: 'LTE-M' },
  { id: 'SENS-99DA-E2', status: 'Warning', lastHeartbeat: '1m ago', ip: '192.168.1.10', network: 'Wi-Fi' },
];

export default function DeviceManagement() {
  return (
    <div className="flex flex-col gap-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-black mb-2">Device Management</h1>
          <p className="text-sm text-slate-400">
            Monitor, filter, and manage connected IoT nodes across all network zones.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-xl border font-bold hover:bg-white-5 transition-colors" style={{ padding: '12px 24px', fontSize: '14px', borderColor: 'rgba(255,255,255,0.15)' }}>
            <Download size={16} /> Export
          </button>
          <button className="flex items-center gap-2 rounded-xl font-bold shadow-[0_4px_20px_rgba(0,194,255,0.3)] hover:scale-105 transition-transform" style={{ padding: '12px 24px', backgroundColor: 'var(--primary)', color: '#0b0e14', fontSize: '14px' }}>
            <Plus size={16} /> Add Device
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card"
      >
        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute text-slate-400" size={18} style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search devices, IPs, or alerts..."
              className="pl-12"
            />
          </div>
          <select style={{ width: '200px' }}>
            <option>Status: All</option>
            <option>Online</option>
            <option>Critical</option>
          </select>
          <select style={{ width: '200px' }}>
            <option>Network: All</option>
            <option>5G NR</option>
            <option>LTE-M</option>
          </select>
          <div className="text-xs text-slate-400 ml-auto font-bold">
            Showing 1,248 layout items
          </div>
        </div>

        {/* Data Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" style={{ width: 'auto' }} />
                </th>
                <th>Device ID</th>
                <th>Status</th>
                <th>Last Heartbeat</th>
                <th>IP Address</th>
                <th>Network</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockDevices.map((device, i) => (
                <tr key={i}>
                  <td>
                    <input type="checkbox" style={{ width: 'auto' }} />
                  </td>
                  <td className="font-bold">{device.id}</td>
                  <td>
                    <span className={`badge ${device.status.toLowerCase()}`}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'currentColor' }} />
                      {device.status}
                    </span>
                  </td>
                  <td className="text-slate-400 font-medium">{device.lastHeartbeat}</td>
                  <td className="text-slate-400 text-xs font-mono">{device.ip}</td>
                  <td className="text-xs font-bold text-slate-400">{device.network}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="p-2 hover:bg-white-5 rounded-lg text-slate-400 hover:text-white transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
