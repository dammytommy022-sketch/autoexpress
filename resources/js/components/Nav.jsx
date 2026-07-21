import { useState } from 'react';

const LINKS = [
    { href: '#top', label: 'HOME' },
    { href: '#services', label: 'SERVICES' },
    { href: '#track', label: 'TRACK' },
    { href: '#dealers', label: 'DEALERS' },
    { href: '#contact', label: 'CONTACT' },
];

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-brand-line bg-white px-[22px] py-[22px] md:px-14">
            <div className="font-heading text-[17px] font-bold tracking-[2px] text-brand-ink">
                AUTOPRO<span className="text-brand-blue">EXPRESS</span>
            </div>

            <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
                className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md border border-brand-blue-tint bg-transparent md:hidden"
            >
                <span className="block h-[2px] w-[18px] bg-brand-blue" />
                <span className="block h-[2px] w-[18px] bg-brand-blue" />
                <span className="block h-[2px] w-[18px] bg-brand-blue" />
            </button>

            <div
                className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col items-stretch gap-0 border-b border-brand-line bg-white py-[10px] text-[11px] font-semibold tracking-[3px] md:static md:flex md:flex-row md:items-center md:gap-[34px] md:border-none md:bg-transparent md:py-0`}
                onClick={() => setOpen(false)}
            >
                {LINKS.map((link, i) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`px-[22px] py-[13px] md:px-0 md:py-0 ${i === 0 ? 'text-brand-blue' : 'text-brand-ink'}`}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
