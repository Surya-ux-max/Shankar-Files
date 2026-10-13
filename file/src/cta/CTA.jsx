import { useState } from 'react'
import WindStormCanvas from './WindStormCanvas'
import CallDialog from './CallDialog'
import { CTA_DATA } from './ctaData'
import './CTA.css'

export default function CTA() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CTA_DATA.contact.email).then(() => {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    })
  }

  return (
    <section className="cta-section" id="contact" aria-label="Call to Action & Dispatch">
      {/* Drafting Grid & Paper Texture Background */}
      <div className="cta-paper-bg" aria-hidden="true" />

      {/* Atmospheric Wind & Storm Pool Particle Canvas */}
      <WindStormCanvas />

      {/* Storyboard Corner Framing Marks */}
      <div className="cta-frame-corner cta-fc-tl" aria-hidden="true" />
      <div className="cta-frame-corner cta-fc-tr" aria-hidden="true" />
      <div className="cta-frame-corner cta-fc-bl" aria-hidden="true" />
      <div className="cta-frame-corner cta-fc-br" aria-hidden="true" />

      <div className="cta-content-wrapper">
        {/* Top Header Tag */}
        <header className="cta-header-tag">
          <span className="tag-dot" />
          <span className="tag-text">{CTA_DATA.kicker}</span>
        </header>

        {/* ================= HALF-SCREEN GIANT TYPOGRAPHY ================= */}
        <div className="cta-giant-typo-block" aria-label="Call to action headline">
          <div className="typo-row row-top">
            <span className="giant-text text-accent">{CTA_DATA.headline.line1}</span>
          </div>
          <div className="typo-row row-bottom">
            <span className="giant-text text-ink">{CTA_DATA.headline.line2}</span>
          </div>
        </div>

        {/* Narrative & Context Subtitle */}
        <div className="cta-narrative-container">
          <p className="cta-narrative-text">{CTA_DATA.tagline}</p>
        </div>

        {/* Direct Action Channels */}
        <div className="cta-actions-group">
          <button
            type="button"
            className="cta-primary-btn btn-call-main"
            onClick={() => setIsDialogOpen(true)}
            id="cta-call-btn"
          >
            <span className="btn-inner-dot" />
            <span className="btn-text">Call Me</span>
          </button>

          <div className="cta-email-btn-wrapper">
            <a
              href={`mailto:${CTA_DATA.contact.email}?subject=Project%20Opportunity%20via%20Portfolio`}
              className="cta-secondary-btn"
              id="cta-email-btn"
            >
              Drop an Email
            </a>
            <button
              type="button"
              className="cta-copy-chip"
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              aria-label="Copy email address"
            >
              {copiedEmail ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Social & Code Presence Links */}
        <div className="cta-social-strip">
          <span className="strip-label">DIRECT CHANNELS:</span>

          <a
            href={CTA_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-link"
          >
            LinkedIn
          </a>

          <a
            href={CTA_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-link"
          >
            GitHub
          </a>

          <a
            href={CTA_DATA.contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-link"
          >
            LeetCode
          </a>

          <span className="availability-live-pill">
            <span className="live-dot" />
            <span>Available for Full-Time Roles</span>
          </span>
        </div>

        {/* Metadata Footer */}
        <footer className="cta-colophon-footer">
          <div className="colophon-left">
            <span>SHANKAR V · ARCHITECTURE &amp; CRAFTSMANSHIP</span>
          </div>
          <div className="colophon-right">
            <span>2026 · ALL SYSTEMS VERIFIED</span>
          </div>
        </footer>
      </div>

      {/* Direct Call & Dispatch Dialog */}
      <CallDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </section>
  )
}
