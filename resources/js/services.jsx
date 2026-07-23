import './bootstrap';
import { createRoot } from 'react-dom/client';
import ServicesApp from './components/services/ServicesApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<ServicesApp />);
}
