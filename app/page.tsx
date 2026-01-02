'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PaymentModal from './components/PaymentModal';

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
      <div className={`fixed top-0 right-0 h-full w-[350px] bg-[var(--jap-black)] border-l border-[var(--jap-red)] z-[70] transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full font-bold uppercase tracking-widest relative">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-500 hover:text-[var(--jap-red)] transition-colors p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div className="p-12 mt-12 space-y-8">
            <div className="text-[var(--jap-red)] text-xs mb-8 font-mono">SYSTEM NAVIGATION // メニュー</div>

            <button
              onClick={() => handleMenuPayment('electricity')}
              className="w-full text-left group flex items-center justify-between border-b border-gray-800 pb-4 hover:border-[var(--jap-yellow)] transition-colors"
            >
              <span className="text-2xl group-hover:text-[var(--jap-yellow)] transition-colors">Electricity</span>
              <span className="text-xs text-gray-600 group-hover:text-[var(--jap-yellow)] writing-vertical h-8">電気</span>
            </button>

            <button
              onClick={() => handleMenuPayment('water')}
              className="w-full text-left group flex items-center justify-between border-b border-gray-800 pb-4 hover:border-[var(--jap-blue)] transition-colors"
            >
              <span className="text-2xl group-hover:text-[var(--jap-blue)] transition-colors">Water</span>
              <span className="text-xs text-gray-600 group-hover:text-[var(--jap-blue)] writing-vertical h-8">水道</span>
            </button>

            <Link
              href="/terms"
              onClick={() => setMenuOpen(false)}
              className="w-full text-left group flex items-center justify-between border-b border-gray-800 pb-4 hover:border-white transition-colors"
            >
              <span className="text-xl text-gray-400 group-hover:text-white transition-colors">Terms & Conditions</span>
              <span className="text-xs text-gray-600 group-hover:text-white writing-vertical h-8">規約</span>
            </Link>
          </div>

          <div className="mt-auto p-12 bg-gray-900/20">
            <p className="text-[10px] text-gray-500 font-mono">HANNAH&apos;S LEGACY HOME<br />SECURE PORTAL v2.0</p>
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
            © 2026 COPYRIGHT // SECURE SYSTEM<br />
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
