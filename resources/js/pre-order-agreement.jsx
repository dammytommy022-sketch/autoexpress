import './bootstrap';
import { createRoot } from 'react-dom/client';
import PreOrderAgreementApp from './components/legal/PreOrderAgreementApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<PreOrderAgreementApp />);
}
