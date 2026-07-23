import { useState } from 'react';

const SERVICES = [
    'Full Import Quote',
    'Trucking Quote',
    'Shipping Quote',
    'Customs Clearing Quote',
    'Repair / Parts Quote',
    'Dealer Membership',
    'Vehicle Tracking Support',
    'Other',
];

const FIELD_CLASS =
    'w-full rounded-md border border-brand-line bg-brand-fog px-4 py-3.5 text-[14px] text-brand-ink outline-none focus:border-brand-blue';

export default function InquiryForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex h-full flex-col items-center justify-center rounded-xl border border-brand-line bg-brand-blue-tint p-10 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-[24px] font-bold text-white">
                    ✓
                </div>
                <h3 className="mb-2 font-heading text-[20px] font-bold text-brand-ink">INQUIRY RECEIVED</h3>
                <p className="max-w-[360px] text-[13.5px] leading-relaxed text-brand-muted">
                    Thanks, {form.name.split(' ')[0] || 'there'} — our support team will reach out within 1 business
                    day regarding your {form.service || 'inquiry'}.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
            <div>
                <label htmlFor="name" className="mb-1.5 block text-[11px] font-semibold tracking-[1.5px] text-brand-ink">
                    FULL NAME
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="John Adewale"
                    className={FIELD_CLASS}
                />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="email" className="mb-1.5 block text-[11px] font-semibold tracking-[1.5px] text-brand-ink">
                        EMAIL
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@example.com"
                        className={FIELD_CLASS}
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="mb-1.5 block text-[11px] font-semibold tracking-[1.5px] text-brand-ink">
                        PHONE / WHATSAPP
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+234 800 000 0000"
                        className={FIELD_CLASS}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="service" className="mb-1.5 block text-[11px] font-semibold tracking-[1.5px] text-brand-ink">
                    SERVICE INTERESTED IN
                </label>
                <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={update('service')}
                    className={`${FIELD_CLASS} appearance-none`}
                >
                    <option value="" disabled>
                        Select a service
                    </option>
                    {SERVICES.map((s) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="message" className="mb-1.5 block text-[11px] font-semibold tracking-[1.5px] text-brand-ink">
                    MESSAGE
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us about the vehicle, quote, or shipment you need help with..."
                    className={`${FIELD_CLASS} resize-none`}
                />
            </div>

            <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-blue px-7 py-4 text-[12px] font-semibold tracking-[2px] text-white hover:bg-brand-blue-hover"
            >
                SEND INQUIRY
            </button>
        </form>
    );
}
