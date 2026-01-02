'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const reference = searchParams.get('reference') || searchParams.get('trxref') || 'N/A';

  return (
    <div className="relative z-10 max-w-2xl w-full">
      {/* Success Card */}
      <div className="bg-zinc-900/80 backdrop-blur-xl border border-green-500/30 p-1 md:p-2 clip-diagonal">
        <div className="bg-black/50 p-8 md:p-12 border border-zinc-800 relative overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none"></div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-green-500 mb-6 bg-green-500/10 animate-in zoom-in duration-500 relative">
              <div className="absolute inset-0 rounded-full border border-green-500/30 animate-ping"></div>
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">
                PAYMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">SUCCESSFUL</span>
              </h1>
              <p className="text-green-500 font-mono text-xs tracking-[0.3em] uppercase">
                TRANSACTION COMPLETE // 支払い完了
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid gap-4 mb-12 border-t border-b border-zinc-800 py-8">
            <div className="flex justify-between items-center group">
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">Status</span>
              <span className="text-green-400 font-bold font-mono text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                AUTHORIZED
              </span>
            </div>
            
            <div className="flex justify-between items-center group">
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">Reference ID</span>
              <span className="text-white font-mono text-sm tracking-widest">{reference}</span>
            </div>

            <div className="flex justify-between items-center group">
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">Processor</span>
              <span className="text-zinc-400 font-mono text-xs uppercase">Paystack Secure</span>
            </div>
          </div>

          {/* Message */}
          <div className="text-center mb-12">
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto">
              Your transaction has been securely processed. The automated billing system has been updated. A receipt has been sent to your email.
            </p>
          </div>

          {/* Action */}
          <div className="flex justify-center">
            <Link 
              href="/"
              className="group relative px-8 py-4 bg-zinc-900 border border-zinc-700 hover:border-green-500 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative flex items-center gap-3">
                <svg className="w-4 h-4 text-zinc-500 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">Return to Dashboard</span>
              </div>
            </Link>
          </div>

          {/* Footer Metadata */}
          <div className="absolute bottom-4 left-0 w-full text-center">
            <span className="text-[9px] text-zinc-700 font-mono tracking-widest uppercase">
              Secure Channel Encrypted // 256-BIT
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>

      <Suspense fallback={
        <div className="text-white font-mono animate-pulse">Initializing Secure Feed...</div>
      }>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}
