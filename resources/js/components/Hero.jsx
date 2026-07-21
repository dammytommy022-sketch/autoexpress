const STEPS = ['BID', 'TRUCK', 'SHIP', 'CLEAR', 'TRACK'];

export default function Hero() {
    return (
        <header
            id="top"
            className="relative overflow-hidden bg-gradient-to-b from-[#EFF9FF] to-[#DDF2FE] px-[22px] pt-[84px] pb-[72px] text-center text-brand-ink md:px-14 md:pt-[118px] md:pb-24"
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(14,165,233,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,.08) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="absolute top-[232px] right-7 hidden h-[88px] w-[88px] items-center justify-center rounded-full border border-brand-blue-light text-center md:flex lg:top-[252px] lg:right-16 lg:h-[118px] lg:w-[118px]">
                <div>
                    <div className="font-heading text-[9px] leading-[1.35] font-bold tracking-[1.5px] text-brand-blue lg:text-[12px]">
                        CLEARANCE
                        <br />
                        GUARANTEED
                    </div>
                    <div className="mt-1.5 text-[8px] tracking-[2px] text-brand-blue">· EST 2016 ·</div>
                </div>
            </div>

            <div className="relative mx-auto max-w-[820px]">
                <div className="mb-[26px] text-[10px] font-semibold tracking-[4px] text-brand-blue">
                    END-TO-END VEHICLE LOGISTICS
                </div>
                <h1 className="mb-[26px] font-heading text-[34px] leading-[1.02] font-bold tracking-[-1px] md:text-[46px] lg:text-[58px]">
                    IMPORT YOUR VEHICLE
                    <br />
                    WITH <span className="text-brand-blue">CONFIDENCE</span>
                </h1>

                <div className="mb-[34px] flex items-center justify-center gap-3.5 text-[11px] font-semibold tracking-[3px] text-brand-muted">
                    {STEPS.map((step, i) => (
                        <span key={step} className="flex items-center gap-3.5">
                            {i > 0 && <span className="h-px w-[26px] bg-brand-blue-light" />}
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
                        className="inline-flex items-center rounded-md border border-brand-blue-light bg-transparent px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-brand-blue hover:border-brand-blue"
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
                        className="w-[75px] rounded-md border border-brand-blue-light bg-[#CBEBFC]"
                    />
                ))}
            </div>
        </header>
    );
}
