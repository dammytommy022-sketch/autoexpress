const LABELS = ['REQUEST', 'PAY', 'QUOTE', 'APPROVE', 'IMPORT', 'TRACK', 'DELIVER'];
const CHECKPOINTS = LABELS.map((label, i) => ({ n: String(i + 1).padStart(2, '0'), label }));

export default function Process() {
    return (
        <section className="relative overflow-hidden border-t border-brand-line px-[22px] py-[90px] md:px-14">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(14,165,233,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,.05) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            <div className="relative">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">THE PROCESS</div>
                <h2 className="mb-3 font-heading text-[40px] font-bold tracking-[-1px]">HOW IT WORKS</h2>
                <p className="mb-14 max-w-[640px] text-[15px] leading-relaxed text-brand-muted">
                    Seven checkpoints, one manifest number. You can see exactly where your vehicle sits, always.
                </p>

                <div className="flex items-start overflow-x-auto pb-2 md:overflow-visible">
                    {CHECKPOINTS.map((cp, i) => (
                        <div key={cp.n} className="relative flex-none basis-[84px] text-center md:flex-1 md:basis-auto">
                            {i < CHECKPOINTS.length - 1 && (
                                <div className="absolute top-[21px] left-1/2 right-[-50%] border-t border-dashed border-brand-blue-light" />
                            )}
                            <div className="relative z-10 mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue bg-white font-heading text-[13px] font-bold text-brand-blue">
                                {cp.n}
                            </div>
                            <div className="text-[10px] font-semibold tracking-[2px] text-brand-ink">{cp.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
