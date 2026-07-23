const base = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
};

export function IconQuote() {
    return (
        <svg {...base}>
            <path d="M5 3h14v14l-4 4H5z" />
            <path d="M8 8h8M8 11.5h8M8 15h5" />
            <circle cx="18.5" cy="17.5" r="3.2" />
            <path d="M17.3 17.5l.9.9 1.5-1.7" />
        </svg>
    );
}

export function IconSearch() {
    return (
        <svg {...base}>
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M20 20l-4.8-4.8" />
        </svg>
    );
}

export function IconPin() {
    return (
        <svg {...base}>
            <path d="M12 21s7-6.4 7-12a7 7 0 10-14 0c0 5.6 7 12 7 12z" />
            <circle cx="12" cy="9" r="2.4" />
        </svg>
    );
}
