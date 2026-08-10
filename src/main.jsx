import React, { useMemo, useState } from 'react';

const products = {
  festival: {
    title: 'Festival & Event WiFi',
    kicker: 'Event infrastructure',
    visual: 'festival',
    summary: 'Managed event connectivity for festivals, outdoor venues and high-footfall temporary sites where mobile networks become congested.',
    ideal: ['Music festivals', 'Food festivals', 'Agricultural shows', 'Sporting events', 'Christmas markets', 'Trader villages'],
    steps: ['Plan the site around priority zones, visitor numbers and power availability.', 'Install backhaul, access points and the branded SOS WiFi captive portal.', 'Monitor the service and support the organiser during the event.'],
    benefits: ['Better visitor experience when mobile signal is poor', 'Keeps organisers, traders and production teams connected', 'Supports card payments and operational messaging', 'Can be funded by organisers, users or sponsors', 'Scales by zone, footfall and event size', 'Creates a professional event infrastructure offer'],
    packages: [
      ['Zone Connect', 'STARTER', '£10k to £18k', 'Best for campsites, trader zones or production offices.'],
      ['Event Core', 'MOST POPULAR', '£18k to £35k', 'Balanced coverage for organisers, traders, public and VIP areas.'],
      ['Full Festival', 'PREMIUM', '£35k to £50k+', 'Multi-zone coverage with commercial access, support and reporting.']
    ]
  },
  vip: {
    title: 'VIP & Backstage Connectivity',
    kicker: 'Premium experience',
    visual: 'vip',
    summary: 'Dedicated premium internet for VIP lounges, artist compounds, media zones, sponsor areas and production offices.',
    ideal: ['VIP guest areas', 'Backstage compounds', 'Artist hospitality', 'Sponsor lounges', 'Crew welfare', 'Production offices'],
    steps: ['Create private networks for priority event areas.', 'Control access by wristband, voucher, password or captive portal.', 'Prioritise bandwidth for premium users and operational teams.'],
    benefits: ['Improves the premium ticket experience', 'Supports artist, crew and sponsor expectations', 'Keeps operational teams connected', 'Creates a visible VIP value-add', 'Can be bundled into hospitality sales', 'Reduces pressure on public networks'],
    packages: [
      ['VIP Lounge', 'VIP', 'From £12k', 'For one or more hospitality areas with managed access.'],
      ['Backstage Plus', 'CREW', '£18k to £30k', 'Dedicated backstage, crew, artist and production connectivity.'],
      ['Premium Estate', 'FULL SERVICE', '£30k+', 'VIP, backstage, sponsor and production zones managed as one service.']
    ]
  },
  revenue: {
    title: 'Revenue Share WiFi',
    kicker: 'Commercial model',
    visual: 'revenue',
    summary: 'A commercial WiFi model where visitors pay for access and the organiser receives a share of the revenue generated.',
    ideal: ['Festivals with campsites', 'Holiday parks', 'Outdoor venues', 'Food festivals', 'Large markets', 'Rural visitor attractions'],
    steps: ['Visitors connect to the SOS WiFi network and land on a branded access page.', 'Visitors choose a 30 minute, 1 hour, day or weekend pass.', 'Revenue is shared with the organiser under an agreed model.'],
    benefits: ['Creates income rather than just cost', 'Low-barrier option for organisers', 'No need for the venue to run payments', 'Works where mobile networks are overloaded', 'Can be paired with free VIP access', 'Clear commercial story for sales conversations'],
    packages: [
      ['Revenue Share', 'NO UPFRONT', 'Revenue split', 'SOS WiFi operates the platform and shares takings with the venue.'],
      ['Minimum Guarantee', 'BALANCED', 'Fixed plus share', 'Venue receives certainty with upside if sales perform well.'],
      ['Hybrid Event Model', 'BEST VALUE', 'Custom', 'Festival pays for VIP, crew or trader access while public users pay separately.']
    ]
  },
  hospitality: {
    title: 'Hospitality, Cafés & Campsites',
    kicker: 'Venue connectivity',
    visual: 'hospitality',
    summary: 'Managed guest WiFi for venues that want to improve customer experience, create a paid access service or offer sponsored connectivity.',
    ideal: ['Bars and cafés', 'Restaurants', 'Campsites', 'Glamping sites', 'Holiday parks', 'Farm shops and rural venues'],
    steps: ['Assess buildings, outdoor spaces and customer areas.', 'Install managed WiFi with guest controls and optional paid sessions.', 'Offer WiFi as a perk, paid service or sponsor-funded benefit.'],
    benefits: ['Better guest experience and dwell time', 'Useful for rural sites with poor mobile signal', 'Optional extra income from paid sessions', 'Professional managed service', 'Seasonal and permanent options', 'Suitable for independent venues and larger parks'],
    packages: [
      ['Guest WiFi', 'VENUE PAYS', 'From £750/month', 'Managed WiFi for customer-facing venues.'],
      ['Paid Guest Access', 'REVENUE', 'Revenue share', 'Customers pay for access and the venue receives a share.'],
      ['Seasonal Venue', 'SEASONAL', 'Custom', 'For campsites, glamping sites and holiday parks with seasonal demand.']
    ]
  },
  temporary: {
    title: 'Temporary Internet Deployment',
    kicker: 'Rapid deployment',
    visual: 'temporary',
    summary: 'Fast deployment internet for temporary sites, remote locations and short-term operations that need reliable connectivity quickly.',
    ideal: ['Pop-up venues', 'Construction compounds', 'Film production', 'Outdoor offices', 'Seasonal attractions', 'Emergency or temporary operations'],
    steps: ['Identify the best connectivity route for the location.', 'Deploy equipment, WiFi coverage and access controls.', 'Remove, extend or adapt the service as the site changes.'],
    benefits: ['Quick way to connect temporary locations', 'Avoids relying on weak mobile signal', 'Supports staff, customers and operations', 'Flexible deployment length', 'Can become a permanent solution', 'Useful where fixed infrastructure is not justified'],
    packages: [
      ['Rapid Connect', 'FAST SETUP', 'From £5k', 'Short-term connectivity for small sites and pop-up operations.'],
      ['Operational Site', 'OPERATIONS', '£10k to £25k', 'For compounds, remote offices and larger temporary sites.'],
      ['Managed Deployment', 'MANAGED', '£25k+', 'For complex temporary networks with support and multiple zones.']
    ]
  }
};

