'use client';

import { motion } from 'framer-motion';
import { Shield, User, Mail, Lock, Globe, Code, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Register() {
  return (
    <div style={{ width: '100%', maxWidth: '480px', margin: '0 16px', position: 'relative', zIndex: 10 }}>
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
            style={{ width: '48px', height: '48px', flexShrink: 0, borderRadius: '14px', borderColor: 'var(--cyan-30)' }}
          >
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: 'var(--cyan-10)', opacity: 0.3 }} />
            <Shield className="text-cyan absolute" size={24} strokeWidth={2} style={{ zIndex: 10 }} />
            <User className="text-cyan absolute" size={12} strokeWidth={2.5} style={{ zIndex: 10, marginTop: '2px' }} />
          </div>
          <h2 className="font-bold text-cyan" style={{ fontSize: '24px', letterSpacing: '-0.5px', lineHeight: 1.2 }}>Create Account</h2>
          <p className="font-medium text-slate-400 mt-2 text-sm text-center">Join the Cloud-Safe network and start monitoring your devices securely.</p>
        </div>

        {/* Auth Form */}
        <div className="w-full flex gap-3 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white-5 hover:bg-white-5 transition-colors font-bold text-sm">
            <Globe size={16} /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white-5 hover:bg-white-5 transition-colors font-bold text-sm">
            <Code size={16} /> GitHub
          </button>
        </div>

        <div className="w-full flex items-center gap-4 mb-6">
          <div className="flex-1 h-[1px]" style={{ backgroundColor: 'var(--white-5)' }} />
          <span className="text-xs font-bold text-slate-400 uppercase">OR EMAIL</span>
          <div className="flex-1 h-[1px]" style={{ backgroundColor: 'var(--white-5)' }} />
        </div>

        <form className="w-full flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label>First Name</label>
              <div className="relative">
                <User className="absolute text-slate-400" size={18} style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input type="text" placeholder="John" style={{ paddingLeft: '44px', backgroundColor: 'rgba(0,0,0,0.2)' }} />
              </div>
            </div>
            <div className="flex-1">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} />
            </div>
          </div>

          <div>
            <label>Email Address</label>
            <div className="relative">
              <Mail className="absolute text-slate-400" size={18} style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="email" placeholder="admin@cloud-safe.io" style={{ paddingLeft: '48px', backgroundColor: 'rgba(0,0,0,0.2)' }} />
            </div>
          </div>
          
          <div>
            <label>Password</label>
            <div className="relative">
              <Lock className="absolute text-slate-400" size={18} style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="password" placeholder="Create a strong password" style={{ paddingLeft: '48px', backgroundColor: 'rgba(0,0,0,0.2)' }} />
            </div>
          </div>

          <div className="p-3 mt-2 rounded-lg border border-white-5 flex items-start gap-3" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <ShieldCheck className="text-active shrink-0 mt-0.5" size={16} />
            <p className="text-xs text-slate-400">By creating an account, you agree to our <a href="#" className="text-cyan underline">Terms of Service</a> and <a href="#" className="text-cyan underline">Privacy Policy</a>.</p>
          </div>

          <button 
            type="button" 
            className="w-full mt-2 rounded-xl font-bold shadow-[0_4px_20px_rgba(0,194,255,0.3)] hover:scale-[1.02] transition-transform" 
            style={{ padding: '14px', backgroundColor: 'var(--primary)', color: '#0b0e14', fontSize: '14px' }}
          >
            Create Account
          </button>
        </form>
      </div>
      
      <p className="text-center text-sm font-medium text-slate-400">
        Already have an account?{' '}
        <Link href="/login" className="text-cyan font-bold hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
