export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#EFF9FF] to-[#DDF2FE] px-[22px] py-[88px] text-center text-brand-ink md:px-14">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(14,165,233,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,.08) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            <div className="relative mx-auto max-w-[680px]">
                <h2 className="mb-4 font-heading text-[30px] font-bold tracking-[-1px] md:text-[36px]">
                    READY TO IMPORT WITH CONFIDENCE?
                </h2>
                <p className="mb-9 text-[15px] leading-relaxed text-brand-muted">
                    Get a transparent quote or check the live status of a vehicle already on its way.
                </p>
                <div className="flex flex-wrap justify-center gap-3.5">
                    <a
                        href="/#contact"
                        className="inline-flex items-center rounded-md bg-brand-blue px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-white hover:bg-brand-blue-hover"
                    >
                        REQUEST PAID QUOTE
                    </a>
                    <a
                        href="/#track"
                        className="inline-flex items-center rounded-md border border-brand-blue-light bg-transparent px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-brand-blue hover:border-brand-blue"
                    >
                        TRACK VEHICLE
                    </a>
                </div>
            </div>
        </section>
    );
}
