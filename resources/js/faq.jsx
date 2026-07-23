import './bootstrap';
import { createRoot } from 'react-dom/client';
import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { faqCategories } from './faq-data';

Alpine.plugin(collapse);

Alpine.data('faqPage', () => ({
    query: '',
    openId: null,
    categories: faqCategories,
    toggle(id) {
        this.openId = this.openId === id ? null : id;
    },
    matches(item) {
        const q = this.query.trim().toLowerCase();
        if (!q) return true;
        return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
    },
    categoryHasMatches(cat) {
        return cat.items.some((item) => this.matches(item));
    },
}));

window.Alpine = Alpine;
Alpine.start();

const navEl = document.getElementById('nav-root');
if (navEl) createRoot(navEl).render(<Nav />);

const footerEl = document.getElementById('footer-root');
if (footerEl) createRoot(footerEl).render(<Footer />);
