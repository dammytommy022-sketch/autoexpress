import './bootstrap';
import { createRoot } from 'react-dom/client';
import PricingApp from './components/pricing/PricingApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<PricingApp />);
}
