import './bootstrap';
import { createRoot } from 'react-dom/client';
import PrivacyApp from './components/legal/PrivacyApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<PrivacyApp />);
}
