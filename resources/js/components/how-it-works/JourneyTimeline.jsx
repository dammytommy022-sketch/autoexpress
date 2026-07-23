const LABELS = ['QUOTE', 'SEARCH', 'BID', 'TRUCK', 'SHIP & CLEAR', 'DELIVER'];

export default function JourneyTimeline() {
    return (
        <section className="relative overflow-hidden border-t border-brand-line bg-brand-fog px-[22px] py-[90px] md:px-14">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(14,165,233,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,.05) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            <div className="relative">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">THE JOURNEY</div>
                <h2 className="mb-14 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    YOUR IMPORT AT A GLANCE
                </h2>

                <div className="flex items-start overflow-x-auto pb-2 md:overflow-visible">
                    {LABELS.map((label, i) => (
                        <div key={label} className="relative flex-none basis-[104px] text-center md:flex-1 md:basis-auto">
                            {i < LABELS.length - 1 && (
                                <div className="absolute top-[21px] left-1/2 right-[-50%] border-t border-dashed border-brand-blue-light" />
                            )}
                            <div className="relative z-10 mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue bg-white font-heading text-[13px] font-bold text-brand-blue">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <div className="text-[10px] font-semibold tracking-[1.5px] text-brand-ink">{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
