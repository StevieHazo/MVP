import React, { useMemo, useState } from 'react';

const solutions = [
  {
    id: 'festival-connect',
    label: 'MVP',
    name: 'Festival Connect',
    strapline: 'White-label festival connectivity platform',
    summary: 'A branded guest WiFi and monetisation platform for festivals that want the customer experience to feel like their own, not a third-party add-on.',
    outcomes: ['Custom event branding', 'Paid access and revenue share', 'Sponsor-ready portal spaces', 'Usage and revenue reporting'],
    status: 'Build first'
  },
  {
    id: 'sos-wifi',
    label: 'Live product',
    name: 'SOS WiFi',
    strapline: 'Consumer paid-access WiFi',
    summary: 'The existing B2C product for event attendees and visitors. Keep this running as the proven consumer product and income stream.',
    outcomes: ['Direct user payments', 'Fast event deployment', 'Proven captive portal flow', 'Useful fallback where organisers decline B2B'],
    status: 'Already live'
  },
  {
    id: 'vip-connect',
    label: 'Premium',
    name: 'VIP Connect',
    strapline: 'Premium connectivity for high-value areas',
    summary: 'Dedicated connectivity for VIP lounges, sponsor areas, artist compounds, media teams, backstage and production offices.',
    outcomes: ['Private networks', 'Priority bandwidth', 'Operational reliability', 'Premium guest experience'],
    status: 'Product extension'
  },
  {
    id: 'sponsor-connect',
    label: 'Commercial',
    name: 'Sponsor Connect',
    strapline: 'Sponsor-funded guest connectivity',
    summary: 'Free or discounted guest WiFi funded by a sponsor, with branded portal space and campaign messaging built into the access journey.',
    outcomes: ['Sponsor visibility', 'Reduced attendee friction', 'Campaign landing pages', 'Commercial partnership model'],
    status: 'Phase two'
  },
  {
    id: 'venue-connect',
    label: 'Recurring',
    name: 'Venue Connect',
    strapline: 'Connectivity for campsites, parks and venues',
    summary: 'Managed guest WiFi for campsites, glamping locations, holiday parks, outdoor attractions and leisure venues.',
    outcomes: ['Recurring revenue', 'Guest WiFi', 'Seasonal installs', 'Venue-branded access'],
    status: 'Later expansion'
  }
];

const commercialModels = [
  {
    title: 'Festival-Funded',
    subtitle: 'Fixed deployment fee',
    description: 'The organiser pays a fixed fee for the connectivity platform and keeps the access revenue. Best where budget is available and the organiser wants control.',
    commercial: 'Fixed fee + optional support'
  },
  {
    title: 'Revenue Share Partnership',
    subtitle: 'Lower upfront cost',
    description: 'The organiser reduces upfront cost and revenue from paid access is shared. Best for smaller events or pilot customers who want lower risk.',
    commercial: 'Setup fee + shared revenue'
  },
  {
    title: 'White-Label Platform',
    subtitle: 'Event owns the experience',
    description: 'The festival promotes the service under its own brand, using the platform, portal, payments and reporting capability behind the scenes.',
    commercial: 'Licence + support + optional revenue share'
  },
  {
    title: 'Sponsored Connectivity',
    subtitle: 'Guest access funded by sponsors',
    description: 'Guests receive free or subsidised WiFi while sponsors receive visible branded placement in the connection journey.',
    commercial: 'Sponsor fee + platform fee'
  }
];

const roadmap = [
  ['Aug to Sep 2026', 'Define parent brand, product names and MVP offer'],
  ['Oct to Nov 2026', 'Build white-label portal, reporting and sponsor-ready components'],
  ['Dec 2026 to Jan 2027', 'Create sales pack, prospect list and promoter outreach'],
  ['Feb to Mar 2027', 'Secure pilot, finalise site survey and operational plan'],
  ['19 Apr 2027', 'Target pilot: This Feeling By The Sea'],
  ['Summer 2027', 'Use pilot evidence to approach smaller festivals and promoters']
];

const proofPoints = [
  'White-label guest portal',
  'Revenue share options',
  'Managed deployment',
  'Sponsor-ready access journey',
  'Operational and VIP networks',
  'Usage and revenue reporting'
];

function money(value) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value || 0);
}

