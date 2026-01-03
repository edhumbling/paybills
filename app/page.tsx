'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PaymentModal from './components/PaymentModal';
import CurrentYear from './components/CurrentYear';
import PaymentHistoryTable from './components/PaymentHistoryTable';

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

      {/* Tactical Sidebar Menu - Militant High Edge Mobile */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[380px] bg-black/98 backdrop-blur-xl border-l-4 border-l-[var(--jap-red)] z-[70] transform transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full relative font-mono select-none">

          {/* Tactical Overlay Patterns */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--jap-red)] to-transparent animate-pulse z-10"></div>

          {/* Mobile Specific Corner Brackets */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[var(--jap-red)] z-20"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[var(--jap-red)] z-20"></div>

          {/* Close Button - Tactical Style */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-zinc-900 border-2 border-[var(--jap-red)] text-white hover:bg-[var(--jap-red)] hover:text-black transition-all duration-100 group clip-sharp shadow-[0_0_10px_rgba(215,0,15,0.3)]"
          >
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-currentColor rotate-45 group-hover:rotate-0 transition-transform"></span>
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-currentColor -rotate-45 group-hover:rotate-0 transition-transform"></span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center font-black text-[10px]">
                X
              </div>
            </div>
          </button>

          <div className="flex-1 px-8 py-24 flex flex-col justify-start relative z-30">
            <div className="mb-12 border-l-2 border-zinc-800 pl-4 py-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-[var(--jap-red)] shadow-[0_0_8px_var(--jap-red)] animate-pulse"></div>
                <span className="text-white text-sm font-black tracking-[0.3em] uppercase glitch" data-text="SYSTEM NAV">
                  SYSTEM NAV
                </span>
              </div>
              <div className="h-px w-full bg-zinc-800 flex mt-4 mb-2">
                <div className="h-full w-24 bg-[var(--jap-red)]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-zinc-500 font-bold tracking-widest">ID: SECURE_CORE_v2 // MOBILE_OP</span>
                <span className="text-[10px] text-zinc-500 font-bold tracking-widest">AUTH: ADMIN_ACCESS_GRANTED</span>
              </div>
            </div>

            <nav className="space-y-6">
              {/* Electricity - Militant Card */}
              <button
                onClick={() => handleMenuPayment('electricity')}
                className="w-full group relative p-6 bg-zinc-900 border-2 border-zinc-800 hover:border-[var(--jap-yellow)] hover:bg-zinc-800 transition-all duration-100 text-left overflow-hidden clip-sharp"
              >
                <div className="absolute top-0 right-0 w-16 h-1 bg-[var(--jap-yellow)] group-hover:w-full transition-all duration-300 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-8 h-1 bg-[var(--jap-yellow)] group-hover:w-full transition-all duration-500 ease-out delay-75"></div>

                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-1.5 py-0.5 bg-[var(--jap-yellow)] text-black text-[9px] font-black tracking-widest">01</span>
                      <span className="text-[10px] text-zinc-500 group-hover:text-white transition-colors tracking-widest uppercase font-bold">UTILITY_OP</span>
                    </div>
                    <span className="block text-3xl font-black text-white tracking-tighter group-hover:text-[var(--jap-yellow)] transition-colors italic">ELECTRICITY</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-zinc-700 group-hover:text-white transition-colors mb-1">電気</span>
                    <span className="inline-block px-1 py-0.5 bg-zinc-800 text-[9px] text-[var(--jap-yellow)] font-bold border border-[var(--jap-yellow)]">ACTIVE</span>
                  </div>
                </div>
              </button>

              {/* Water - Militant Card */}
              <button
                onClick={() => handleMenuPayment('water')}
                className="w-full group relative p-6 bg-zinc-900 border-2 border-zinc-800 hover:border-[var(--jap-blue)] hover:bg-zinc-800 transition-all duration-100 text-left overflow-hidden clip-sharp"
              >
                <div className="absolute top-0 right-0 w-16 h-1 bg-[var(--jap-blue)] group-hover:w-full transition-all duration-300 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-8 h-1 bg-[var(--jap-blue)] group-hover:w-full transition-all duration-500 ease-out delay-75"></div>

                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-1.5 py-0.5 bg-[var(--jap-blue)] text-white text-[9px] font-black tracking-widest">02</span>
                      <span className="text-[10px] text-zinc-500 group-hover:text-white transition-colors tracking-widest uppercase font-bold">UTILITY_OP</span>
                    </div>
                    <span className="block text-3xl font-black text-white tracking-tighter group-hover:text-[var(--jap-blue)] transition-colors italic">WATER</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-zinc-700 group-hover:text-white transition-colors mb-1">水道</span>
                    <span className="inline-block px-1 py-0.5 bg-zinc-800 text-[9px] text-[var(--jap-blue)] font-bold border border-[var(--jap-blue)]">ACTIVE</span>
                  </div>
                </div>
              </button>

              {/* History - Militant Card */}
              <Link
                href="/paymenthistory"
                onClick={() => setMenuOpen(false)}
                className="w-full group relative p-6 bg-zinc-900 border-2 border-zinc-800 hover:border-[var(--jap-red)] hover:bg-zinc-800 transition-all duration-100 text-left block overflow-hidden clip-sharp"
              >
                <div className="absolute top-0 right-0 w-16 h-1 bg-[var(--jap-red)] group-hover:w-full transition-all duration-300 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-8 h-1 bg-[var(--jap-red)] group-hover:w-full transition-all duration-500 ease-out delay-75"></div>

                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-1.5 py-0.5 bg-[var(--jap-red)] text-white text-[9px] font-black tracking-widest">03</span>
                      <span className="text-[10px] text-zinc-500 group-hover:text-white transition-colors tracking-widest uppercase font-bold">ARCHIVE</span>
                    </div>
                    <span className="block text-2xl font-black text-zinc-400 group-hover:text-white tracking-tighter transition-colors italic">HISTORY</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-zinc-700 group-hover:text-white transition-colors mb-1">履歴</span>
                    <span className="inline-block px-1 py-0.5 bg-zinc-800 text-[9px] text-[var(--jap-red)] font-bold border border-[var(--jap-red)]">VIEW</span>
                  </div>
                </div>
              </Link>

              {/* Terms - Militant Card */}
              <Link
                href="/terms"
                onClick={() => setMenuOpen(false)}
                className="w-full group relative p-6 bg-zinc-900 border-2 border-zinc-800 hover:border-white hover:bg-zinc-800 transition-all duration-100 text-left block overflow-hidden clip-sharp"
              >
                <div className="absolute top-0 right-0 w-16 h-1 bg-white group-hover:w-full transition-all duration-300 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-8 h-1 bg-white group-hover:w-full transition-all duration-500 ease-out delay-75"></div>

                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-1.5 py-0.5 bg-white text-black text-[9px] font-black tracking-widest">04</span>
                      <span className="text-[10px] text-zinc-500 group-hover:text-white transition-colors tracking-widest uppercase font-bold">LEGAL_DOC</span>
                    </div>
                    <span className="block text-2xl font-black text-zinc-400 group-hover:text-white tracking-tighter transition-colors italic">TERMS</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-zinc-700 group-hover:text-white transition-colors mb-1">規約</span>
                    <span className="inline-block px-1 py-0.5 bg-zinc-800 text-[9px] text-zinc-400 font-bold border border-zinc-600">READ</span>
                  </div>
                </div>
              </Link>
            </nav>
          </div>

          <div className="p-8 border-t-2 border-zinc-900 bg-black relative z-30">
            <div className="flex justify-between items-end mb-6">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed font-bold">
                <span className="text-[var(--jap-red)]">HANNAH&apos;S LEGACY HOME</span><br />
                SECURE PORTAL ACCESS<br />
                UNIT: MOBILE_CMD
              </div>
              <div className="text-right space-y-1">
                <div className="flex items-center justify-end gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 animate-pulse"></div>
                  <span className="text-[9px] text-zinc-400 font-mono">ENCRYPTION: 256-BIT</span>
                </div>
                <div className="flex items-center justify-end gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 animate-pulse delay-75"></div>
                  <span className="text-[9px] text-zinc-400 font-mono">SIGNAL: STABLE</span>
                </div>
              </div>
            </div>
            <div className="py-3 border-y border-zinc-900 text-center bg-zinc-900/50">
              <p className="text-[11px] text-[var(--jap-red)] font-black tracking-[0.3em] animate-pulse">
                HAVE A WONDERFUL DAY! // 良い一日を
              </p>
            </div>
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

      {/* Payment History Table Section */}
      <section className="py-12 bg-black border-t border-zinc-900">
        <div className="container-main px-6">
          <PaymentHistoryTable />
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