const serviceList = Object.keys(products);

const testimonials = [
  ['Festival Operations Manager', 'Independent outdoor event', 'SOS WiFi helped us offer reliable connectivity in an area where mobile signal usually collapses once the site fills up.'],
  ['Hospitality Lead', 'Weekend music festival', 'The VIP WiFi gave our hospitality area a proper premium feel. Guests could stay connected without fighting the public network.'],
  ['Venue Owner', 'Rural leisure site', 'The paid access model meant we could offer better service without taking on the technical work ourselves.']
];

const helpCards = [
  { title: '🎪 Festivals', page: 'festival', text: 'Reliable connectivity for music festivals, food festivals, agricultural shows and large outdoor events.' },
  { title: '🏕️ Campsites', page: 'hospitality', text: 'Seasonal and permanent connectivity for campsites, glamping locations and holiday parks.' },
  { title: '⭐ VIP & Hospitality', page: 'vip', text: 'Premium internet access for VIP areas, artist compounds, hospitality zones and sponsors.' },
  { title: '💳 Food Traders', page: 'revenue', text: 'Connectivity that keeps card payments, EPOS systems and traders connected throughout the event.' },
  { title: '🌳 Outdoor Venues', page: 'temporary', text: 'Temporary and permanent connectivity for outdoor attractions, venues and remote locations.' }
];

function money(value) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value || 0);
}

