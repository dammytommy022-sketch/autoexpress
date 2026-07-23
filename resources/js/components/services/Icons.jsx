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

export function IconGavel() {
    return (
        <svg {...base}>
            <path d="M14 5l5 5" />
            <path d="M8.5 10.5l5-5 2 2-5 5z" />
            <path d="M3 21h9" />
            <path d="M6.5 14.5L10 18l-3 3-3.5-3.5z" />
        </svg>
    );
}

export function IconTruck() {
    return (
        <svg {...base}>
            <rect x="2" y="8" width="11" height="8" rx="1" />
            <path d="M13 11h4l3 3v2h-7z" />
            <circle cx="6" cy="18" r="1.6" />
            <circle cx="16.5" cy="18" r="1.6" />
        </svg>
    );
}

export function IconShip() {
    return (
        <svg {...base}>
            <path d="M4 12h16l-2 6H6z" />
            <path d="M8 12V6h5l2 6" />
            <path d="M2 19c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0" />
        </svg>
    );
}

export function IconDocument() {
    return (
        <svg {...base}>
            <path d="M6 2h9l4 4v16H6z" />
            <path d="M15 2v4h4" />
            <path d="M8.5 13l2 2 4-4.5" />
        </svg>
    );
}

export function IconWrench() {
    return (
        <svg {...base}>
            <path d="M15.5 8.5a4 4 0 01-5.4 5.4L4 20l-2-2 6.1-6.1a4 4 0 015.4-5.4l-2.7 2.7 1.9 1.9z" />
        </svg>
    );
}

export function IconHandshake() {
    return (
        <svg {...base}>
            <path d="M2 12l4-4 4 2 3-3 4 4-3 3-4-2z" />
            <path d="M6 14l3 3 2-2" />
            <path d="M13 11l4 4 4-4" />
        </svg>
    );
}
