const base = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
};

export function IconMapPin() {
    return (
        <svg {...base}>
            <path d="M12 21s7-6.4 7-12a7 7 0 10-14 0c0 5.6 7 12 7 12z" />
            <circle cx="12" cy="9" r="2.4" />
        </svg>
    );
}

export function IconPhone() {
    return (
        <svg {...base}>
            <path d="M5 4h3.5l1.5 4.5-2 1.5a11 11 0 005.5 5.5l1.5-2 4.5 1.5V19a2 2 0 01-2.2 2A16 16 0 013 6.2 2 2 0 015 4z" />
        </svg>
    );
}

export function IconWhatsApp() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3z" />
            <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2z" />
        </svg>
    );
}

export function IconMail() {
    return (
        <svg {...base}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3.5 6.5L12 13l8.5-6.5" />
        </svg>
    );
}

export function IconClock() {
    return (
        <svg {...base}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7.5V12l3 2" />
        </svg>
    );
}
