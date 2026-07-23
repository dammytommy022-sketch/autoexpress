function SectionBody({ blocks }) {
    return (
        <>
            {blocks.map((block, i) => {
                if (typeof block === 'string') {
                    return (
                        <p key={i} className="mb-4 text-[14.5px] leading-relaxed text-brand-muted">
                            {block}
                        </p>
                    );
                }
                if (block.h3) {
                    return (
                        <h3 key={i} className="mt-6 mb-2.5 font-heading text-[16px] font-bold text-brand-ink">
                            {block.h3}
                        </h3>
                    );
                }
                if (block.list) {
                    return (
                        <ul key={i} className="mb-4 flex flex-col gap-2 pl-1">
                            {block.list.map((item, j) => (
                                <li key={j} className="flex gap-2.5 text-[14.5px] leading-relaxed text-brand-muted">
                                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-blue" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    );
                }
                return null;
            })}
        </>
    );
}

export default function LegalLayout({ title, tag, lastUpdated, intro, sections }) {
    return (
        <>
            <header className="relative overflow-hidden bg-gradient-to-b from-[#EFF9FF] to-[#DDF2FE] px-[22px] py-[72px] text-center text-brand-ink md:px-14 md:py-[96px]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(14,165,233,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,.08) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
                <div className="relative mx-auto max-w-[760px]">
                    <div className="mb-[22px] text-[10px] font-semibold tracking-[4px] text-brand-blue">{tag}</div>
                    <h1 className="mb-4 font-heading text-[30px] leading-[1.1] font-bold tracking-[-1px] md:text-[42px]">
                        {title}
                    </h1>
                    <p className="mx-auto mb-3 max-w-[540px] text-[14.5px] leading-relaxed text-brand-muted">{intro}</p>
                    <div className="text-[11.5px] font-semibold tracking-[1px] text-brand-faint">
                        LAST UPDATED: {lastUpdated}
                    </div>
                </div>
            </header>

            <section className="bg-white px-[22px] py-16 md:px-14">
                <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-[240px_1fr]">
                    <nav className="hidden md:block">
                        <div className="sticky top-24">
                            <div className="mb-4 text-[10px] font-semibold tracking-[2.5px] text-brand-blue">
                                ON THIS PAGE
                            </div>
                            <div className="flex flex-col gap-1 border-l border-brand-line pl-4">
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="py-1.5 text-[13px] leading-snug text-brand-muted hover:text-brand-blue"
                                    >
                                        {s.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </nav>

                    <div className="min-w-0">
                        <nav className="mb-10 flex flex-col gap-1 rounded-xl border border-brand-line bg-brand-fog p-5 md:hidden">
                            <div className="mb-2 text-[10px] font-semibold tracking-[2.5px] text-brand-blue">
                                ON THIS PAGE
                            </div>
                            {sections.map((s) => (
                                <a key={s.id} href={`#${s.id}`} className="py-1 text-[13px] text-brand-muted">
                                    {s.title}
                                </a>
                            ))}
                        </nav>

                        <div className="flex flex-col gap-12">
                            {sections.map((s) => (
                                <section key={s.id} id={s.id} className="scroll-mt-24">
                                    <h2 className="mb-4 font-heading text-[20px] font-bold tracking-[-0.3px] text-brand-ink">
                                        {s.title}
                                    </h2>
                                    <SectionBody blocks={s.blocks} />
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
