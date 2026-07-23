const NOTICES = [
    {
        title: 'PAYMENT-FIRST PROCESSING',
        desc: 'Quote requests are queued and researched only after payment is confirmed. This covers the real time our team spends sourcing accurate, itemized numbers on your behalf.',
    },
    {
        title: 'EXCHANGE-RATE DISCLAIMER',
        desc: 'All Naira figures are indicative and calculated at the prevailing exchange rate on the day your quote is issued. Rates may shift between quote issuance and final invoicing.',
    },
    {
        title: 'QUOTE VALIDITY',
        desc: 'Issued quotes remain valid for 7 days from the date shown on your quote document. Requests confirmed after that window may be re-priced to reflect current rates.',
    },
];

export default function PaymentNotice() {
    return (
        <section className="bg-white px-[22px] py-20 md:px-14">
            <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-6 md:grid-cols-3">
                {NOTICES.map((n) => (
                    <div key={n.title} className="rounded-xl border border-brand-line bg-brand-fog p-7">
                        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-tint text-[15px] font-bold text-brand-blue">
                            !
                        </div>
                        <h3 className="mb-2.5 font-heading text-[13.5px] font-bold tracking-[0.5px]">{n.title}</h3>
                        <p className="text-[12.5px] leading-relaxed text-brand-muted">{n.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
