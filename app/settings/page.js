'use client';

import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Activity, Settings2 } from 'lucide-react';

export default function SystemSettings() {
  return (
    <div className="flex flex-col gap-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-black mb-2">System Settings</h1>
        <p className="text-sm text-slate-400">
          Manage your profile, notification preferences, and global monitoring thresholds.
        </p>
      </motion.div>

      <div className="grid md-grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="card"
          >
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <User size={20} className="text-cyan" /> User Profile
            </h2>
            <div className="flex gap-6 mb-6">
              <div className="flex flex-col items-center gap-2">
                 <div className="w-20 h-20 rounded-2xl bg-cyan-10 border border-cyan-30 flex items-center justify-center">
                    <User size={40} className="text-cyan" />
                 </div>
                 <button className="text-xs font-bold text-slate-400 hover:text-white">Update Image</button>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                 <div>
                   <label>Full Name</label>
                   <input type="text" defaultValue="Nguyễn Đình Dũng" />
                 </div>
                 <div>
                   <label>Email Address</label>
                   <input type="email" defaultValue="admin@cloudsafe.io" />
                 </div>
              </div>
            </div>
            <button className="px-4 py-2 rounded-lg border font-bold text-sm hover:bg-white-5">Change Password</button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Settings2 size={20} className="text-cyan" /> Notification Channels
            </h2>
            
            <div className="flex flex-col gap-6">
               <div className="p-4 border rounded-xl bg-white-5">
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-2">
                     <Mail size={16} />
                     <h3 className="font-bold text-sm">Email Alerts</h3>
                   </div>
                   <div className="w-8 h-4 rounded-full bg-cyan-10 flex items-center p-0.5 border border-cyan-30 relative cursor-pointer">
                      <div className="w-3 h-3 bg-cyan rounded-full absolute right-0.5" style={{ backgroundColor: 'var(--primary)' }} />
                   </div>
                 </div>
                 <label>Backup Email Address</label>
                 <input type="email" defaultValue="support@cloudsafe.io" />
               </div>

               <div className="p-4 border rounded-xl">
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-2 text-slate-400">
                     <MessageSquare size={16} />
                     <h3 className="font-bold text-sm">Telegram Bot</h3>
                   </div>
                   <div className="w-8 h-4 rounded-full bg-white-5 flex items-center p-0.5 border relative cursor-pointer">
                      <div className="w-3 h-3 bg-slate-400 rounded-full" />
                   </div>
                 </div>
                 <div className="flex flex-col gap-4 opacity-50 pointer-events-none">
                    <div>
                      <label>Bot Token</label>
                      <input type="text" placeholder="Enter Telegram Bot Token" />
                    </div>
                    <div>
                      <label>Chat ID</label>
                      <input type="text" placeholder="Enter Target Chat ID" />
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Activity size={20} className="text-cyan" /> Monitoring Thresholds
            </h2>
            
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="mb-0">Offline Detection Sensitivity</label>
                  <span className="text-xs font-bold text-cyan">3 mins</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Time before a missed heartbeat triggers a critical offline alert.</p>
                <input type="range" min="1" max="10" defaultValue="3" className="w-full" style={{ accentColor: 'var(--primary)' }} />
              </div>

              <div>
                <label>Alert Cooldown Period</label>
                <p className="text-xs text-slate-400 mb-2">Duration to suppress repeat notifications for an ongoing incident.</p>
                <select defaultValue="15 Minutes">
                  <option>5 Minutes</option>
                  <option>15 Minutes</option>
                  <option>1 Hour</option>
                </select>
              </div>

              <div>
                <label>Global Severity Filter</label>
                <p className="text-xs text-slate-400 mb-2">Minimum severity level required to trigger an out-of-band alert.</p>
                <div className="flex gap-2">
                   <button className="flex-1 py-2 border rounded-lg text-sm text-slate-400 font-bold hover:bg-white-5">Info+</button>
                   <button className="flex-1 py-2 border border-cyan-30 bg-cyan-10 text-cyan rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(0,194,255,0.2)]">Warning+</button>
                   <button className="flex-1 py-2 border rounded-lg text-sm text-slate-400 font-bold hover:bg-white-5">Critical</button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t flex items-center justify-end gap-4">
              <span className="text-xs text-slate-400 font-bold">Unsaved changes...</span>
              <button className="px-4 py-2 rounded-lg text-sm font-bold text-slate-400 hover:text-white">Discard</button>
              <button className="px-4 py-2 rounded-lg text-sm font-bold bg-cyan text-black" style={{ backgroundColor: 'var(--primary)', color: '#0b0e14' }}>Save Configuration</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
