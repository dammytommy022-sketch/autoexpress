export default function HowItWorksHero() {
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
                    THE FULL JOURNEY
                </div>
                <h1 className="mb-6 font-heading text-[38px] leading-[1.05] font-bold tracking-[-1px] md:text-[54px]">
                    HOW IT <span className="text-brand-blue">WORKS</span>
                </h1>
                <p className="mx-auto max-w-[560px] text-[15.5px] leading-relaxed text-brand-muted">
                    Six steps, one manifest number — from your first quote request to the vehicle arriving at your
                    door in Nigeria.
                </p>
            </div>
        </header>
    );
}
