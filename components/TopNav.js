'use client';

import { Search, Bell, User, HelpCircle, LayoutGrid, Globe, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopNav() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-20 border-b px-8 flex items-center justify-between sticky top-0 z-40"
      style={{ backgroundColor: 'rgba(11, 14, 20, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
    >
      <div className="flex-1" style={{ maxWidth: '400px' }}>
        <div className="relative">
          <Search className="absolute text-slate-400" size={18} style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search..."
            className="w-full bg-black/20 border rounded-xl py-2 pl-12 pr-4 text-sm"
            style={{ color: 'white', outline: 'none' }}
          />
        </div>
      </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-critical rounded-full border-2 border-surface" style={{ backgroundColor: 'var(--critical)' }}></span>
          </button>
          
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <HelpCircle size={20} />
          </button>

          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <LayoutGrid size={20} />
          </button>

          <button className="flex items-center gap-1 p-2 text-slate-400 hover:text-white transition-colors border rounded-md px-2 border-slate-700 bg-white-5">
            <Globe size={14} className="text-cyan" />
            <span className="text-xs font-bold uppercase">EN</span>
            <ChevronDown size={14} />
          </button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
            <div className="w-10 h-10 rounded-xl bg-cyan-10 border border-cyan-30 flex items-center justify-center cursor-pointer hover:bg-cyan-20 transition-colors">
               <User className="text-cyan" size={20} />
            </div>
          </div>
        </div>
    </motion.header>
  );
}
