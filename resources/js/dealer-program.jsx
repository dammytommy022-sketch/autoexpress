import './bootstrap';
import { createRoot } from 'react-dom/client';
import DealerProgramApp from './components/dealer-program/DealerProgramApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<DealerProgramApp />);
}
