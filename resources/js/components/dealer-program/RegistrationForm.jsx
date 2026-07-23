import { useState } from 'react';

const FIELD_CLASS =
    'w-full rounded-md border border-brand-line bg-white px-4 py-3.5 text-[14px] text-brand-ink outline-none focus:border-brand-blue';

const PACKAGES = [
    { value: 'basic', label: 'BASIC', price: '₦150,000/year' },
    { value: 'premium', label: 'PREMIUM', price: '₦500,000/year' },
];

export default function RegistrationForm() {
    const [form, setForm] = useState({
        businessName: '',
        cacNumber: '',
        contactPerson: '',
        email: '',
        whatsapp: '',
        address: '',
        package: 'premium',
    });
    const [submitted, setSubmitted] = useState(false);

    const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="register" className="bg-brand-fog px-[22px] py-24 md:px-14">
            <div className="mx-auto max-w-[720px]">
                <div className="mb-11 text-center">
                    <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">JOIN THE NETWORK</div>
                    <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                        DEALER REGISTRATION
                    </h2>
                    <p className="mx-auto max-w-[520px] text-[15px] leading-relaxed text-brand-muted">
                        Complete the form below and our partnerships team will verify your business and confirm
                        your membership within 1 business day.
                    </p>
                </div>

                {submitted ? (
                    <div className="flex flex-col items-center rounded-2xl border border-brand-line bg-brand-blue-tint p-12 text-center">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-[24px] font-bold text-white">
                            ✓
                        </div>
                        <h3 className="mb-2 font-heading text-[20px] font-bold text-brand-ink">REGISTRATION RECEIVED</h3>
                        <p className="max-w-[380px] text-[13.5px] leading-relaxed text-brand-muted">
                            Thanks, {form.contactPerson.split(' ')[0] || 'there'} — we've received{' '}
                            {form.businessName || 'your business'}'s application for{' '}
                            <b className="text-brand-blue">{form.package === 'premium' ? 'Premium' : 'Basic'}</b>{' '}
                            membership. Our team will verify your CAC details and follow up shortly.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={onSubmit}
                        noValidate
                        className="rounded-2xl border border-brand-line bg-white p-8 shadow-[0_12px_30px_rgba(14,165,233,0.06)] md:p-11"
                    >
                        <div className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="businessName" className="mb-1.5 block text-[11px] font-semibold tracking-[1.5px] text-brand-ink">
                                        BUSINESS NAME
                                    </label>
                                    <input
                                        id="businessName"
                                        name="businessName"
                                        type="text"
                                        required
                                        value={form.businessName}
                                        onChange={update('businessName')}
                                        placeholder="Adewale Motors Ltd"
                                        className={FIELD_CLASS}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cacNumber" className="mb-1.5 block text-[11px] font-semibold tracking-[1.5px] text-brand-ink">
                                        CAC REGISTRATION NUMBER
                                    </label>
                                    <input
                                        id="cacNumber"
                                        name="cacNumber"
                                        type="text"
                                        required
                                        value={form.cacNumber}
                                        onChange={update('cacNumber')}
                                        placeholder="RC1234567"
                                        className={FIELD_CLASS}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contactPerson" className="mb-1.5 block text-[11px] font-semibold tracking-[1.5px] text-brand-ink">
                                    CONTACT PERSON
                                </label>
                                <input
                                    id="contactPerson"
                                    name="contactPerson"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    value={form.contactPerson}
                                    onChange={update('contactPerson')}
                                    placeholder="Chinedu Okafor"
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
                                        placeholder="you@business.com"
                                        className={FIELD_CLASS}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="whatsapp" className="mb-1.5 block text-[11px] font-semibold tracking-[1.5px] text-brand-ink">
                                        WHATSAPP NUMBER
                                    </label>
                                    <input
                                        id="whatsapp"
                                        name="whatsapp"
                                        type="tel"
                                        required
                                        autoComplete="tel"
                                        value={form.whatsapp}
                                        onChange={update('whatsapp')}
                                        placeholder="+234 800 000 0000"
                                        className={FIELD_CLASS}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="mb-1.5 block text-[11px] font-semibold tracking-[1.5px] text-brand-ink">
                                    BUSINESS ADDRESS
                                </label>
                                <textarea
                                    id="address"
                                    name="address"
                                    required
                                    rows={3}
                                    value={form.address}
                                    onChange={update('address')}
                                    placeholder="Street, city, state"
                                    className={`${FIELD_CLASS} resize-none`}
                                />
                            </div>

                            <div>
                                <div className="mb-2.5 block text-[11px] font-semibold tracking-[1.5px] text-brand-ink">
                                    PACKAGE SELECTION
                                </div>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {PACKAGES.map((p) => (
                                        <label
                                            key={p.value}
                                            className={`flex cursor-pointer items-center justify-between rounded-md border px-4 py-3.5 text-[13.5px] ${
                                                form.package === p.value
                                                    ? 'border-brand-blue bg-brand-blue-tint'
                                                    : 'border-brand-line bg-white'
                                            }`}
                                        >
                                            <span className="flex items-center gap-2.5">
                                                <input
                                                    type="radio"
                                                    name="package"
                                                    value={p.value}
                                                    checked={form.package === p.value}
                                                    onChange={update('package')}
                                                    className="accent-brand-blue"
                                                />
                                                <span className="font-semibold text-brand-ink">{p.label}</span>
                                            </span>
                                            <span className="text-brand-muted">{p.price}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-blue px-7 py-4 text-[12px] font-semibold tracking-[2px] text-white hover:bg-brand-blue-hover"
                            >
                                SUBMIT REGISTRATION
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
