'use client';

import { motion } from 'framer-motion';
import { Shield, User, Mail, Lock, Globe, Code } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  return (
    <div style={{ width: '100%', maxWidth: '420px', margin: '0 16px', position: 'relative', zIndex: 10 }}>
      <div 
        className="card flex flex-col items-center justify-center mb-8" 
        style={{ 
          padding: '40px', 
          background: 'linear-gradient(180deg, rgba(16, 20, 29, 0.8) 0%, rgba(11, 14, 20, 0.9) 100%)', 
          backdropFilter: 'blur(20px)',
          width: '100%' 
        }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div 
            className="flex items-center justify-center border relative overflow-hidden mb-4 shadow-[0_0_20px_rgba(0,194,255,0.2)]" 
            style={{ width: '56px', height: '56px', flexShrink: 0, borderRadius: '16px', borderColor: 'var(--cyan-30)' }}
          >
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: 'var(--cyan-10)', opacity: 0.3 }} />
            <Shield className="text-cyan absolute" size={28} strokeWidth={2} style={{ zIndex: 10 }} />
            <User className="text-cyan absolute" size={14} strokeWidth={2.5} style={{ zIndex: 10, marginTop: '2px' }} />
          </div>
          <h2 className="font-bold text-cyan" style={{ fontSize: '28px', letterSpacing: '-0.5px', lineHeight: 1.2 }}>Cloud-Safe</h2>
          <p className="font-black text-slate-400" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '4px' }}>Welcome Back</p>
        </div>

        {/* Auth Form */}
        <div className="w-full flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white-5 hover:bg-white-5 transition-colors font-bold text-sm">
            <Globe size={16} /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white-5 hover:bg-white-5 transition-colors font-bold text-sm">
            <Code size={16} /> GitHub
          </button>
        </div>

        <div className="w-full flex items-center gap-4 my-6">
          <div className="flex-1 h-[1px]" style={{ backgroundColor: 'var(--white-5)' }} />
          <span className="text-xs font-bold text-slate-400 uppercase">OR EMAIL</span>
          <div className="flex-1 h-[1px]" style={{ backgroundColor: 'var(--white-5)' }} />
        </div>

        <form className="w-full flex flex-col gap-4">
          <div>
            <label>Email Address</label>
            <div className="relative">
              <Mail className="absolute text-slate-400" size={18} style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="email" placeholder="admin@cloud-safe.io" style={{ paddingLeft: '48px', backgroundColor: 'rgba(0,0,0,0.2)' }} />
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <label>Password</label>
              <a href="#" className="text-cyan text-xs font-bold mb-2 hover:underline">Forgot?</a>
            </div>
            <div className="relative">
              <Lock className="absolute text-slate-400" size={18} style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="password" placeholder="••••••••" style={{ paddingLeft: '48px', backgroundColor: 'rgba(0,0,0,0.2)' }} />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" id="remember" style={{ width: '16px', height: '16px', accentColor: 'var(--primary)' }} />
            <label htmlFor="remember" style={{ margin: 0, textTransform: 'none', fontWeight: 'normal' }}>Remember me</label>
          </div>

          <button 
            type="button" 
            className="w-full mt-4 rounded-xl font-bold shadow-[0_4px_20px_rgba(0,194,255,0.3)] hover:scale-[1.02] transition-transform" 
            style={{ padding: '14px', backgroundColor: 'var(--primary)', color: '#0b0e14', fontSize: '14px' }}
          >
            Sign In
          </button>
        </form>
      </div>
      
      <p className="text-center text-sm font-medium text-slate-400">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-cyan font-bold hover:underline">
          Create one now
        </Link>
      </p>
    </div>
  );
}
