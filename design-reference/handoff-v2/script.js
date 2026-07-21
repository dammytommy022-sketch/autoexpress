// ---- Data ----
const services = [
  { n: '01 / SOURCING', title: 'PRE-ORDER', desc: 'Bid or reserve the exact vehicle you want from vetted auctions and sellers.' },
  { n: '02 / INLAND', title: 'TRUCKING', desc: 'Insured haulage from the yard to port, tracked at every mile marker.' },
  { n: '03 / OCEAN', title: 'SHIPPING', desc: 'Container or RoRo ocean freight on scheduled sailings to your home port.' },
  { n: '04 / BORDER', title: 'CUSTOMS', desc: 'Duties, documentation and border clearance handled on your behalf.' },
  { n: '05 / PREP', title: 'REPAIRS', desc: 'Pre-delivery inspection and reconditioning before the vehicle reaches you.' },
];
const checkpoints = ['REQUEST','PAY','QUOTE','APPROVE','IMPORT','TRACK','DELIVER'];
const why = [
  { title: 'TRANSPARENT PRICING', desc: 'One quote, no hidden fees added later in the process.' },
  { title: 'SECURE PAYMENTS', desc: 'Funds held and released against milestones, not promises.' },
  { title: 'VEHICLE TRACKING', desc: 'Live status from auction hall to your front door.' },
  { title: 'EXPERIENCED TEAM', desc: 'Licensed brokers who handle customs paperwork daily.' },
  { title: 'CUSTOMER SUPPORT', desc: 'A named agent on your file from start to delivery.' },
  { title: 'TRUSTED PROCESS', desc: 'The same seven checkpoints, every vehicle, every time.' },
];
const tiers = [
  { tier: 'TIER 01', name: 'BASIC', premium: false,
    feats: ['Auction floor access','Standard trucking rates','Email status updates','Net-15 invoicing'] },
  { tier: 'TIER 02', name: 'PREMIUM', premium: true,
    feats: ['Priority auction access','Discounted freight blocks','Live manifest tracking','Net-30 invoicing + credit line'] },
];
const reviews = [
  { quote: 'Every checkpoint matched the tracker exactly. No surprises at customs, no surprise fees.', author: '— PRIVATE IMPORTER, ONTARIO' },
  { quote: 'We moved eleven units through the dealer programme in our first quarter alone.', author: '— TRADE PARTNER, PREMIUM TIER' },
  { quote: 'The manifest number made it simple to know exactly where the truck was, always.', author: '— PRIVATE IMPORTER, TEXAS' },
  { quote: 'Reconditioning was flawless — the car arrived detailed and ready to drive off.', author: '— PRIVATE IMPORTER, ALBERTA' },
  { quote: 'Customs paperwork that used to take us weeks now clears in days. Game changer.', author: '— TRADE PARTNER, BASIC TIER' },
  { quote: 'A named agent answered every call. Import stress dropped to zero.', author: '— PRIVATE IMPORTER, FLORIDA' },
];
const el = (t, cls, html) => { const e = document.createElement(t); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

// ---- Render lists ----
const sg = document.getElementById('services-grid');
services.forEach(s => {
  const c = el('div', 'svc');
  c.innerHTML = `<div class="svc__n">${s.n}</div><h3>${s.title}</h3><p>${s.desc}</p>`;
  sg.appendChild(c);
});

const steps = document.getElementById('steps');
checkpoints.forEach((label, i) => {
  const c = el('div', 'step');
  const line = i < checkpoints.length - 1 ? '<div class="step__line"></div>' : '';
  c.innerHTML = `${line}<div class="step__n">${String(i+1).padStart(2,'0')}</div><div class="step__l">${label}</div>`;
  steps.appendChild(c);
});

const wg = document.getElementById('why-grid');
why.forEach(w => {
  const c = el('div', 'wcard');
  c.innerHTML = `<div class="wcard__t"><span>✓</span><h3>${w.title}</h3></div><p>${w.desc}</p>`;
  wg.appendChild(c);
});

const tg = document.getElementById('tiers');
tiers.forEach(t => {
  const c = el('div', 'tier' + (t.premium ? ' tier--premium' : ''));
  const feats = t.feats.map(f => `<div class="tier__feat"><span>${f}</span><b>✓</b></div>`).join('');
  c.innerHTML = `<div class="tier__tier">${t.tier}</div><h3>${t.name}</h3>${feats}<a href="#contact" class="tier__btn">REGISTER NOW</a>`;
  tg.appendChild(c);
});

// ---- Reviews carousel ----
const rtrack = document.getElementById('rtrack');
const rdots = document.getElementById('rdots');
reviews.forEach(r => {
  const c = el('div', 'rcard');
  c.innerHTML = `<div class="stars">★★★★★</div><p>&ldquo;${r.quote}&rdquo;</p><div class="rcard__a">${r.author}</div>`;
  rtrack.appendChild(c);
});
reviews.forEach((_, i) => {
  const b = el('button');
  b.addEventListener('click', () => rtrack.scrollTo({ left: i * cardW(), behavior: 'smooth' }));
  rdots.appendChild(b);
});
function cardW() {
  const first = rtrack.firstElementChild;
  const gap = parseFloat(getComputedStyle(rtrack).columnGap) || 24;
  return (first ? first.getBoundingClientRect().width : 0) + gap;
}
function syncDots() {
  const i = Math.round(rtrack.scrollLeft / (cardW() || 1));
  [...rdots.children].forEach((d, k) => d.classList.toggle('on', k === i));
}
function step(dir, loop) {
  const max = rtrack.scrollWidth - rtrack.clientWidth;
  let target = rtrack.scrollLeft + dir * cardW();
  if (loop && dir > 0 && rtrack.scrollLeft >= max - 2) target = 0;
  rtrack.scrollTo({ left: Math.max(0, Math.min(target, max)), behavior: 'smooth' });
}
rtrack.addEventListener('scroll', syncDots, { passive: true });
document.getElementById('rprev').addEventListener('click', () => { step(-1, false); restart(); });
document.getElementById('rnext').addEventListener('click', () => { step(1, true); restart(); });
let timer = setInterval(() => step(1, true), 7000);
function restart() { clearInterval(timer); timer = setInterval(() => step(1, true), 7000); }
syncDots();

// ---- Mobile menu ----
const menu = document.getElementById('menu');
menu.classList.add('closed');
document.getElementById('burger').addEventListener('click', () => menu.classList.toggle('closed'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (window.matchMedia('(max-width:760px)').matches) menu.classList.add('closed');
}));

// ---- Tracker (demo) ----
const currentStep = 4; // 0-based -> "IMPORT"
document.getElementById('trackform').addEventListener('submit', (e) => {
  e.preventDefault();
  const num = document.getElementById('track-input').value.trim() || 'VCT-2026-084517';
  const res = document.getElementById('track-result');
  res.hidden = false;
  res.innerHTML = `<b>${num}</b> — currently at checkpoint 05 (<b>${checkpoints[currentStep]}</b>). ` +
    `Cleared inland trucking, now aboard a scheduled sailing. Estimated arrival in 12 days.`;
});
