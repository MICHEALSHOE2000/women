const services = [
  {
    number: "01",
    title: "Driveways",
    copy: "A clean, durable arrival designed around your home, traffic and everyday use.",
  },
  {
    number: "02",
    title: "Patios",
    copy: "Thoughtful outdoor foundations for gathering, relaxing and making more of your space.",
  },
  {
    number: "03",
    title: "Slabs",
    copy: "Purpose-built concrete slabs with a careful approach to layout, preparation and finish.",
  },
  {
    number: "04",
    title: "Walkways",
    copy: "Practical paths that connect your property with a polished, considered look.",
  },
];

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            name: "The Greatest Concrete Solutions LLC",
            telephone: "+1-706-358-9325",
            url: "https://greatest-concrete-solutions.aderintomicheal6.chatgpt.site",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Columbus",
              addressRegion: "GA",
              postalCode: "31909",
              addressCountry: "US",
            },
            areaServed: ["Columbus, GA", "Shiloh, GA", "West Point, GA", "Georgia", "Alabama"],
            description: "Woman-owned concrete contractor specializing in custom driveways, patios, slabs and walkways.",
          }),
        }}
      />
      <div className="service-ribbon">
        <p>Woman-owned concrete contractor</p>
        <p>Columbus, GA · Serving surrounding GA + AL</p>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="The Greatest Concrete Solutions home">
          <span>The Greatest</span>
          <small>Concrete Solutions</small>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#approach">Why us</a>
          <a href="#service-area">Service area</a>
        </nav>

        <a className="header-call" href="tel:+17063589325">
          <span>Call for an estimate</span>
          (706) 358-9325
        </a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#services">Services</a>
            <a href="#approach">Why us</a>
            <a href="#service-area">Service area</a>
            <a href="tel:+17063589325">Call (706) 358-9325</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Woman-owned · Columbus, GA</p>
          <h1>Concrete work built around your home—and built to last.</h1>
          <p className="hero-intro">
            Custom driveways, patios, slabs and walkways delivered with honest guidance,
            thoughtful detail and clean results.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+17063589325">
              Call (706) 358-9325 <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="sms:+17063589325">
              Text for an estimate <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-image" role="img" aria-label="A beautifully finished concrete driveway at a Southern home">
          <div className="image-marker"><strong>01</strong><span>Built with care</span></div>
        </div>

        <div className="trust-strip" aria-label="Company highlights">
          <div><span>◆</span><p><strong>Woman-owned</strong>Local perspective</p></div>
          <div><span>＋</span><p><strong>Custom concrete</strong>Planned for your property</p></div>
          <div><span>○</span><p><strong>GA + AL</strong>Serving the surrounding area</p></div>
        </div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-heading">
          <p className="eyebrow eyebrow-light"><span /> What we build</p>
          <h2>Concrete that works hard.<br />Looks considered.</h2>
          <p>Every property is different. The right solution starts with listening, then shaping the scope around how you actually use the space.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="tel:+17063589325" aria-label={`Ask about ${service.title.toLowerCase()}`}>
                Discuss your project <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section-shell" id="approach">
        <div className="approach-visual" role="img" aria-label="Professional hands carefully finishing a fresh concrete surface">
          <div className="craft-stamp"><strong>Built</strong><span>with care</span></div>
        </div>
        <div className="approach-copy">
          <p className="eyebrow"><span /> The detail is the difference</p>
          <h2>A custom approach.<br />A cleaner experience.</h2>
          <p className="lead-copy">
            Great concrete starts before the first pour. It starts with a clear conversation about your property, your priorities and what a lasting result should look like.
          </p>
          <div className="approach-list">
            <article>
              <span>01</span>
              <div><h3>Honest guidance</h3><p>Clear recommendations shaped around the job—not a one-size-fits-all pitch.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Custom service</h3><p>Your layout, use case and surroundings guide the plan from the beginning.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Attention to detail</h3><p>Thoughtful preparation and a close eye on the finish help the work feel considered.</p></div>
            </article>
          </div>
          <a className="text-link" href="tel:+17063589325">Talk through your project <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="possibilities section-shell">
        <div className="possibilities-head">
          <p className="eyebrow"><span /> Made for real life</p>
          <h2>More than a surface.<br />A better way to use your home.</h2>
        </div>
        <div className="possibilities-grid">
          <div className="patio-image" role="img" aria-label="An elegant concrete patio and connecting walkway at a Southern home" />
          <div className="possibility-note">
            <span className="large-number">02</span>
            <p>Outdoor living</p>
            <h3>Give the everyday more room.</h3>
            <p className="note-copy">A well-planned patio or walkway can make your outdoor space feel more useful, connected and complete.</p>
            <a href="sms:+17063589325">Ask about patios + walkways <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="service-area section-shell" id="service-area">
        <div>
          <p className="eyebrow eyebrow-light"><span /> Local service</p>
          <h2>Rooted in Columbus.<br />Working across the line.</h2>
        </div>
        <div className="area-copy">
          <p>
            Based in Columbus, Georgia 31909, The Greatest Concrete Solutions serves homeowners and property owners throughout the surrounding Georgia and Alabama communities.
          </p>
          <div className="area-list" aria-label="Service areas">
            <span>Columbus, GA</span>
            <span>Shiloh, GA</span>
            <span>West Point, GA</span>
            <span>Surrounding Georgia</span>
            <span>Nearby Alabama</span>
          </div>
          <p className="area-small">Not sure whether your property is in range? Call and tell us where the project is located.</p>
          <a className="button area-button" href="tel:+17063589325">Check your area <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="faq section-shell">
        <div className="faq-heading">
          <p className="eyebrow"><span /> Good questions, clear answers</p>
          <h2>Before the work begins.</h2>
          <p>Every estimate starts with the specifics of your property. These answers will help you know what to discuss when you call.</p>
        </div>
        <div className="faq-list">
          <details>
            <summary>What types of concrete projects do you handle?<span>＋</span></summary>
            <p>Custom residential and property concrete work, including driveways, patios, slabs and walkways. Call to discuss the size, location and goals of your project.</p>
          </details>
          <details>
            <summary>Do you serve areas outside Columbus?<span>＋</span></summary>
            <p>Yes. The company serves surrounding communities in Georgia and Alabama, including areas near Shiloh and West Point. Call with your location to confirm availability.</p>
          </details>
          <details>
            <summary>How do I request an estimate?<span>＋</span></summary>
            <p>Call or text (706) 358-9325 with your name, project location, the type of concrete work you need and any helpful details about the space.</p>
          </details>
          <details>
            <summary>Can the work be customized to my property?<span>＋</span></summary>
            <p>Yes. Custom service is central to the approach. Your property, practical needs and preferred look are discussed before the scope is shaped.</p>
          </details>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow eyebrow-light"><span /> Start with a conversation</p>
        <h2>Let&apos;s build something<br />that belongs at your home.</h2>
        <p>Tell us what you&apos;re planning, where the project is located and what you want the finished space to do.</p>
        <div className="final-actions">
          <a className="button final-primary" href="tel:+17063589325">Call (706) 358-9325 <span aria-hidden="true">→</span></a>
          <a className="button final-secondary" href="sms:+17063589325">Text project details <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top" aria-label="Back to top">
          <span>The Greatest</span>
          <small>Concrete Solutions</small>
        </a>
        <div className="footer-contact">
          <p>Woman-owned concrete contractor</p>
          <p>Columbus, Georgia 31909</p>
          <a href="tel:+17063589325">(706) 358-9325</a>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#approach">Why us</a>
          <a href="#service-area">Service area</a>
          <a href="sms:+17063589325">Request an estimate</a>
        </div>
        <p className="copyright">© 2026 The Greatest Concrete Solutions LLC. Serving GA + AL.</p>
      </footer>

      <div className="mobile-call-bar">
        <a href="tel:+17063589325">Call now</a>
        <a href="sms:+17063589325">Text for estimate</a>
      </div>
    </main>
  );
}
