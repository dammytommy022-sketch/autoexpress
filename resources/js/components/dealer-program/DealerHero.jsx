export default function DealerHero() {
    return (
        <header className="relative overflow-hidden bg-gradient-to-b from-[#EFF9FF] to-[#DDF2FE] px-[22px] py-[96px] text-center text-brand-ink md:px-14 md:py-[128px]">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(14,165,233,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,.08) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            <div className="relative mx-auto max-w-[820px]">
                <div className="mb-[26px] text-[10px] font-semibold tracking-[4px] text-brand-blue">
                    FOR DEALERS, IMPORTERS &amp; RESELLERS
                </div>
                <h1 className="mb-6 font-heading text-[34px] leading-[1.1] font-bold tracking-[-1px] md:text-[50px]">
                    THE AUTOPROEXPRESS <span className="text-brand-blue">DEALER NETWORK</span>
                </h1>
                <p className="mx-auto max-w-[600px] text-[15.5px] leading-relaxed text-brand-muted">
                    Priority auction access, discounted freight, and dedicated account support — built for
                    high-volume importers and resellers who move units every month.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3.5">
                    <a
                        href="#register"
                        className="inline-flex items-center rounded-md bg-brand-blue px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-white hover:bg-brand-blue-hover"
                    >
                        REGISTER AS A DEALER
                    </a>
                    <a
                        href="#pricing"
                        className="inline-flex items-center rounded-md border border-brand-blue-light bg-white px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-brand-ink hover:border-brand-blue"
                    >
                        VIEW PACKAGES
                    </a>
                </div>
            </div>
        </header>
    );
}