function App() {
  const [users, setUsers] = useState(1000);
  const [price, setPrice] = useState(8);
  const [share, setShare] = useState(35);

  const revenue = useMemo(() => {
    const gross = Number(users || 0) * Number(price || 0);
    const organiser = gross * (Number(share || 0) / 100);
    const platform = gross - organiser;
    return { gross, organiser, platform };
  }, [users, price, share]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="Event Connectivity Services home">
          <span className="brand-symbol">EC</span>
          <span>
            <strong>Event Connectivity Services</strong>
            <small>Connectivity platforms for events, venues and temporary sites</small>
          </span>
        </a>
        <nav className="navlinks" aria-label="Main navigation">
          <a href="#solutions">Solutions</a>
          <a href="#commercial">Commercial Models</a>
          <a href="#pilot">Pilot Plan</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="topbar-cta" href="#contact">Discuss a pilot</a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Event connectivity group MVP</p>
            <h1>Connectivity platforms that help events operate, monetise and grow.</h1>
            <p className="hero-lead">
              A high-end shop window for a new parent brand above SOS WiFi. The business provides managed connectivity, branded captive portals, revenue models and sponsor-ready access journeys for festivals, venues and temporary sites.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Start pilot conversation</a>
              <a className="button secondary" href="#calculator">Model revenue potential</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="portal-card main-portal">
              <span className="portal-badge">Group Portal</span>
              <h2>Select a connectivity product</h2>
              <div className="portal-grid-mini">
                <span>Festival Connect</span>
                <span>SOS WiFi</span>
                <span>VIP Connect</span>
                <span>Sponsor Connect</span>
              </div>
            </div>
            <div className="signal-orbit orbit-one"></div>
            <div className="signal-orbit orbit-two"></div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Trust indicators">
          {proofPoints.map(point => <span key={point}>✓ {point}</span>)}
        </section>

        <section id="solutions" className="section centre-section">
          <p className="eyebrow">Solution portal</p>
          <h2>One parent company. Multiple focused products.</h2>
          <p className="section-lead">
            SOS WiFi remains the proven consumer product. The MVP creates a broader B2B structure where each product has its own purpose, audience and commercial model.
          </p>
          <div className="solution-grid">
            {solutions.map(item => (
              <article className="solution-card" key={item.id}>
                <div className="solution-topline">
                  <span>{item.label}</span>
                  <small>{item.status}</small>
                </div>
                <h3>{item.name}</h3>
                <h4>{item.strapline}</h4>
                <p>{item.summary}</p>
                <ul>
                  {item.outcomes.map(outcome => <li key={outcome}>✓ {outcome}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="calculator" className="section calculator-section">
          <div className="calculator-copy">
            <p className="eyebrow gold">Commercial model</p>
            <h2>Turn connectivity into a revenue opportunity.</h2>
            <p className="section-lead">
              The MVP should prove that a branded festival connectivity platform can either recover cost, generate income, or create a sponsor-funded visitor benefit.
            </p>
            <div className="input-grid">
              <label>Expected paying users<input type="number" value={users} onChange={e => setUsers(e.target.value)} /></label>
              <label>Average access price (£)<input type="number" value={price} onChange={e => setPrice(e.target.value)} /></label>
              <label>Organiser share (%)<input type="number" value={share} onChange={e => setShare(e.target.value)} /></label>
            </div>
          </div>
          <div className="calculator-result">
            <span className="portal-badge">Example model</span>
            <small>Gross access revenue</small>
            <strong>{money(revenue.gross)}</strong>
            <div className="result-split">
              <p><small>Organiser share</small><b>{money(revenue.organiser)}</b></p>
              <p><small>Platform share</small><b>{money(revenue.platform)}</b></p>
            </div>
            <a className="button primary block" href="#contact">Build this into a pilot</a>
          </div>
        </section>

        <section id="commercial" className="section alt centre-section">
          <p className="eyebrow">Commercial models</p>
          <h2>Flexible ways for organisers to fund connectivity.</h2>
          <div className="model-grid">
            {commercialModels.map(model => (
              <article className="model-card" key={model.title}>
                <span>{model.subtitle}</span>
                <h3>{model.title}</h3>
                <p>{model.description}</p>
                <strong>{model.commercial}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="pilot" className="section pilot-section">
          <div>
            <p className="eyebrow gold">MVP launch plan</p>
            <h2>Target pilot: This Feeling By The Sea, 19 April 2027.</h2>
            <p className="section-lead">
              The goal is not to launch every product. The goal is to prove one white-label festival connectivity platform, capture usable evidence, then use that evidence to approach promoters and smaller organisers through the 2027 season.
            </p>
          </div>
          <div className="timeline">
            {roadmap.map(([date, activity]) => (
              <div className="timeline-item" key={date}>
                <span>{date}</span>
                <p>{activity}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section why-section centre-section">
          <p className="eyebrow">Positioning</p>
          <h2>Not just WiFi. A managed event connectivity platform.</h2>
          <div className="positioning-grid">
            <article><h3>For organisers</h3><p>Reliable infrastructure, stronger visitor experience, and a route to recover cost through paid access or sponsor funding.</p></article>
            <article><h3>For visitors</h3><p>A branded, simple connection journey that feels part of the event rather than a third-party add-on.</p></article>
            <article><h3>For the business</h3><p>A scalable parent brand with SOS WiFi as one product and white-label connectivity as the flagship B2B MVP.</p></article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <p className="eyebrow gold">Next step</p>
            <h2>Use this as the MVP shop window.</h2>
            <p className="section-lead">
              Start the conversation with promoters such as This Feeling and smaller festival organisers. The pitch is simple: a managed branded connectivity platform that can improve operations, visitor experience and commercial return.
            </p>
          </div>
          <form className="contact-card">
            <label>Name<input placeholder="Your name" /></label>
            <label>Organisation<input placeholder="Festival, promoter or venue" /></label>
            <label>Email<input placeholder="name@example.co.uk" /></label>
            <label>What are you planning?<textarea placeholder="Tell us about the event, location, audience size and whether you want fixed fee, revenue share, white-label or sponsor-funded connectivity." /></label>
            <button className="button primary" type="button">Draft enquiry</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <strong>Event Connectivity Services</strong>
        <p>Parent brand for SOS WiFi, Festival Connect, VIP Connect, Sponsor Connect and Venue Connect.</p>
        <small>OFFICIAL-SENSITIVE · MVP concept site · Powered by Sunshine messaging can remain footer-only.</small>
      </footer>
    </div>
  );
}

export default App;
