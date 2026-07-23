import './bootstrap';
import { createRoot } from 'react-dom/client';
import TrackingApp from './components/tracking/TrackingApp';

const el = document.getElementById('app');
if (el) {
    createRoot(el).render(<TrackingApp />);
}