function SOSLogo({ variant = 'hero', showStrapline = true, showPowered = true }) {
  return (
    <div className={`sos-logo sos-logo-${variant}`}>
      <div className="sos-logo-container">
        <div className="sos-mark">
          <span className="sos-letter">S</span>
          <span className="sos-lifebuoy">🛟</span>
          <span className="sos-letter">S</span>
        </div>
        <div className="sos-wifi">WI-FI</div>
      </div>
      {showStrapline && <p className="sos-lifeline">YOUR INTERNET LIFELINE</p>}
      {showPowered && (
        <div className="sos-powered">
          <span>☀️</span>
          <span>Powered by Sunshine</span>
          <span>☀️</span>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState('home');
  const [users, setUsers] = useState(1200);
  const [price, setPrice] = useState(8);
  const [share, setShare] = useState(30);
  const [sent, setSent] = useState(false);

  const revenue = useMemo(() => {
    const gross = Number(users || 0) * Number(price || 0);
    const venue = gross * (Number(share || 0) / 100);
    return { gross, venue, sos: gross - venue };
  }, [users, price, share]);

  const nav = [
    ['home', 'Home'],
    ['festival', 'Festivals'],
    ['vip', 'VIP'],
    ['revenue', 'Revenue'],
    ['hospitality', 'Hospitality'],
    ['temporary', 'Temporary'],
    ['contact', 'Contact']
  ];

  return (
    <div className="app">
      <header className="nav">
        <button className="brand" onClick={() => setPage('home')} aria-label="SOS WiFi home">
          <SOSLogo variant="nav" showStrapline={true} showPowered={false} />
        </button>

        <div className="navlinks">
          {nav.map(([id, label]) => (
            <button key={id} onClick={() => setPage(id)} className={page === id ? 'active' : ''}>
              {label}
            </button>
          ))}
        </div>

        <button className="primary small" onClick={() => setPage('contact')}>
          Request a site survey
        </button>
      </header>

      {page === 'home' && (
        <Home setPage={setPage} users={users} price={price} share={share} setUsers={setUsers} setPrice={setPrice} setShare={setShare} revenue={revenue} />
      )}
      {serviceList.includes(page) && <Product product={products[page]} setPage={setPage} />}
      {page === 'revenue' && (
        <Revenue users={users} price={price} share={share} setUsers={setUsers} setPrice={setPrice} setShare={setShare} revenue={revenue} setPage={setPage} />
      )}
      {page === 'contact' && <Contact sent={sent} setSent={setSent} />}

      <footer className="footer">
        <SOSLogo variant="footer" showStrapline={true} showPowered={true} />
        <small>Festivals • Venues • Campsites • Remote locations • Premium connectivity</small>
      </footer>
    </div>
  );
}

function Home({ setPage, users, price, share, setUsers, setPrice, setShare, revenue }) {
  return (
    <main>
      <section className="hero hero-new">
        <div className="hero-inner">
          <SOSLogo variant="hero" showStrapline={true} showPowered={true} />
          <div className="hero-copy">
            <h1>Reliable Connectivity For Festivals, Campsites, Venues & Outdoor Events</h1>
            <p className="lead">
              Whether you're running a music festival, managing a campsite, supporting food traders, operating a hospitality venue or delivering premium VIP experiences, SOS WiFi provides reliable internet where mobile networks struggle.
            </p>
            <div className="benefit-grid">
              <div className="benefit-card">✅ Keep Visitors Connected</div>
              <div className="benefit-card">✅ Support Card Payments</div>
              <div className="benefit-card">✅ Improve Guest Experience</div>
              <div className="benefit-card">✅ Create Revenue Opportunities</div>
            </div>
            <div className="hero-buttons">
              <button className="primary" onClick={() => setPage('contact')}>Book a Free Site Survey</button>
              <button className="secondary" onClick={() => setPage('revenue')}>Calculate Revenue Opportunity</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section centre-section">
        <p className="eyebrow">Who We Help</p>
        <h2>Connectivity solutions designed around your event, venue and visitors.</h2>
        <div className="who-we-help">
          {helpCards.map(card => (
            <button key={card.title} className="help-card" onClick={() => setPage(card.page)}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </button>
          ))}
        </div>
      </section>

      <Pricing setPage={setPage} />
      <Revenue users={users} price={price} share={share} setUsers={setUsers} setPrice={setPrice} setShare={setShare} revenue={revenue} setPage={setPage} />
      <Testimonials />
      <CTA setPage={setPage} />
    </main>
  );
}

function Pricing({ setPage }) {
  const pkgs = [
    ['Essential Event Network', 'STARTER', '£10k to £18k', ['Core event WiFi zones', 'Trader and organiser connectivity', 'Captive portal and basic support']],
    ['Premium Festival Network', 'MOST POPULAR', '£18k to £35k', ['VIP, backstage and public access options', 'Dedicated network planning', 'Revenue share or sponsor-funded access']],
    ['Full Event Connectivity Partner', 'PREMIUM', '£35k to £50k+', ['Multi-zone festival coverage', 'VIP, crew, trader and guest services', 'Reporting and post-event review']]
  ];

  return (
    <section className="section alt centre-section">
      <p className="eyebrow gold">Commercial packages</p>
      <h2>Built for £10k to £50k event contracts.</h2>
      <div className="cards three">
        {pkgs.map(([name, badge, price, items]) => <Package key={name} name={name} badge={badge} price={price} items={items} setPage={setPage} />)}
      </div>
    </section>
  );
}

function Package({ name, badge, price, items, setPage }) {
  return (
    <article className="package">
      <span className="floating">{badge}</span>
      <h3>{name}</h3>
      <div className="price">{price}</div>
      <ul>{items.map(x => <li key={x}>✓ {x}</li>)}</ul>
      <button className="primary block" onClick={() => setPage('contact')}>Discuss this package</button>
    </article>
  );
}

function Revenue({ users, price, share, setUsers, setPrice, setShare, revenue, setPage }) {
  return (
    <section className="section revenue">
      <div>
        <p className="eyebrow gold">Revenue share calculator</p>
        <h2>Show organisers how WiFi can pay its way.</h2>
        <p className="lead">Use this model to demonstrate how paid access could generate income for a festival, campsite, event organiser or venue partner.</p>
        <div className="formbox">
          <label>Expected paying users<input type="number" value={users} onChange={e => setUsers(e.target.value)} /></label>
          <label>Average session price<input type="number" value={price} onChange={e => setPrice(e.target.value)} /></label>
          <label>Venue revenue share percentage<input type="number" value={share} onChange={e => setShare(e.target.value)} /></label>
        </div>
      </div>
      <div className="result">
        <span className="floating static">Example event return</span>
        <small>Total gross revenue</small>
        <strong>{money(revenue.gross)}</strong>
        <div className="split">
          <p><small>Venue share</small><b>{money(revenue.venue)}</b></p>
          <p><small>SOS WiFi share</small><b>{money(revenue.sos)}</b></p>
        </div>
        <button className="primary block" onClick={() => setPage('contact')}>Build this into my proposal</button>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section centre-section">
      <p className="eyebrow">Customer confidence</p>
      <h2>Designed for the real conditions of live events.</h2>
      <div className="cards three">
        {testimonials.map(([name, detail, quote]) => (
          <blockquote className="quote" key={name}>
            <div>“</div>
            <p>{quote}</p>
            <footer><strong>{name}</strong><small>{detail}</small></footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function CTA({ setPage }) {
  return (
    <section className="cta">
      <h2>Ready to make connectivity part of the event experience?</h2>
      <p>Tell us about your site, expected attendance and the areas you need to connect.</p>
      <button onClick={() => setPage('contact')}>Start an enquiry</button>
    </section>
  );
}

function Product({ product, setPage }) {
  return (
    <main>
      <section className="product-hero">
        <div>
          <button className="back" onClick={() => setPage('home')}>← Back to services</button>
          <p className="eyebrow">{product.kicker}</p>
          <h1>{product.title}</h1>
          <p className="lead">{product.summary}</p>
          <button className="primary" onClick={() => setPage('contact')}>Request a proposal</button>
          <button className="secondary" onClick={() => setPage('revenue')}>View commercial model</button>
        </div>
        <div className={'visual ' + product.visual}><span>Festival-ready network</span></div>
      </section>

      <section className="section alt grid-two">
        <div className="card"><h2>Who it is for</h2><ul>{product.ideal.map(x => <li key={x}>✓ {x}</li>)}</ul></div>
        <div className="card wide"><h2>How it works</h2><div className="steps">{product.steps.map((x, i) => <p key={x}><b>{i + 1}</b>{x}</p>)}</div></div>
      </section>

      <section className="section centre-section"><h2>Benefits</h2><div className="benefits">{product.benefits.map(x => <p key={x}>✓ {x}</p>)}</div></section>
      <section className="section alt centre-section"><h2>Example packages</h2><div className="cards three">{product.packages.map(([name, badge, price, text]) => <Package key={name} name={name} badge={badge} price={price} items={[text]} setPage={setPage} />)}</div></section>
      <CTA setPage={setPage} />
    </main>
  );
}

function Contact({ sent, setSent }) {
  return (
    <main>
      <section className="contact">
        <div>
          <p className="eyebrow">Enquiry</p>
          <h1>Request a proposal or site survey.</h1>
          <p className="lead">Use this form to capture the key details needed for a serious event connectivity proposal.</p>
          <div className="card"><h2>Good proposal inputs</h2><ul><li>✓ Site location and event dates</li><li>✓ Expected visitor numbers</li><li>✓ VIP, crew, trader and public areas</li><li>✓ Paid, sponsored or included access model</li><li>✓ Known signal problems on site</li></ul></div>
        </div>
        <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <Field label="Name" />
          <Field label="Organisation" />
          <Field label="Email" type="email" />
          <Field label="Phone" />
          <label>Event type<select><option>Festival</option><option>Outdoor event</option><option>Bar, café or hospitality venue</option><option>Campsite or holiday park</option><option>Temporary site</option></select></label>
          <Field label="Estimated attendance" />
          <label className="span2">What do you need connected?<textarea placeholder="Tell us about VIP areas, backstage, crew, traders, public WiFi, campsites or remote buildings." /></label>
          <button className="primary span2">Send enquiry</button>
          {sent && <p className="success span2">Thanks. Your enquiry details have been captured in this prototype.</p>}
        </form>
      </section>
    </main>
  );
}

function Field({ label, type = 'text' }) {
  return <label>{label}<input type={type} /></label>;
}
