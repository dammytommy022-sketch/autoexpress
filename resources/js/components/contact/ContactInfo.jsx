import { IconMapPin, IconPhone, IconWhatsApp, IconMail, IconClock } from './Icons';

const DETAILS = [
    {
        icon: IconMapPin,
        label: 'OFFICE ADDRESS',
        lines: [{ text: '13 Odegbemi Street, Aboru, Iyana-Ipaja' }, { text: 'Lagos, Nigeria' }],
    },
    {
        icon: IconPhone,
        label: 'PHONE',
        lines: [
            { text: '0708 911 1001', href: 'tel:+2347089111001' },
            { text: '0811 122 2466', href: 'tel:+2348111222466' },
        ],
    },
    {
        icon: IconWhatsApp,
        label: 'WHATSAPP',
        lines: [{ text: '0708 911 1001', href: 'https://wa.me/2347089111001', external: true }],
    },
    {
        icon: IconMail,
        label: 'EMAIL',
        lines: [{ text: 'support@autoproexpress.com', href: 'mailto:support@autoproexpress.com' }],
    },
];

const MAP_QUERY = '13 Odegbemi Street, Aboru, Iyana-Ipaja, Lagos, Nigeria';
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=16&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

const HOURS = [
    ['Monday – Friday', '8:00 AM – 6:00 PM'],
    ['Saturday', '9:00 AM – 2:00 PM'],
    ['Sunday', 'Closed'],
];

export default function ContactInfo() {
    return (
        <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-6">
                {DETAILS.map(({ icon: Icon, label, lines }) => (
                    <div key={label} className="flex gap-4">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-blue-tint text-brand-blue">
                            <Icon />
                        </div>
                        <div>
                            <div className="mb-1 text-[10px] font-semibold tracking-[2.5px] text-brand-blue">{label}</div>
                            {lines.map(({ text, href, external }) =>
                                href ? (
                                    <a
                                        key={text}
                                        href={href}
                                        target={external ? '_blank' : undefined}
                                        rel={external ? 'noopener' : undefined}
                                        className="block text-[14.5px] font-semibold text-brand-ink hover:text-brand-blue"
                                    >
                                        {text}
                                    </a>
                                ) : (
                                    <div key={text} className="text-[14.5px] leading-relaxed text-brand-ink">
                                        {text}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="rounded-xl border border-brand-line bg-brand-fog p-6">
                <div className="mb-4 flex items-center gap-2.5 text-[10px] font-semibold tracking-[2.5px] text-brand-blue">
                    <IconClock />
                    BUSINESS HOURS
                </div>
                <div className="flex flex-col gap-2.5">
                    {HOURS.map(([day, time]) => (
                        <div key={day} className="flex items-center justify-between text-[13.5px]">
                            <span className="text-brand-muted">{day}</span>
                            <span className="font-semibold text-brand-ink">{time}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-brand-line">
                <iframe
                    title="AUTOPROEXPRESS office location"
                    src={MAP_EMBED_SRC}
                    width="100%"
                    height="220"
                    style={{ border: 0, display: 'block' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center justify-center gap-2 border-t border-brand-line bg-brand-fog py-3 text-[12px] font-semibold text-brand-blue hover:bg-brand-blue-tint"
                >
                    <IconMapPin />
                    OPEN IN GOOGLE MAPS
                </a>
            </div>
        </div>
    );
}
