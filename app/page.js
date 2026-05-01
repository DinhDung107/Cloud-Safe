'use client';

import { motion } from 'framer-motion';
import { Shield, User, ChevronRight, Activity, Zap, Lock, Globe, Bell } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#0b0e14',
    color: 'white',
    position: 'relative',
    overflowX: 'hidden'
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    maxWidth: '1200px',
    padding: '80px 24px',
    position: 'relative',
    zIndex: 10
  };

  return (
    <div style={containerStyle}>
      
      {/* 1. Backdrop Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[5%] left-[10%] w-[35vw] h-[35vw] bg-cyan-500/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[5%] right-[10%] w-[45vw] h-[45vw] bg-purple-600/10 blur-[150px] rounded-full" />
      </div>

      {/* 2. Navigation bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(0,0,0,0.3)'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1100px',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(0,194,255,0.1)',
              border: '1px solid rgba(0,194,255,0.3)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Shield style={{ color: 'var(--primary)' }} size={24} />
            </div>
            <span style={{ fontSize: '20px', fontWeight: '900', letterSpacing: '-0.5px' }}>Cloud-Safe</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Link href="/login" style={{ fontSize: '14px', fontWeight: '700', color: '#94a3b8', textDecoration: 'none' }}>Sign In</Link>
            <Link href="/register" style={{
              padding: '10px 20px',
              backgroundColor: 'var(--primary)',
              color: '#0b0e14',
              fontWeight: '900',
              borderRadius: '12px',
              fontSize: '14px',
              textDecoration: 'none',
              boxShadow: '0 0 20px rgba(0,194,255,0.3)'
            }}>Get Started</Link>
          </div>
        </div>
      </nav>

      <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* 3. Hero Section */}
        <section style={{ ...sectionStyle, paddingTop: '180px', paddingBottom: '100px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: '6px 16px',
              backgroundColor: 'rgba(0,194,255,0.08)',
              border: '1px solid rgba(0,194,255,0.3)',
              color: 'var(--primary)',
              fontSize: '10px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              borderRadius: '99px',
              marginBottom: '32px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Zap size={12} /> Sentinel IoT v2.4 Is Live
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: 'min(80px, 12vw)',
              fontWeight: '900',
              marginBottom: '32px',
              lineHeight: '0.95',
              letterSpacing: '-2px'
            }}
          >
            Secure Your <br/>
            <span style={{ 
              backgroundImage: 'linear-gradient(to right, var(--primary), #3b82f6)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              color: 'transparent',
              display: 'inline-block'
            }}>
               Sentinel Nodes.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '18px',
              color: '#94a3b8',
              maxWidth: '650px',
              marginBottom: '48px',
              fontWeight: '500',
              lineHeight: '1.6'
            }}
          >
            Advanced monitoring and enterprise-grade security for your distributed IoT infrastructure. Built for performance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Link href="/dashboard" style={{
              padding: '16px 32px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: 'white'
            }}>
              <Activity style={{ color: 'var(--primary)' }} size={20} /> View Demo
            </Link>
            <Link href="/register" style={{
              padding: '16px 32px',
              backgroundColor: 'var(--primary)',
              color: '#0b0e14',
              fontWeight: '900',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              boxShadow: '0 0 40px rgba(0,194,255,0.4)'
            }}>
              Start Monitoring <ChevronRight size={20} />
            </Link>
          </motion.div>
        </section>

        {/* 4. Features Section */}
        <section style={{ ...sectionStyle, padding: '100px 24px' }}>
           <div style={{
             display: 'grid',
             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
             gap: '32px',
             width: '100%'
           }}>
              {[
                { icon: Lock, color: '#f87171', title: 'Data Encryption', desc: 'Secure every telemetry packet with military-grade E2E encryption protocols.' },
                { icon: Globe, color: 'var(--primary)', title: 'Global Network', desc: 'Monitor nodes worldwide with low-latency real-time synchronization.' },
                { icon: Bell, color: '#fbbf24', title: 'Smart Alerts', desc: 'Anomaly detection alerts powered by edge-driven behavioral analytics.' }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card"
                  style={{
                    padding: '48px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '32px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                     <feature.icon size={32} style={{ color: feature.color }} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '16px' }}>{feature.title}</h3>
                  <p style={{ color: '#94a3b8', fontWeight: '500', lineHeight: '1.6' }}>{feature.desc}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* 5. CTA Section */}
        <section style={{ 
          ...sectionStyle, 
          padding: '140px 24px',
          backgroundColor: 'rgba(0,0,0,0.2)',
          maxWidth: '100%'
        }}>
           <div style={{
             position: 'absolute',
             top: 0,
             left: '50%',
             transform: 'translateX(-50%)',
             width: '100%',
             height: '300px',
             background: 'radial-gradient(circle at top, rgba(0,194,255,0.1), transparent 70%)',
             pointerEvents: 'none'
           }} />
           <div style={{ position: 'relative', zIndex: 10 }}>
              <h2 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '32px' }}>Deploy Your Sentinel.</h2>
              <p style={{ color: '#94a3b8', marginBottom: '48px', fontSize: '18px', maxWidth: '500px' }}>Scale your infrastructure without compromising security.</p>
              <Link href="/register" style={{
                padding: '20px 48px',
                backgroundColor: 'var(--primary)',
                color: '#0b0e14',
                fontWeight: '900',
                borderRadius: '16px',
                fontSize: '20px',
                textDecoration: 'none',
                boxShadow: '0 0 30px rgba(0, 194, 255, 0.4)',
                display: 'inline-block'
              }}>
                Get Started Free
              </Link>
           </div>
        </section>

        {/* 6. Footer */}
        <footer style={{
          width: '100%',
          padding: '80px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'center'
        }}>
           <div style={{
             width: '100%',
             maxWidth: '1100px',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             gap: '40px'
           }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                 <Shield style={{ color: 'var(--primary)' }} size={24} />
                 <span style={{ fontSize: '20px', fontWeight: '900' }}>Cloud-Safe</span>
              </div>
              <div style={{ display: 'flex', gap: '48px', color: '#64748b', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                 <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy</a>
                 <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Terms</a>
                 <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
              </div>
              <span style={{ color: '#475569', fontSize: '12px', fontWeight: '900' }}>© 2026 CLOUD-SAFE INC.</span>
           </div>
        </footer>
      </main>
    </div>
  );
}
