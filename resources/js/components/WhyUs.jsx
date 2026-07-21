const WHY = [
    { title: 'TRANSPARENT PRICING', desc: 'One quote, no hidden fees added later in the process.' },
    { title: 'SECURE PAYMENTS', desc: 'Funds held and released against milestones, not promises.' },
    { title: 'VEHICLE TRACKING', desc: 'Live status from auction hall to your front door.' },
    { title: 'EXPERIENCED TEAM', desc: 'Licensed brokers who handle customs paperwork daily.' },
    { title: 'CUSTOMER SUPPORT', desc: 'A named agent on your file from start to delivery.' },
    { title: 'TRUSTED PROCESS', desc: 'The same seven checkpoints, every vehicle, every time.' },
];

export default function WhyUs() {
    return (
        <section className="bg-white px-[22px] py-24 md:px-14">
            <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">THE DIFFERENCE</div>
            <h2 className="mb-[52px] font-heading text-[40px] font-bold tracking-[-1px]">WHY CHOOSE US</h2>
            <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
                {WHY.map((w) => (
                    <div key={w.title} className="py-7 pr-8">
                        <div className="mb-2.5 flex items-center gap-2.5">
                            <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-[5px] bg-brand-blue-tint text-[12px] font-bold text-brand-blue">
                                ✓
                            </span>
                            <h3 className="font-heading text-[15px] font-semibold tracking-[0.5px]">{w.title}</h3>
                        </div>
                        <p className="pl-8 text-[13px] leading-relaxed text-brand-muted">{w.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
