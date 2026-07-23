import './bootstrap';
import { createRoot } from 'react-dom/client';
import PaymentPolicyApp from './components/legal/PaymentPolicyApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<PaymentPolicyApp />);
}
