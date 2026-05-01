'use client';

import { LayoutDashboard, Router, BellRing, LineChart, Settings, Shield, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: LayoutDashboard, label: 'DASHBOARD', href: '/dashboard' },
  { icon: Router, label: 'DEVICES', href: '/devices' },
  { icon: BellRing, label: 'ALERTS', href: '/alerts' },
  { icon: LineChart, label: 'ANALYTICS', href: '/analytics' },
  { icon: Settings, label: 'SETTINGS', href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-screen w-64 border-r flex flex-col z-50"
      style={{ backgroundColor: 'rgba(16, 20, 29, 0.6)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
    >
      <div className="flex items-center border-b" style={{ padding: '32px 24px', borderColor: 'var(--white-5)', paddingBottom: '24px', marginBottom: '12px' }}>
        <div 
          className="flex items-center justify-center border relative overflow-hidden" 
          style={{ width: '40px', height: '40px', flexShrink: 0, borderRadius: '12px', borderColor: 'var(--cyan-30)' }}
        >
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: 'var(--cyan-10)', opacity: 0.3 }} />
          <Shield className="text-cyan absolute" size={20} strokeWidth={2} style={{ zIndex: 10 }} />
          <User className="text-cyan absolute" size={10} strokeWidth={2.5} style={{ zIndex: 10, marginTop: '2px' }} />
        </div>
        <div className="flex flex-col" style={{ marginLeft: '14px' }}>
          <h2 className="font-bold text-cyan" style={{ fontSize: '22px', letterSpacing: '-0.5px', lineHeight: 1.2 }}>Cloud-Safe</h2>
          <p className="font-black text-slate-400" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>SENTINEL IOT V2.4</p>
        </div>
      </div>

      <nav className="flex-1 w-full" style={{ paddingBottom: '16px' }}>
        <ul className="flex flex-col w-full" style={{ gap: '4px' }}>
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            
            return (
              <li key={index} className="w-full">
                <Link 
                  href={item.href}
                  className={`flex items-center relative ${isActive ? 'text-cyan' : 'text-slate-400 hover:text-white'}`}
                  style={{ 
                    padding: '16px 24px', 
                    gap: '12px',
                    backgroundColor: isActive ? 'rgba(0, 194, 255, 0.08)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'var(--white-5)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <item.icon 
                    size={20} 
                    style={{ 
                      opacity: isActive ? 1 : 0.7, 
                      filter: isActive ? 'drop-shadow(0 0 8px rgba(0,194,255,0.5))' : 'none' 
                    }} 
                  />
                  <span className="font-bold text-sm" style={{ textTransform: 'uppercase' }}>{item.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute top-0 bottom-0 right-0" 
                      style={{ backgroundColor: 'var(--primary)', width: '3px' }} 
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-6">
        <div className="p-4 rounded-2xl border">
          <p className="text-xs text-slate-400 mb-2 uppercase font-bold">System Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-active animate-pulse" style={{ backgroundColor: 'var(--active)' }} />
            <span className="text-sm font-medium">Systems Operational</span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
