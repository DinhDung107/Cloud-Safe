'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { motion, AnimatePresence } from 'framer-motion';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/register' || pathname === '/';

  if (isAuthPage) {
    return (
      <main className="min-h-screen relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
        {/* 1. Deep Background Mesh */}
        <div className="absolute inset-0 z-0" style={{ backgroundColor: '#02040a' }} />
        
        {/* 2. Intense Ambient Orbs (Tạo chiều sâu màu sắc) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none" style={{ backgroundColor: 'var(--primary)', opacity: 0.22, filter: 'blur(160px)', transform: 'translate(-50%, -50%)', mixBlendMode: 'screen' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none" style={{ backgroundColor: '#8b5cf6', opacity: 0.18, filter: 'blur(160px)', transform: 'translate(50%, 50%)', mixBlendMode: 'screen' }} />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full pointer-events-none" style={{ backgroundColor: '#3b82f6', opacity: 0.1, filter: 'blur(120px)' }} />

        {/* 3. Cyber Grid (Bản sắc Sentinel) */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,194,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }} 
        />

        {/* 4. Glass Shards (Hiệu ứng kính bay lơ lửng) */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[15%] w-24 h-24 border border-white-10 rounded-2xl backdrop-blur-sm z-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
        />
        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[20%] left-[10%] w-32 h-32 border border-white-10 rounded-3xl backdrop-blur-sm z-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full flex justify-center relative z-10"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Abstract Dashboard Ambient Glow */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ backgroundColor: 'var(--primary)', opacity: 0.08, filter: 'blur(100px)', transform: 'translate(-50%, -50%)', zIndex: 0 }} />
      <div className="fixed bottom-0 right-[20%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ backgroundColor: '#8b5cf6', opacity: 0.05, filter: 'blur(100px)', transform: 'translate(50%, 50%)', zIndex: 0 }} />
      
      <Sidebar />
      <div className="flex-1" style={{ marginLeft: '256px', display: 'flex', flexDirection: 'column' }}>
        <TopNav />
        <main className="p-8 flex-1" style={{ backgroundColor: 'var(--background)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
