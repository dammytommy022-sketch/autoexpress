import { useEffect, useRef, useState } from 'react';

const REVIEWS = [
    { quote: 'Every checkpoint matched the tracker exactly. No surprises at customs, no surprise fees.', author: '— PRIVATE IMPORTER, ONTARIO' },
    { quote: 'We moved eleven units through the dealer programme in our first quarter alone.', author: '— TRADE PARTNER, PREMIUM TIER' },
    { quote: 'The manifest number made it simple to know exactly where the truck was, always.', author: '— PRIVATE IMPORTER, TEXAS' },
    { quote: 'Reconditioning was flawless — the car arrived detailed and ready to drive off.', author: '— PRIVATE IMPORTER, ALBERTA' },
    { quote: 'Customs paperwork that used to take us weeks now clears in days. Game changer.', author: '— TRADE PARTNER, BASIC TIER' },
    { quote: 'A named agent answered every call. Import stress dropped to zero.', author: '— PRIVATE IMPORTER, FLORIDA' },
];

export default function Reviews() {
    const trackRef = useRef(null);
    const timerRef = useRef(null);
    const [active, setActive] = useState(0);

    const cardWidth = () => {
        const el = trackRef.current;
        if (!el) return 0;
        const first = el.firstElementChild;
        const gap = parseFloat(getComputedStyle(el).columnGap) || 24;
        return (first ? first.getBoundingClientRect().width : 0) + gap;
    };

    const step = (dir, loop) => {
        const el = trackRef.current;
        if (!el) return;
        const cw = cardWidth();
        const maxLeft = el.scrollWidth - el.clientWidth;
        let target = el.scrollLeft + dir * cw;
        if (loop && dir > 0 && el.scrollLeft >= maxLeft - 2) target = 0;
        el.scrollTo({ left: Math.max(0, Math.min(target, maxLeft)), behavior: 'smooth' });
    };

    const restart = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => step(1, true), 7000);
    };

    useEffect(() => {
        const el = trackRef.current;
        const onScroll = () => {
            if (!el) return;
            const i = Math.round(el.scrollLeft / (cardWidth() || 1));
            setActive((prev) => (i !== prev ? i : prev));
        };
        el?.addEventListener('scroll', onScroll, { passive: true });
        restart();
        return () => {
            el?.removeEventListener('scroll', onScroll);
            clearInterval(timerRef.current);
        };
    }, []);

    const goTo = (i) => {
        trackRef.current?.scrollTo({ left: i * cardWidth(), behavior: 'smooth' });
        restart();
    };

    return (
        <section className="bg-brand-fog px-[22px] py-[90px] md:px-14">
            <div className="mb-12 flex flex-wrap items-center justify-between gap-7.5">
                <div>
                    <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">CUSTOMER REVIEWS</div>
                    <h2 className="font-heading text-[40px] font-bold tracking-[-1px]">TRUSTED BY IMPORTERS</h2>
                </div>
                <div className="text-[22px] tracking-[4px] text-brand-blue">★★★★★</div>
            </div>

            <div className="relative">
                <div
                    ref={trackRef}
                    className="r-rtrack grid auto-cols-[85%] grid-flow-col gap-6 overflow-x-auto pb-1.5 [scroll-snap-type:x_mandatory] scroll-smooth md:auto-cols-[calc((100%-24px)/2)] lg:auto-cols-[calc((100%-48px)/3)]"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {REVIEWS.map((r) => (
                        <div
                            key={r.author}
                            className="flex flex-col gap-4 rounded-2xl border border-[#E4ECF7] bg-white p-7 [scroll-snap-align:start]"
                            style={{ boxShadow: '0 12px 30px rgba(10,31,60,0.04)' }}
                        >
                            <div className="text-[15px] tracking-[3px] text-brand-blue">★★★★★</div>
                            <p className="flex-1 text-[15.5px] leading-relaxed text-[#2A3958]">“{r.quote}”</p>
                            <div className="text-[11px] font-semibold tracking-[1.5px] text-[#8A97AD]">{r.author}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-9 flex items-center justify-center gap-5.5">
                    <button
                        onClick={() => {
                            step(-1, false);
                            restart();
                        }}
                        aria-label="Previous"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C7D8F5] bg-white text-lg text-brand-blue hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                    >
                        ←
                    </button>
                    <div className="flex gap-2.5">
                        {REVIEWS.map((r, i) => (
                            <button
                                key={r.author}
                                onClick={() => goTo(i)}
                                aria-label="Slide"
                                className="h-2 cursor-pointer rounded-full border-none p-0 transition-all"
                                style={{
                                    width: i === active ? '28px' : '8px',
                                    background: i === active ? '#1B5FE0' : '#C7D8F5',
                                }}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => {
                            step(1, true);
                            restart();
                        }}
                        aria-label="Next"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C7D8F5] bg-white text-lg text-brand-blue hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
