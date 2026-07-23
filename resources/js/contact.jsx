import './bootstrap';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/contact/ContactApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<ContactApp />);
}
