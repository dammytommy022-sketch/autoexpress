const ROWS = [
    { label: 'Auction floor access', basic: 'Standard access', premium: 'Priority access' },
    { label: 'Inland trucking rates', basic: 'Standard rates', premium: 'Discounted freight blocks' },
    { label: 'Shipping container allocation', basic: 'Shared space', premium: 'Priority allocation' },
    { label: 'Customs clearance handling', basic: 'Standard queue', premium: 'Priority handling' },
    { label: 'Status updates', basic: 'Email updates', premium: 'Live manifest tracking' },
    { label: 'Invoicing terms', basic: 'Net-15 invoicing', premium: 'Net-30 + credit line' },
    { label: 'Dedicated account manager', basic: false, premium: true },
    { label: 'Volume discount on shipping', basic: false, premium: true },
];

export default function ComparisonTable() {
    return (
        <section className="border-t border-brand-line bg-white px-[22px] py-24 md:px-14">
            <div className="mb-14 max-w-[680px]">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">SIDE BY SIDE</div>
                <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    FEATURE COMPARISON
                </h2>
                <p className="text-[15px] leading-relaxed text-brand-muted">
                    A full breakdown of what changes between Basic and Premium membership.
                </p>
            </div>

            <div className="mx-auto max-w-[880px] overflow-x-auto rounded-2xl border border-brand-line shadow-[0_12px_30px_rgba(14,165,233,0.06)]">
                <div className="min-w-[560px]">
                    <div className="grid grid-cols-3 border-b border-brand-line text-center">
                        <div className="p-6 text-left text-[11px] font-semibold tracking-[2px] text-brand-muted">
                            FEATURE
                        </div>
                        <div className="border-l border-brand-line p-6">
                            <div className="text-[11px] font-semibold tracking-[2px] text-brand-blue">BASIC</div>
                            <div className="mt-1 font-heading text-[20px] font-bold text-brand-ink">₦150,000</div>
                        </div>
                        <div className="relative border-l border-brand-line bg-brand-blue-tint p-6">
                            <span className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-3 py-1 text-[9px] font-bold tracking-[1.5px] whitespace-nowrap text-white">
                                MOST POPULAR
                            </span>
                            <div className="mt-5 text-[11px] font-semibold tracking-[2px] text-brand-blue">PREMIUM</div>
                            <div className="mt-1 font-heading text-[20px] font-bold text-brand-ink">₦500,000</div>
                        </div>
                    </div>

                    {ROWS.map((row, i) => (
                        <div
                            key={row.label}
                            className={`grid grid-cols-3 text-[13.5px] ${i < ROWS.length - 1 ? 'border-b border-brand-line' : ''}`}
                        >
                            <div className="p-5 font-medium text-brand-ink">{row.label}</div>
                            <div className="border-l border-brand-line p-5 text-center text-brand-muted">
                                {typeof row.basic === 'string' ? row.basic : row.basic ? '✓' : <span className="text-brand-faint">—</span>}
                            </div>
                            <div className="border-l border-brand-line bg-brand-blue-tint/40 p-5 text-center font-semibold text-brand-blue">
                                {typeof row.premium === 'string' ? row.premium : row.premium ? '✓' : <span className="text-brand-faint">—</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
