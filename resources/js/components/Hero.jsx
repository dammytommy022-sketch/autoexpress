const STEPS = ['BID', 'TRUCK', 'SHIP', 'CLEAR', 'TRACK'];

export default function Hero() {
    return (
        <header
            id="top"
            className="relative overflow-hidden bg-gradient-to-b from-brand-navy to-brand-navy-deep px-[22px] pt-[84px] pb-[72px] text-center text-white md:px-14 md:pt-[118px] md:pb-24"
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(#ffffff0d 1px, transparent 1px), linear-gradient(90deg, #ffffff0d 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="absolute top-[232px] right-7 hidden h-[88px] w-[88px] items-center justify-center rounded-full border border-brand-line-soft text-center md:flex lg:top-[252px] lg:right-16 lg:h-[118px] lg:w-[118px]">
                <div>
                    <div className="font-heading text-[9px] leading-[1.35] font-bold tracking-[1.5px] text-brand-sky lg:text-[12px]">
                        CLEARANCE
                        <br />
                        GUARANTEED
                    </div>
                    <div className="mt-1.5 text-[8px] tracking-[2px] text-brand-accent">· EST 2016 ·</div>
                </div>
            </div>

            <div className="relative mx-auto max-w-[820px]">
                <div className="mb-[26px] text-[10px] font-semibold tracking-[4px] text-brand-accent">
                    END-TO-END VEHICLE LOGISTICS
                </div>
                <h1 className="mb-[26px] font-heading text-[34px] leading-[1.02] font-bold tracking-[-1px] md:text-[46px] lg:text-[58px]">
                    IMPORT YOUR VEHICLE
                    <br />
                    WITH <span className="text-brand-blue">CONFIDENCE</span>
                </h1>

                <div className="mb-[34px] flex items-center justify-center gap-3.5 text-[11px] font-semibold tracking-[3px] text-brand-sky-dim">
                    {STEPS.map((step, i) => (
                        <span key={step} className="flex items-center gap-3.5">
                            {i > 0 && <span className="h-px w-[26px] bg-brand-line-soft" />}
                            {step}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-3.5">
                    <a
                        href="#contact"
                        className="inline-flex items-center rounded-md bg-brand-blue px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-white hover:bg-brand-blue-hover"
                    >
                        REQUEST A QUOTE
                    </a>
                    <a
                        href="#track"
                        className="inline-flex items-center rounded-md border border-brand-line-soft bg-transparent px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-white hover:border-brand-accent"
                    >
                        TRACK MY VEHICLE
                    </a>
                </div>
            </div>

            <div className="relative mt-16 flex items-start justify-center gap-3.5">
                {[76, 88, 64, 110, 52, 76].map((h, i) => (
                    <div
                        key={i}
                        style={{ height: `${h}px` }}
                        className="w-[75px] rounded-md border border-[#23406F] bg-[#0E2853]"
                    />
                ))}
            </div>
        </header>
    );
}
