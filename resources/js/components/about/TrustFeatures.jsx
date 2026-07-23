const FEATURES = [
    { icon: '✓', title: 'VERIFIED IMPORT PROCESS', desc: 'Every vehicle and every step of its journey is documented and verifiable, end to end.' },
    { icon: '$', title: 'PAYMENT TRANSPARENCY', desc: 'One quote, no hidden fees. Funds are held and released against milestones, not promises.' },
    { icon: '◎', title: 'VEHICLE TRACKING SUPPORT', desc: 'Live manifest tracking from the auction floor to your door, with a named agent on your file.' },
    { icon: '⚑', title: 'CUSTOMS & LOGISTICS EXPERTISE', desc: 'Licensed brokers and experienced freight partners who handle the paperwork daily.' },
];

export default function TrustFeatures() {
    return (
        <section className="bg-brand-green-tint px-[22px] py-24 md:px-14">
            <div className="mb-14 max-w-[680px]">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-green">TRUST & RELIABILITY</div>
                <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    WHY CUSTOMERS TRUST US
                </h2>
                <p className="text-[15px] leading-relaxed text-brand-muted">
                    Trust is built one manifest at a time — here's what customers and dealers rely on us for.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {FEATURES.map((f) => (
                    <div
                        key={f.title}
                        className="rounded-xl border border-brand-green-line bg-white p-7"
                    >
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand-green-tint text-[18px] font-bold text-brand-green">
                            {f.icon}
                        </div>
                        <h3 className="mb-2.5 font-heading text-[15px] font-bold tracking-[0.3px]">{f.title}</h3>
                        <p className="text-[13px] leading-relaxed text-brand-muted">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
