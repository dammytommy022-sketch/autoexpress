import './bootstrap';
import { createRoot } from 'react-dom/client';
import AboutApp from './components/about/AboutApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<AboutApp />);
}
