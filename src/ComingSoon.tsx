import "./coming-soon.css"

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
    </svg>
  )
}

function Spark({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 80 80"
      fill="none"
    >
      <path d="M40 2v76M2 40h76M13 13l54 54M67 13 13 67" />
    </svg>
  )
}

function BrandFloats() {
  return (
    <div className="brand-floats" aria-hidden="true">
      <img
        className="brand-mark brand-mark--hash float-mid"
        src="/assets/floating/hash.png"
        alt=""
        width={123}
        height={135}
        loading="lazy"
        decoding="async"
      />
      <img
        className="brand-mark brand-mark--slashes float-slow"
        src="/assets/floating/slashes.png"
        alt=""
        width={176}
        height={190}
        loading="lazy"
        decoding="async"
      />
      <img
        className="brand-mark brand-mark--quotes float-mid"
        src="/assets/floating/quotes.png"
        alt=""
        width={145}
        height={96}
        loading="lazy"
        decoding="async"
      />
      <img
        className="brand-mark brand-mark--circle float-mid"
        src="/assets/floating/circle.png"
        alt=""
        width={98}
        height={97}
        loading="lazy"
        decoding="async"
      />
      <img
        className="brand-mark brand-mark--plus float-fast"
        src="/assets/floating/plus.png"
        alt=""
        width={100}
        height={101}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

function BuildCard() {
  return (
    <section className="build-card" aria-label="Website build status console">
      <div className="build-card__header">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span>devfest.lu / build</span>
        <span className="build-card__check" aria-hidden="true">
          ✓
        </span>
      </div>
      <div className="build-card__body">
        <p className="code-line">
          <span className="code-muted" aria-hidden="true">
            01
          </span>
          <span>
            <b className="code-blue">const</b> nextDevFest ={" "}
            <b className="code-yellow">"Luxembourg"</b>;
          </span>
        </p>
        <p className="code-line">
          <span className="code-muted" aria-hidden="true">
            02
          </span>
          <span>
            <b className="code-blue">await</b> community.
            <b className="code-green">createSomethingAwesome</b>();
          </span>
        </p>
        <p className="code-line">
          <span className="code-muted" aria-hidden="true">
            03
          </span>
          <span className="code-pink">// good things take time</span>
        </p>
        <div className="build-progress">
          <div className="build-progress__meta">
            <span>COMPILING THE GOOD STUFF</span>
            <span className="loading-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="Build compilation progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={70}
            aria-valuetext="Compiling in progress"
          >
            <span aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ComingSoon() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main className="page-shell" id="main-content">
        <div className="noise" aria-hidden="true" />
        <div className="blueprint-grid" aria-hidden="true" />
        <BrandFloats />
        <Spark className="spark spark--top" />
        <Spark className="spark spark--bottom" />

        <header className="site-header" role="banner">
          <div className="logo-wrap">
            <img
              src="/assets/devfest-luxembourg.png"
              alt="DevFest Luxembourg"
              width={282}
              height={81}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div
            className="status-pill"
            role="status"
            aria-label="Site status: Build in progress"
          >
            <span aria-hidden="true" />
            SITE BUILD: IN PROGRESS
          </div>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy">
            <div className="date-label">
              <span>MARCH 2027</span>
              <i aria-hidden="true" />
              <span>LUXEMBOURG</span>
            </div>
            <h1 id="hero-title">
              Something awesome
              <br />
              is compiling<span className="ellipsis">...</span>
              <span className="cursor" aria-hidden="true" />
            </h1>
            <p className="lead">
              Big ideas. Brilliant minds.{" "}
              <strong>
                Four amazing tech communities: GDG, FoF Luxembourg, LuxTech Pulse,
                Luxembourg University Students
              </strong>
            </p>
            <p className="supporting">
              DevFest Luxembourg returns in March 2027.
            </p>
            <div className="actions">
              <a
                className="linkedin-button"
                href="https://www.linkedin.com/company/devfest-luxembourg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow DevFest Luxembourg on LinkedIn (opens in a new tab)"
              >
                <span className="linkedin-button__icon" aria-hidden="true">
                  <LinkedInIcon />
                </span>
                <span>Follow us on LinkedIn</span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <p className="no-spoilers" aria-label="Status note: More soon.">
                More soon.
              </p>
            </div>
          </div>

          <div className="hero__visual">
            <div className="visual-label" aria-hidden="true">
              behind the scenes
            </div>
            <BuildCard />
            <div className="tiny-note" aria-hidden="true">
              <span>{"{ "}</span>
              caffeine + curiosity
              <span>{" }"}</span>
            </div>
          </div>
        </section>

        <footer className="site-footer" role="contentinfo">
          <span>© GDG Luxembourg ASBL</span>
          <span className="footer-code" aria-hidden="true">
            MADE WITH COMMUNITY_POWER()
          </span>
        </footer>
      </main>
    </>
  )
}
