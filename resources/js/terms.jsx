import './bootstrap';
import { createRoot } from 'react-dom/client';
import TermsApp from './components/legal/TermsApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<TermsApp />);
}
