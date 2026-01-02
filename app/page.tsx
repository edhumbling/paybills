'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PaymentModal from './components/PaymentModal';
import CurrentYear from './components/CurrentYear';

const LOGO_URL = "https://ik.imagekit.io/humbling/6a8072f2-bf06-4bf0-b2cd-ff2c971a6881.png";

export default function Home() {
  const [paymentType, setPaymentType] = useState<'electricity' | 'water' | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuPayment = (type: 'electricity' | 'water') => {
    setMenuOpen(false);
    setPaymentType(type);
  };

  return (
    <div className="min-h-screen font-sans bg-japanese-grid text-white overflow-x-hidden selection:bg-[var(--jap-red)] selection:text-white relative">

      {/* Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sharp Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[350px] bg-zinc-950/95 backdrop-blur-xl border-l border-[var(--jap-red)] z-[70] transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full relative overflow-hidden">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--jap-red)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--jap-blue)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div className="flex-1 px-8 py-20 flex flex-col justify-center max-w-sm mx-auto w-full">
            <div className="text-[var(--jap-red)] text-[10px] tracking-[0.3em] font-mono mb-12 border-b border-white/10 pb-4">
              SYSTEM NAVIGATION // メニュー
            </div>

            <nav className="space-y-6">
              {/* Electricity */}
              <button
                onClick={() => handleMenuPayment('electricity')}
                className="w-full group flex items-center justify-between p-4 rounded-xl border border-white/5 hover:border-[var(--jap-yellow)]/50 bg-white/5 hover:bg-[var(--jap-yellow)]/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-[var(--jap-yellow)] group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div className="text-left">
                    <span className="block text-lg font-bold text-white group-hover:text-[var(--jap-yellow)] transition-colors tracking-wide">ELECTRICITY</span>
                    <span className="text-[10px] text-gray-500 font-mono group-hover:text-[var(--jap-yellow)]/70">Bill Payment</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-600 group-hover:text-[var(--jap-yellow)] transition-colors">電気</span>
              </button>

              {/* Water */}
              <button
                onClick={() => handleMenuPayment('water')}
                className="w-full group flex items-center justify-between p-4 rounded-xl border border-white/5 hover:border-[var(--jap-blue)]/50 bg-white/5 hover:bg-[var(--jap-blue)]/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-[var(--jap-blue)] group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5L12 19l6.5-14.5L20 6z"></path><path d="M12 3v13"></path><path d="M9 19l3-3 3 3"></path>
                    {/* Replaced complicated path with a simple drop or similar. Let's stick to a drop shape manually for safety or simple waves */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block text-lg font-bold text-white group-hover:text-[var(--jap-blue)] transition-colors tracking-wide">WATER</span>
                    <span className="text-[10px] text-gray-500 font-mono group-hover:text-[var(--jap-blue)]/70">Utility Service</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-600 group-hover:text-[var(--jap-blue)] transition-colors">水道</span>
              </button>

              {/* Terms */}
              <Link
                href="/terms"
                onClick={() => setMenuOpen(false)}
                className="w-full group flex items-center justify-between p-4 rounded-xl border border-white/5 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                  <div className="text-left">
                    <span className="block text-lg font-bold text-gray-300 group-hover:text-white transition-colors tracking-wide">TERMS</span>
                    <span className="text-[10px] text-gray-500 font-mono group-hover:text-gray-300">Conditions</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-600 group-hover:text-white transition-colors">規約</span>
              </Link>
            </nav>
          </div>

          <div className="p-8 bg-black/20 backdrop-blur-sm border-t border-white/5 text-center">
            <p className="text-[10px] text-gray-400 font-mono mb-2">HANNAH&apos;S LEGACY HOME</p>
            <p className="text-[10px] text-[var(--jap-red)] font-bold">Have a wonderful day! // 良い一日を</p>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--jap-black)]/90 backdrop-blur-md border-b border-white/5">
        <div className="container-main py-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative overflow-hidden clip-sharp bg-white/10 group hover:bg-[var(--jap-red)] transition-colors duration-500">
              <Image src={LOGO_URL} alt="Logo" fill className="object-cover opacity-80 group-hover:opacity-100" />
            </div>
            <div>
              <h1 className="text-sm font-black tracking-[0.2em] leading-none text-white">HANNAH&apos;S LEGACY</h1>
              <p className="text-[9px] text-[var(--jap-red)] font-mono mt-0.5">EST. 2026 // 東京スタイル</p>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 group hover:text-[var(--jap-yellow)] transition-colors"
          >
            <span className="text-xs tracking-widest hidden md:block group-hover:translate-x-1 transition-transform">MENU</span>
            <div className="space-y-1.5 p-2">
              <div className="w-6 h-0.5 bg-white group-hover:w-8 group-hover:bg-[var(--jap-yellow)] transition-all"></div>
              <div className="w-4 h-0.5 bg-white ml-auto group-hover:bg-[var(--jap-yellow)] transition-all"></div>
            </div>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--jap-black)] via-[var(--jap-black)]/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--jap-black)] via-transparent to-[var(--jap-black)]/50 z-10"></div>
          <Image
            src="/hero-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-70 scale-105 animate-pulse"
            style={{ animationDuration: '10s' }}
            priority
          />
        </div>

        <div className="container-main relative z-20 px-6 w-full">
          <div className="max-w-4xl animate-slide-in">
            <div className="flex items-start gap-4 mb-4">
              <span className="bg-[var(--jap-red)] text-white text-[10px] font-bold px-2 py-1 clip-sharp">SYSTEM ONLINE</span>
              <span className="text-[var(--jap-yellow)] text-xs font-mono tracking-widest">PAYMENT GATEWAY_01</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8 drop-shadow-2xl">
              BILL<br />
              PAYMENT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--jap-yellow)] to-[var(--jap-red)]">PORTAL</span>
            </h1>

            <div className="flex items-center gap-8 border-t border-white/10 pt-8 mt-8 max-w-xl">
              <p className="text-gray-400 text-sm leading-relaxed font-mono">
                DUE DATE: <span className="text-white">30TH-31ST</span><br />
                Secure transaction interface initiated. Please select your utility provider to proceed.
              </p>
              <a href="#payment-grid" className="hidden md:flex items-center justify-center w-16 h-16 border border-white/20 hover:border-[var(--jap-red)] hover:bg-[var(--jap-red)] transition-all rounded-full group cursor-pointer">
                <svg className="w-6 h-6 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Japanese vertically decorative text */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden md:block opacity-20 text-white font-black text-9xl writing-vertical select-none pointer-events-none">
          支払い
        </div>
      </section>

      {/* Payment Grid */}
      <section id="payment-grid" className="py-24 px-6 relative bg-[var(--jap-black)]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[var(--jap-red)] to-transparent"></div>

        <div className="container-main max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">

            {/* Electricity Card (Red Theme) */}
            <div
              onClick={() => setPaymentType('electricity')}
              className="group relative h-[500px] cursor-pointer clip-diagonal bg-neutral-900 border border-white/5 hover:border-[var(--jap-red)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image BG */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <Image src="https://ik.imagekit.io/humbling/ecg.png" alt="ECG" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--jap-blue)]/90 via-[var(--jap-black)]/80 to-[var(--jap-black)]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--jap-black)]"></div>

              {/* Content */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h2 className="text-4xl font-black text-white italic tracking-tighter">ELECTRICITY</h2>
                  <span className="text-[var(--jap-red)] font-bold text-lg writing-vertical">電気代</span>
                </div>

                <div>
                  <div className="w-12 h-1 bg-[var(--jap-red)] mb-6 group-hover:w-24 transition-all duration-300"></div>
                  <p className="text-gray-300 font-mono text-sm mb-8">
                    POWER CONSUMPTION CHARGE.<br />
                    STATUS: <span className="text-[var(--jap-red)] glitch">ACTIVE</span>
                  </p>
                  <button className="w-full py-4 bg-[var(--jap-red)] text-white font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-colors clip-button">
                    PAY NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Water Card (Blue Theme) */}
            <div
              onClick={() => setPaymentType('water')}
              className="group relative h-[500px] cursor-pointer clip-diagonal bg-neutral-900 border border-white/5 hover:border-[var(--jap-blue)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image BG */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <Image src="https://ik.imagekit.io/humbling/gwcl.png" alt="GWCL" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--jap-blue)]/90 via-[var(--jap-black)]/80 to-[var(--jap-black)]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--jap-black)]"></div>

              {/* Content */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h2 className="text-4xl font-black text-white italic tracking-tighter">WATER</h2>
                  <span className="text-[var(--jap-blue)] font-bold text-lg writing-vertical">水道代</span>
                </div>

                <div>
                  <div className="w-12 h-1 bg-[var(--jap-blue)] mb-6 group-hover:w-24 transition-all duration-300"></div>
                  <p className="text-gray-300 font-mono text-sm mb-8">
                    WATER UTILITY CHARGE.<br />
                    STATUS: <span className="text-[var(--jap-blue)] glitch">ACTIVE</span>
                  </p>
                  <button className="w-full py-4 bg-[var(--jap-blue)] text-white font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-colors clip-button">
                    PAY NOW
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[var(--jap-black)] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--jap-red)] via-[var(--jap-yellow)] to-[var(--jap-blue)] opacity-50"></div>
        <div className="container-main">
          <h3 className="text-[var(--jap-white)] font-bold tracking-[0.3em] text-xs mb-4">HANNAH&apos;S LEGACY HOME</h3>
          <p className="text-gray-600 text-[10px] font-mono">
            © <CurrentYear /> COPYRIGHT // SECURE SYSTEM<br />
            DESIGNED IN TOKYO STYLE
          </p>
        </div>
      </footer>

      {/* Interactions */}
      <PaymentModal
        paymentType={paymentType}
        onClose={() => setPaymentType(null)}
      />
    </div>
  );
}
