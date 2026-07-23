export default function CTABanner() {
    return (
        <section className="bg-gradient-to-br from-brand-blue to-brand-blue-hover px-[22px] py-[88px] text-center text-white md:px-14">
            <div className="mx-auto max-w-[680px]">
                <h2 className="mb-4 font-heading text-[30px] font-bold tracking-[-1px] md:text-[36px]">
                    GET A FULL IMPORT QUOTATION
                </h2>
                <p className="mb-9 text-[15px] leading-relaxed text-white/90">
                    Tell us the vehicle and the destination — we'll quote bidding, trucking, shipping, clearance, and
                    delivery as one number, no hidden fees.
                </p>
                <div className="flex flex-wrap justify-center gap-3.5">
                    <a
                        href="/#contact"
                        className="inline-flex items-center rounded-md bg-white px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-brand-blue hover:bg-brand-blue-tint"
                    >
                        REQUEST FULL IMPORT QUOTE
                    </a>
                    <a
                        href="/#track"
                        className="inline-flex items-center rounded-md border border-white/50 bg-transparent px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-white hover:border-white"
                    >
                        TRACK MY VEHICLE
                    </a>
                </div>
            </div>
        </section>
    );
}
