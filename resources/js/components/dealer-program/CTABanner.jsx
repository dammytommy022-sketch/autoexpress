export default function CTABanner() {
    return (
        <section className="bg-gradient-to-br from-brand-blue to-brand-blue-hover px-[22px] py-[88px] text-center text-white md:px-14">
            <div className="mx-auto max-w-[680px]">
                <h2 className="mb-4 font-heading text-[30px] font-bold tracking-[-1px] md:text-[36px]">
                    JOIN AUTOPROEXPRESS DEALER NETWORK
                </h2>
                <p className="mb-9 text-[15px] leading-relaxed text-white/90">
                    Priority auctions, discounted freight, and a dedicated account manager — register today and
                    start moving units on dealer terms.
                </p>
                <div className="flex flex-wrap justify-center gap-3.5">
                    <a
                        href="#register"
                        className="inline-flex items-center rounded-md bg-white px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-brand-blue hover:bg-brand-blue-tint"
                    >
                        REGISTER NOW
                    </a>
                    <a
                        href="https://wa.me/2347089111001"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center rounded-md border border-white/50 bg-transparent px-[30px] py-3.5 text-[12px] font-semibold tracking-[2px] text-white hover:border-white"
                    >
                        CHAT ON WHATSAPP
                    </a>
                </div>
            </div>
        </section>
    );
}
