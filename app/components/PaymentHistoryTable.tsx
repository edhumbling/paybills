'use client';

import { useState } from 'react';

type BillType = 'electricity' | 'water';

interface Payment {
    amount: number;
    type: BillType;
}

interface MemberPayment {
    name: string;
    payments: {
        [year: number]: {
            [month: number]: Payment[]; // 0-11 for Jan-Dec
        };
    };
}

const MEMBERS = ['Lucky Boy', 'Patience', 'Theresah', 'Emma'];
const YEARS = [2026, 2027, 2028, 2029, 2030];
const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

// Initial Data
const INITIAL_DATA: MemberPayment[] = [
    {
        name: 'Lucky Boy',
        payments: {
            2026: {
                0: [{ amount: 110, type: 'electricity' }] // Jan 2026
            }
        }
    },
    { name: 'Patience', payments: {} },
    { name: 'Theresah', payments: {} },
    { name: 'Emma', payments: {} },
];

export default function PaymentHistoryTable() {
    const [selectedYear, setSelectedYear] = useState(2026);


    const getPaymentDisplay = (memberIndex: number, monthIndex: number) => {
        const member = INITIAL_DATA[memberIndex];
        // Ensure structure exists
        const payments = member.payments[selectedYear]?.[monthIndex] || [];

        const electricity = payments.find(p => p.type === 'electricity');
        const water = payments.find(p => p.type === 'water');

        return (
            <div className="grid grid-cols-2 gap-px bg-zinc-800/50 w-full h-full min-w-[60px]">
                {/* Electricity Slot */}
                <div className={`flex items-center justify-center p-1 ${electricity ? 'bg-[var(--jap-yellow)]/10' : ''}`}>
                    {electricity ? (
                        <span className="text-[9px] font-bold text-[var(--jap-yellow)]">
                            {electricity.amount}
                        </span>
                    ) : (
                        <span className="text-[8px] text-zinc-800/50">.</span>
                    )}
                </div>

                {/* Water Slot */}
                <div className={`flex items-center justify-center p-1 ${water ? 'bg-[var(--jap-blue)]/10' : ''}`}>
                    {water ? (
                        <span className="text-[9px] font-bold text-[var(--jap-blue)]">
                            {water.amount}
                        </span>
                    ) : (
                        <span className="text-[8px] text-zinc-800/50">.</span>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full animate-slide-in">
            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 border-b border-white/10 pb-6">
                <div>
                    <h2 className="text-2xl font-black text-white italic tracking-tighter mb-4">
                        HISTORY LOG <span className="text-[var(--jap-red)]">{'//'}</span> {selectedYear}
                    </h2>

                    {/* Year Selector - Scrollable for Mobile Compactness */}
                    <div className="w-full overflow-x-auto pb-2 -mb-2">
                        <div className="flex gap-2 min-w-max">
                            {YEARS.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`px-3 py-1.5 md:px-4 md:py-2 font-bold text-[10px] md:text-xs tracking-widest clip-sharp transition-all duration-300 whitespace-nowrap ${selectedYear === year
                                        ? 'bg-[var(--jap-red)] text-white shadow-[0_0_10px_var(--jap-red)]'
                                        : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-[10px] font-mono font-bold">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[var(--jap-yellow)]/10 border border-[var(--jap-yellow)]"></div>
                        <span className="text-[var(--jap-yellow)]">ELECTRICITY</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[var(--jap-blue)]/10 border border-[var(--jap-blue)]"></div>
                        <span className="text-[var(--jap-blue)]">WATER</span>
                    </div>
                </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto pb-4">
                <div className="min-w-[1000px] border border-zinc-800 bg-black/50 relative">

                    {/* Decorative Corner */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--jap-red)]"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--jap-red)]"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--jap-red)]"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--jap-red)]"></div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-zinc-800">
                                <th className="p-4 bg-zinc-900/50 w-48 sticky left-0 z-10 border-r border-zinc-800">
                                    <div className="text-[10px] text-zinc-500 font-mono mb-1">UNIT MEMBERS</div>
                                    <div className="font-black text-white tracking-widest">PERSONNEL</div>
                                </th>
                                {MONTHS.map((month) => (
                                    <th key={month} className="p-2 text-center border-r border-zinc-800/50 last:border-r-0 min-w-[70px]">
                                        <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white transition-colors writing-vertical md:writing-horizontal">
                                            {month}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {MEMBERS.map((member, idx) => (
                                <tr key={member} className="border-b border-zinc-800/50 hover:bg-white/[0.02] transition-colors group">
                                    <td className="p-4 bg-zinc-950 sticky left-0 z-10 border-r border-zinc-800 group-hover:bg-zinc-900 transition-colors">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-3 bg-[var(--jap-red)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <span className="font-bold text-sm text-zinc-300 group-hover:text-white transition-colors">{member}</span>
                                        </div>
                                    </td>
                                    {MONTHS.map((_, monthIdx) => (
                                        <td key={monthIdx} className="p-2 border-r border-zinc-800/50 last:border-r-0 text-center relative">
                                            <div className="min-h-[30px] flex items-center justify-center">
                                                {getPaymentDisplay(idx, monthIdx) || (
                                                    <span className="text-[8px] text-zinc-800">-</span>
                                                )}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-4 flex justify-between items-center text-[9px] font-mono text-zinc-600">
                <div>SYNC_STATUS: COMPLETE</div>
                <div>RECORD_ID: LOG_{selectedYear}_SECURE</div>
            </div>
        </div>
    );
}
