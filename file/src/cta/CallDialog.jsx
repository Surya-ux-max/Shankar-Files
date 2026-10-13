import { useState } from 'react'
import { CTA_DATA } from './ctaData'

export default function CallDialog({ isOpen, onClose }) {
  const [copiedType, setCopiedType] = useState(null)

  if (!isOpen) return null

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(type)
      setTimeout(() => setCopiedType(null), 2200)
    })
  }

  return (
    <div
      className="call-dialog-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="call-dialog-title"
    >
      <div
        className="call-dialog-sheet"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drafting Screws */}
        <div className="sheet-screw screw-tl" aria-hidden="true">+</div>
        <div className="sheet-screw screw-tr" aria-hidden="true">+</div>
        <div className="sheet-screw screw-bl" aria-hidden="true">+</div>
        <div className="sheet-screw screw-br" aria-hidden="true">+</div>

        <header className="dialog-header">
          <div className="dialog-meta-tag">
            <span className="dialog-status-dot" />
            <span className="dialog-meta-text">DIRECT DISPATCH · READY TO CONNECT</span>
          </div>

          <button
            type="button"
            className="dialog-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            ✕
          </button>
        </header>

        <div className="dialog-body">
          <h3 id="call-dialog-title" className="dialog-title">
            Let us build something meaningful together.
          </h3>
          <p className="dialog-desc">
            Available for engineering roles, technical architecture deep dives, or high-throughput platform builds.
            Choose your preferred channel below:
          </p>

          {/* Contact Methods Grid */}
          <div className="dialog-methods-grid">
            {/* Phone Channel */}
            <div className="method-card">
              <div className="method-header">
                <span className="method-label">Direct Phone Line</span>
                <span className="method-pill">Instant Call</span>
              </div>
              <div className="method-val">{CTA_DATA.contact.displayPhone}</div>
              <div className="method-actions">
                <a
                  href={`tel:${CTA_DATA.contact.phone}`}
                  className="method-action-btn btn-call"
                >
                  Dial Now
                </a>
                <button
                  type="button"
                  className="method-action-btn btn-copy"
                  onClick={() => handleCopy(CTA_DATA.contact.phone, 'phone')}
                >
                  {copiedType === 'phone' ? 'Copied' : 'Copy Number'}
                </button>
              </div>
            </div>

            {/* Email Channel */}
            <div className="method-card">
              <div className="method-header">
                <span className="method-label">Direct Email</span>
                <span className="method-pill">Verified Inbox</span>
              </div>
              <div className="method-val">{CTA_DATA.contact.displayEmail}</div>
              <div className="method-actions">
                <a
                  href={`mailto:${CTA_DATA.contact.email}?subject=Project%20Inquiry%20via%20Portfolio`}
                  className="method-action-btn btn-call"
                >
                  Send Email
                </a>
                <button
                  type="button"
                  className="method-action-btn btn-copy"
                  onClick={() => handleCopy(CTA_DATA.contact.email, 'email')}
                >
                  {copiedType === 'email' ? 'Copied' : 'Copy Email'}
                </button>
              </div>
            </div>
          </div>

          {/* Availability details */}
          <div className="dialog-footer-details">
            <div className="footer-detail-item">
              <span className="f-label">Timezone:</span>
              <span className="f-val">IST (UTC +5:30)</span>
            </div>
            <div className="footer-detail-item">
              <span className="f-label">Location:</span>
              <span className="f-val">India · Global Remote Ready</span>
            </div>
            <div className="footer-detail-item">
              <span className="f-label">Response:</span>
              <span className="f-val">Within 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
