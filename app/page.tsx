'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PaymentModal from './components/PaymentModal';

const LOGO_URL = "https://ik.imagekit.io/humbling/6a8072f2-bf06-4bf0-b2cd-ff2c971a6881.png";

export default function Home() {
  const [embers, setEmbers] = useState<{ id: number, delay: number, left: number }[]>([]);
  const [sessionId, setSessionId] = useState<string>("");
  const [paymentType, setPaymentType] = useState<'electricity' | 'water' | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newEmbers = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        delay: Math.random() * 5,
        left: Math.random() * 100
      }));
      setEmbers(newEmbers);
      setSessionId(Math.random().toString(36).substr(2, 9).toUpperCase());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleMenuPayment = (type: 'electricity' | 'water') => {
    setMenuOpen(false);
    setPaymentType(type);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans uppercase tracking-wider relative overflow-hidden bg-black text-white selection:bg-yellow-600 selection:text-black">
      {/* Dynamic Background */}
      <div className="fire-bg"></div>
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="ember"
          style={{
            animationDelay: `${ember.delay}s`,
            left: `${ember.left}%`
          }}
        />
      ))}

      {/* Header */}
      <header className="military-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md">
        <div className="container-main py-4">
          <div className="flex items-center justify-between px-4 sm:px-0">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 md:w-14 md:h-14 relative bg-black border border-yellow-600 rounded-sm overflow-hidden shadow-[0_0_15px_rgba(255,215,0,0.3)] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all duration-500">
                <Image
                  src={LOGO_URL}
                  alt="Hannah's Legacy Home Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100"
                />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-extrabold text-white tracking-widest leading-none">
                  Hannah&apos;s <span className="text-[#FFD700]">Legacy</span>
                </h1>
                <p className="text-[10px] text-gray-500 font-mono mt-1">SECURE MEMBER PORTAL</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <div className="px-3 py-1 border border-red-900/50 bg-red-950/20 text-red-500 text-xs font-mono animate-pulse">
                  LIVE
                </div>
              </div>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/5 rounded transition-colors"
                aria-label="Menu"
              >
                <span className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-black border-l border-yellow-600/30 z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-20 px-6">
          <p className="text-xs text-gray-600 font-mono mb-6 tracking-widest">NAVIGATION</p>

          <nav className="space-y-2">
            <button
              onClick={() => handleMenuPayment('electricity')}
              className="w-full text-left px-4 py-4 border border-yellow-600/30 bg-yellow-900/10 hover:bg-yellow-600 hover:text-black text-yellow-500 font-bold tracking-wide transition-all flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Pay Light Bill
            </button>

            <button
              onClick={() => handleMenuPayment('water')}
              className="w-full text-left px-4 py-4 border border-cyan-500/30 bg-cyan-900/10 hover:bg-cyan-500 hover:text-black text-cyan-400 font-bold tracking-wide transition-all flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.34"></path>
              </svg>
              Pay Water Bill
            </button>

            <div className="pt-4 border-t border-gray-800 mt-4">
              <Link
                href="/terms"
                onClick={() => setMenuOpen(false)}
                className="w-full text-left px-4 py-4 border border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-gray-400 hover:text-white font-mono text-sm tracking-wide transition-all flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Terms & Conditions
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-20 px-6 relative z-10">
        <div className="container-main">
          <div className="flex flex-col items-center text-center fade-in">
            <div className="w-full max-w-4xl mx-auto border-t border-b border-yellow-600/30 py-12 relative bg-black/40 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-2 h-2 bg-yellow-500 box-shadow-glow"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-500 box-shadow-glow"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-yellow-500 box-shadow-glow"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-yellow-500 box-shadow-glow"></div>

              <p className="text-yellow-500 font-mono text-sm mb-4 tracking-[0.3em]">
                MISSION: DEBT FREE LIVING
              </p>

              <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                PAYMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">PORTAL</span>
              </h1>

              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-xl font-light normal-case tracking-normal">
                Members are required to settle dues between the <span className="text-white font-bold border-b border-yellow-500">30th and 31st</span> of every month.
                <br /><span className="text-yellow-500/80 mt-2 block">Secure your home. Maintain your access.</span>
              </p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row gap-6 w-full max-w-lg">
              <a href="#payment-options" className="btn-military-primary w-full md:w-auto flex-1 hover:no-underline group">
                <span className="group-hover:text-black">Make a Payment</span>
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Info Section */}
      <section className="py-10 px-6 relative z-10">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-red-600/50 bg-red-950/10 p-8 relative overflow-hidden group hover:bg-red-950/20 transition-colors">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-red-500 text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  IMPORTANT NOTICE
                </h3>
                <p className="text-gray-300 text-sm normal-case leading-relaxed mb-6 font-mono border-l-2 border-red-800 pl-4">
                  FAILURE TO COMPLETE PAYMENT WITHIN THE DESIGNATED WINDOW WILL RESULT IN <span className="text-white font-bold">IMMEDIATE INTERRUPTION</span> OF UTILITY SERVICES. ACCESS WILL REMAIN RESTRICTED UNTIL FULL RESOLUTION IS CONFIRMED.
                </p>
                <div className="bg-red-950/40 p-3 border border-red-900/60 text-xs text-red-300 font-mono text-center warning-glitch">
                  PLEASE PAY ON TIME // AVOID DEBT ACCUMULATION
                </div>
              </div>
            </div>

            <div className="border border-yellow-600/50 bg-yellow-950/10 p-8 relative overflow-hidden group hover:bg-yellow-950/20 transition-colors">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-yellow-500 text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  AUTOMATIC PAYMENTS
                </h3>
                <p className="text-gray-300 text-sm normal-case leading-relaxed mb-6 font-sans">
                  Upon completion of your initial payment, your profile will be securely set up for <span className="text-yellow-400">automated monthly billing</span>.
                  This ensures consistent service without manual intervention.
                </p>
                <ul className="space-y-3 font-mono">
                  <li className="flex items-center gap-3 text-sm text-yellow-500/80">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    MONTHLY BILLING SETUP
                  </li>
                  <li className="flex items-center gap-3 text-sm text-yellow-500/80">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    DEBT-FREE LIVING INITIATIVE
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section id="payment-options" className="py-20 px-6 relative z-10">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 border-b border-gray-800 pb-4 gap-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-yellow-600">{'//'}</span> SELECT BILL TYPE
            </h2>
            <span className="text-gray-600 font-mono text-xs md:text-sm bg-gray-900 px-3 py-1 rounded border border-gray-800">
              SECURE PAYMENT PROCESSING
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Electricity Card */}
            <div
              onClick={() => setPaymentType('electricity')}
              className="group cursor-pointer"
            >
              <div className="military-card h-full p-8 flex flex-col items-center text-center relative overflow-hidden min-h-[400px]">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image src="https://ik.imagekit.io/humbling/ecg.png" alt="" fill className="object-cover" />
                </div>

                <div className="w-24 h-24 mb-8 bg-black border-2 border-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,165,0,0.4)] relative z-10">
                  <div className="absolute inset-0 rounded-full border border-yellow-500/30 animate-ping"></div>
                  <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors tracking-tighter">ELECTRICITY</h3>
                <div className="h-0.5 w-16 bg-yellow-600 mb-6"></div>

                <p className="text-gray-400 text-sm mb-10 font-mono leading-relaxed">
                  UTILITY: ELECTRICITY BILL<br />
                  STATUS: <span className="text-green-500">AVAILABLE</span>
                </p>

                <div className="mt-auto w-full border border-yellow-600/30 py-4 text-yellow-500 font-bold tracking-[0.2em] bg-yellow-900/10 group-hover:bg-yellow-600 group-hover:text-black transition-all clip-path-button">
                  PAY NOW
                </div>
              </div>
            </div>

            {/* Water Card */}
            <div
              onClick={() => setPaymentType('water')}
              className="group cursor-pointer"
            >
              <div className="military-card h-full p-8 flex flex-col items-center text-center relative overflow-hidden min-h-[400px]" style={{ borderColor: 'rgba(79, 209, 199, 0.3)' }}>
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image src="https://ik.imagekit.io/humbling/gwcl.png" alt="" fill className="object-cover" />
                </div>

                <div className="w-24 h-24 mb-8 bg-black border-2 border-cyan-500/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] relative z-10">
                  <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping" style={{ animationDuration: '2s' }}></div>
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.34l5.66-3.66"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.69L17.66 8.35A8 8 0 1 1 6.34 8.35"></path></svg>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors tracking-tighter">WATER (GWCL)</h3>
                <div className="h-0.5 w-16 bg-cyan-600 mb-6"></div>

                <p className="text-gray-400 text-sm mb-10 font-mono leading-relaxed">
                  UTILITY: WATER BILL<br />
                  STATUS: <span className="text-green-500">AVAILABLE</span>
                </p>

                <div className="mt-auto w-full border border-cyan-600/30 py-4 text-cyan-400 font-bold tracking-[0.2em] bg-cyan-900/10 group-hover:bg-cyan-500 group-hover:text-black transition-all clip-path-button">
                  PAY NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PaymentModal
        paymentType={paymentType}
        onClose={() => setPaymentType(null)}
      />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-yellow-900/20 bg-black relative z-10">
        <div className="container-main text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-10 h-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src={LOGO_URL}
                alt="Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-gray-600 text-[10px] md:text-xs font-mono tracking-widest">
            © {new Date().getFullYear()} HANNAH&apos;S LEGACY HOME. ALL RIGHTS RESERVED.<br />
            SECURE SESSION ID: {sessionId}
          </p>
          <Link href="/terms" className="text-gray-500 hover:text-yellow-500 text-xs font-mono mt-4 block transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
}
