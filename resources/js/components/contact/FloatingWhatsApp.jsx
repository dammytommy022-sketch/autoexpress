import { IconWhatsApp } from './Icons';

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/2347089111001"
            target="_blank"
            rel="noopener"
            aria-label="Chat on WhatsApp"
            className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-[0_10px_30px_rgba(14,165,233,0.35)] hover:bg-brand-blue-hover"
        >
            <IconWhatsApp />
        </a>
    );
}
