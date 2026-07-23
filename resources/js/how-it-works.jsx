import './bootstrap';
import { createRoot } from 'react-dom/client';
import HowItWorksApp from './components/how-it-works/HowItWorksApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<HowItWorksApp />);
}
