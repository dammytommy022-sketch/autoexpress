import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx',
                'resources/js/about.jsx',
                'resources/js/services.jsx',
                'resources/js/how-it-works.jsx',
                'resources/js/pricing.jsx',
                'resources/js/faq.jsx',
                'resources/js/contact.jsx',
                'resources/js/dealer-program.jsx',
                'resources/js/tracking.jsx',
                'resources/js/terms.jsx',
                'resources/js/privacy.jsx',
                'resources/js/refund-policy.jsx',
                'resources/js/payment-policy.jsx',
                'resources/js/pre-order-agreement.jsx',
            ],
            refresh: true,
        }),
        tailwindcss(),
        react(),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
