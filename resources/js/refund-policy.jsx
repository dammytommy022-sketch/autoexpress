import './bootstrap';
import { createRoot } from 'react-dom/client';
import RefundPolicyApp from './components/legal/RefundPolicyApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<RefundPolicyApp />);
}
